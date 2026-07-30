import { useState, useRef, useEffect, useCallback } from 'react';

const YT_ORIGIN = 'https://www.youtube-nocookie.com';

/**
 * Deferred YouTube embed. The iframe is never present on page load — a plain <iframe>
 * pulls roughly 0.5-1MB of player JS on every visit whether or not anyone watches.
 *
 * Two ways it can activate:
 *   - click       → plays UNMUTED, because the click is a user gesture
 *   - autoplayOnVisible → plays MUTED once the player scrolls into view
 *
 * Browsers block unmuted autoplay outright (Chrome gates it behind a Media Engagement
 * score; Safari and Firefox are stricter), so scroll activation has to be muted. The
 * Unmute button below drives YouTube's postMessage command API, which works off
 * `enablejsapi=1` alone and needs no extra script.
 *
 * Uses youtube-nocookie.com, deferring YouTube's tracking cookies until playback starts.
 * Requires `frame-src https://www.youtube-nocookie.com` in the CSP (see vercel.json).
 */
export default function YouTubeEmbed({
    videoId,
    poster,
    title,
    className = '',
    autoplayOnVisible = false,
}) {
    // null = facade showing. 'click' = user pressed play. 'scroll' = came into view.
    const [mode, setMode] = useState(null);
    const [muted, setMuted] = useState(false);
    const containerRef = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        if (!autoplayOnVisible || mode) return;
        const el = containerRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;

        // Anyone who has asked for reduced motion gets the click-to-play facade instead.
        // Video that starts on its own is precisely what this setting exists to prevent.
        const prefersReducedMotion =
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setMode('scroll');
                        setMuted(true);
                        observer.disconnect();
                    }
                });
            },
            // Half-visible, so it starts when the section is genuinely being looked at
            // rather than clipping the bottom of the viewport.
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [autoplayOnVisible, mode]);

    const handleUnmute = useCallback(() => {
        const win = iframeRef.current?.contentWindow;
        if (!win) return;
        const send = (func, args = []) =>
            win.postMessage(JSON.stringify({ event: 'command', func, args }), YT_ORIGIN);
        send('unMute');
        send('setVolume', [100]);
        setMuted(false);
    }, []);

    const params = new URLSearchParams({
        autoplay: '1',
        rel: '0',
        playsinline: '1',
        ...(mode === 'scroll' ? { mute: '1', enablejsapi: '1' } : {}),
    });

    return (
        <div
            ref={containerRef}
            className={`relative w-full aspect-video overflow-hidden ${className}`}
        >
            {mode ? (
                <>
                    <iframe
                        ref={iframeRef}
                        src={`${YT_ORIGIN}/embed/${videoId}?${params.toString()}`}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                    {muted && (
                        <button
                            type="button"
                            onClick={handleUnmute}
                            className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-[#DCBC7C]"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.47 4.47 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z" />
                            </svg>
                            Unmute
                        </button>
                    )}
                </>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        setMode('click');
                        setMuted(false);
                    }}
                    aria-label={`Play video: ${title}`}
                    className="group absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#DCBC7C]"
                >
                    <img
                        src={poster}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Scrim keeps the play button legible over a bright frame. */}
                    <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/70 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/85">
                            <svg
                                className="w-7 h-7 md:w-9 md:h-9 translate-x-[2px] text-white"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                    </span>
                </button>
            )}
        </div>
    );
}
