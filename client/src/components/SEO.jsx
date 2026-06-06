import { useEffect } from 'react';

export default function SEO({
    title = 'Mac & Ro Capital FZC | Open Your Digital Gold Account in UAE',
    description = 'Open a secure digital gold account in the UAE with Mac & Ro Capital FZC and gain the freedom to buy, sell, and transfer gold seamlessly. Invest, store, and manage your holdings with unmatched transparency, global trust, and the assurance of real physical value.',
    keywords = 'digital gold account UAE, digital gold account, gold account UAE, buy gold online UAE',
    url = 'https://mac-ro-capital.com/',
    image = '/og-default.jpg',
    noIndex = false,
}) {
    useEffect(() => {
        if (title) document.title = title;

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

        // Open Graph
        ensureMeta('meta', 'property', { key: 'og:type', content: 'website' });
        ensureMeta('meta', 'property', { key: 'og:title', content: title });
        ensureMeta('meta', 'property', { key: 'og:description', content: description });
        ensureMeta('meta', 'property', { key: 'og:url', content: url });
        ensureMeta('meta', 'property', { key: 'og:image', content: image });

        // Twitter
        // ensureMeta('meta', 'name', { key: 'twitter:card', content: 'summary_large_image' });
        // ensureMeta('meta', 'name', { key: 'twitter:title', content: title });
        // ensureMeta('meta', 'name', { key: 'twitter:description', content: description });
        // ensureMeta('meta', 'name', { key: 'twitter:image', content: image });
    }, [title, description, url, image, noIndex]);

    return null;
}


