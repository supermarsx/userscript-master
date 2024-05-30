/**
 * Event functions
 */

/**
 * Wait for the DOM content to be loaded before executing the callback.
 * 
 * @param {Function} callback - The callback function to execute once the DOM content is loaded.
 * @returns {void}
 */
export function eventWaitDomLoaded(callback: () => void): void {
    document.addEventListener('DOMContentLoaded', callback);
}
