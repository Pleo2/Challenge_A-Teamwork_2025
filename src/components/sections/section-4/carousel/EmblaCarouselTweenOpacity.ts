import { type EmblaCarouselType, type EmblaEventType } from "embla-carousel";

// Constante base para calcular el factor de atenuación de opacidad.
const TWEEN_FACTOR_BASE = 0.84;
let tweenFactor = 0;

const MIN_SCALE = 0.70;
const MAX_SCALE = 1;

// Función auxiliar para limitar un número entre un mínimo y un máximo.
const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

// Calcula el tweenFactor según la cantidad de slides.
const setTweenFactor = (emblaApi: EmblaCarouselType): void => {
    tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
};

// Función principal que ajusta la opacidad de cada slide según su distancia al slide activo.
const tweenOpacity = (
    emblaApi: EmblaCarouselType,
    eventName?: EmblaEventType
): void => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress(); // posición actual del scroll (0 = inicio, 1 = final)
    const slidesInView = emblaApi.slidesInView(); // índices de slides actualmente visibles
    const isScrollEvent = eventName === "scroll";

    // Itera sobre cada snap point (posición de cada slide)
    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
            // Si es un evento de scroll y el slide no está visible, lo omite
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            // Si el carrusel es circular (loop), ajusta la diferencia para los slides que están en los extremos
            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target();

                    if (slideIndex === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);

                        if (sign === -1) {
                            diffToTarget = scrollSnap - (1 + scrollProgress);
                        }
                        if (sign === 1) {
                            diffToTarget = scrollSnap + (1 - scrollProgress);
                        }
                    }
                });
            }

            // --- NUEVO: Forzar el primer slide a opacidad y escala máxima si está en la posición inicial ---
            let opacity, scale;
            if (snapIndex === 0 && scrollProgress === 0) {
                opacity = 1;
                scale = MAX_SCALE;
            } else {
                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor);
                opacity = numberWithinRange(tweenValue, 0, 1);
                scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * opacity;
            }
            const slideNode = emblaApi.slideNodes()[slideIndex];
            slideNode.style.opacity = opacity.toString();
            slideNode.style.transform = `scale(${scale})`;
        });
    });
};

// Función que inicializa el efecto de opacidad y devuelve una función para limpiar los estilos al destruir el carrusel.
export const setupTweenOpacity = (
    emblaApi: EmblaCarouselType
): (() => void) => {
    const slideNodes = emblaApi.slideNodes();

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    // Registra los listeners para actualizar la opacidad en distintos eventos del carrusel
    emblaApi
        .on("reInit", setTweenFactor)
        .on("reInit", tweenOpacity)
        .on("scroll", tweenOpacity)
        .on("slideFocus", tweenOpacity);

    // Devuelve una función para limpiar los estilos de opacidad cuando se destruye el carrusel
    return (): void => {
        slideNodes.forEach((slide) => {
            slide.removeAttribute("style");
        });
    };
};
