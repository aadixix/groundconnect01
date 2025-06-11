export function extractTextFromHTML(html) {
    if (!html) return '';

    const text = html.replace(/<[^>]*>/g, '');

    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;

    return textarea.value.trim();
}

export function generateSlug(text) {
    if (!text) return '';

    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function highlightSearchTerm(text, searchTerm) {
    if (!text || !searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
