import { useEffect, useRef } from 'react';

/**
 * Defers a decorative background video until it scrolls into view, and pauses it again
 * once it leaves.
 *
 * Pair it with `preload="none"` and no `autoPlay` attribute on the <video>. That
 * combination means the browser fetches nothing until play() is called here — which is
 * the point, since the homepage was pulling ~43MB of below-the-fold video on load.
 * (`autoPlay` overrides `preload="none"`, so the attribute has to go.)
 *
 * Intended for muted, looping, decorative video only. Don't use it on a video with
 * `controls` — yanking playback away from someone who pressed play is hostile.
 */
export default function useLazyVideo({ rootMargin = '200px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Without IntersectionObserver, fall back to loading normally so the video
        // still shows rather than sitting blank forever.
        if (typeof IntersectionObserver === 'undefined') {
            el.preload = 'auto';
            el.play().catch(() => {});
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Rejects when the browser blocks autoplay; nothing to do but
                        // leave the poster frame up.
                        el.play().catch(() => {});
                    } else if (!el.paused) {
                        el.pause();
                    }
                });
            },
            { rootMargin, threshold: 0.1 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return ref;
}
