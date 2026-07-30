import { useEffect } from 'react';

const SITE_ORIGIN = 'https://mac-ro-capital.com';

export default function SEO({
    title = 'Open Your Digital Gold Account in UAE | Mac & Ro Capital FZC',
    description = 'Open a secure digital gold account in the UAE with Mac & Ro Capital FZC and gain the freedom to buy, sell, and transfer gold seamlessly. Invest, store, and manage your holdings with unmatched transparency, global trust, and the assurance of real physical value.',
    keywords = 'digital gold account UAE, digital gold account, gold account UAE, buy gold online UAE',
    // No default: when a page doesn't pass one, the URL is derived from the current
    // path. It used to default to the homepage, so every subpage advertised
    // og:url="https://mac-ro-capital.com/" — including the 20 prerendered routes.
    url,
    image = '/og-default.jpg',
    noIndex = false,
}) {
    useEffect(() => {
        if (title) document.title = title;

        const path = window.location.pathname;
        const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
        const pageUrl = url || `${SITE_ORIGIN}${normalizedPath}`;

        const ensureMeta = (attr, key, value) => {
            let el = document.querySelector(`${attr}[${key}="${value.key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(key, value.key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', value.content);
        };

        // Basic
        ensureMeta('meta', 'name', { key: 'description', content: description });
        ensureMeta('meta', 'name', { key: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' });
        ensureMeta('meta', 'name', { key: 'keywords', content: keywords });

        // Canonical. Lighthouse reported rel=canonical as "not applicable" because no
        // canonical link existed at all.
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', pageUrl);

        // Open Graph
        ensureMeta('meta', 'property', { key: 'og:type', content: 'website' });
        ensureMeta('meta', 'property', { key: 'og:title', content: title });
        ensureMeta('meta', 'property', { key: 'og:description', content: description });
        ensureMeta('meta', 'property', { key: 'og:url', content: pageUrl });
        ensureMeta('meta', 'property', { key: 'og:image', content: image });

        // Twitter
        // ensureMeta('meta', 'name', { key: 'twitter:card', content: 'summary_large_image' });
        // ensureMeta('meta', 'name', { key: 'twitter:title', content: title });
        // ensureMeta('meta', 'name', { key: 'twitter:description', content: description });
        // ensureMeta('meta', 'name', { key: 'twitter:image', content: image });
    }, [title, description, keywords, url, image, noIndex]);

    return null;
}
