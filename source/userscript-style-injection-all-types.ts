/**
 * Style injection all types
 */

/**
 * Type representing an object with a URL and a location for CSS styles.
 * 
 * @typedef {Object} styleUrlAndLocationObject
 * @property {string} url - The URL of the CSS file.
 * @property {string} location - The location where the CSS should be injected (e.g., 'head', 'body').
 */
export type styleUrlAndLocationObject = {
    url: string,
    location: string
}

/**
 * Type representing an object with CSS text and a location for CSS styles.
 * 
 * @typedef {Object} styleCssAndLocationObject
 * @property {string} css - The CSS text to inject.
 * @property {string} location - The location where the CSS should be injected (e.g., 'head', 'body').
 */
export type styleCssAndLocationObject = {
    css: string,
    location: string
}
