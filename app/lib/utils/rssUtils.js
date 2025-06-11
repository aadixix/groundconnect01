// Enhanced RSS content parser to handle both JSON and XML responses
export function parseRSSContent(rssData) {
    try {
        // Handle JSON API response format
        if (rssData && typeof rssData === 'object' && rssData.rs === 1 && rssData.res) {
            return Array.isArray(rssData.res) ? rssData.res : [];
        }

        // Handle XML string response
        if (typeof rssData === 'string') {
            // Check if it's XML
            if (rssData.trim().startsWith('<')) {
                return parseRSSXML(rssData);
            } else {
                // Try to parse as JSON string
                try {
                    const parsed = JSON.parse(rssData);
                    if (parsed && parsed.rs === 1 && parsed.res) {
                        return Array.isArray(parsed.res) ? parsed.res : [];
                    }
                } catch (jsonError) {
                    console.error('Failed to parse RSS data as JSON:', jsonError);
                }
            }
        }

        // Handle direct array
        if (rssData && Array.isArray(rssData)) {
            return rssData;
        }

        console.warn('Unknown RSS data format:', typeof rssData);
        return [];
    } catch (error) {
        console.error('Error parsing RSS content:', error);
        return [];
    }
}

// Enhanced XML parser with better error handling
export function parseRSSXML(xmlString) {
    try {
        if (!xmlString || typeof xmlString !== 'string') {
            console.error('Invalid XML string provided');
            return [];
        }

        // Check if DOMParser is available (browser environment)
        if (typeof DOMParser === 'undefined') {
            console.error('DOMParser not available - this function requires a browser environment');
            return [];
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

        // Check for parsing errors
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
            console.error('XML parsing error:', parserError.textContent);
            return [];
        }

        const items = xmlDoc.querySelectorAll('item');
        const feedItems = [];

        items.forEach((item, index) => {
            try {
                const title = item.querySelector('title')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                const link = item.querySelector('link')?.textContent || '';
                const pubDate = item.querySelector('pubDate')?.textContent || '';
                const guid = item.querySelector('guid')?.textContent || '';
                const author = item.querySelector('author')?.textContent ||
                    item.querySelector('dc\\:creator')?.textContent || '';
                const category = item.querySelector('category')?.textContent || '';

                feedItems.push({
                    title: cleanHTMLTags(title),
                    description: cleanHTMLTags(description),
                    link: link.trim(),
                    pubDate: pubDate.trim(),
                    guid: guid.trim() || `item-${index}`,
                    author: cleanHTMLTags(author),
                    category: cleanHTMLTags(category)
                });
            } catch (itemError) {
                console.warn(`Error parsing RSS item ${index}:`, itemError);
            }
        });

        return feedItems;
    } catch (error) {
        console.error('Error parsing RSS XML:', error);
        return [];
    }
}

// Enhanced HTML tag cleaner
export function cleanHTMLTags(text) {
    if (!text || typeof text !== 'string') return '';

    return text
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&amp;/g, '&')  // Decode HTML entities
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .trim();
}

// Enhanced text truncation with word boundary respect
export function truncateText(text, maxLength = 150) {
    if (!text || typeof text !== 'string') return '';

    if (text.length <= maxLength) return text;

    // Find the last space before maxLength to avoid cutting words
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > maxLength * 0.8) { // Only use word boundary if it's not too far back
        return truncated.substring(0, lastSpace).trim() + '...';
    }

    return truncated.trim() + '...';
}

// Additional utility to format date
export function formatRSSDate(dateString) {
    if (!dateString) return '';

    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('hi-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        console.warn('Error formatting date:', error);
        return dateString;
    }
}
