import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonical }) => {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = title;
        }

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || '');
        } else if (description) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            metaDescription.content = description;
            document.head.appendChild(metaDescription);
        }

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || '');
        } else if (keywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            metaKeywords.content = keywords;
            document.head.appendChild(metaKeywords);
        }

        // Update canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
            linkCanonical.setAttribute('href', canonical || window.location.href);
        } else {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            linkCanonical.href = canonical || window.location.href;
            document.head.appendChild(linkCanonical);
        }

        // OG Tags (Standard for modern SEO)
        const updateOGTag = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (tag) {
                tag.setAttribute('content', content);
            } else {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                tag.setAttribute('content', content);
                document.head.appendChild(tag);
            }
        };

        updateOGTag('og:title', title || 'VSDOX - Document Management');
        updateOGTag('og:description', description || '');
        updateOGTag('og:type', 'website');
        updateOGTag('og:url', window.location.href);

    }, [title, description, keywords, canonical]);

    return null;
};

export default SEO;
