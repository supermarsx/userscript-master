/**
 * Element selection functions
 */

/**
 * Selects the first DOM element that matches the given CSS selector.
 * @param {string} selector - A CSS selector string to match the desired element.
 * @returns {Element | null} The first Element within the document that matches the specified selector, or null if no matches are found.
 */
export function elementSelect(selector: string): Element | null {
    const selected = document.querySelector(selector);
    return selected;
}