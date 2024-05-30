/**
 * Check functions
 */

/**
 * Checks if the current window is an iframe.
 * 
 * @returns {boolean} True if the current window is an iframe, otherwise false.
 */
export function checkIsIframe(): boolean {
    return window !== window.parent;
}