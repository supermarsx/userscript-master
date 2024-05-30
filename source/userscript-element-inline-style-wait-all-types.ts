/**
 * Element inline style wait all types
 */

/**
 * Type representing an object with a selector and a style.
 * 
 * @typedef {Object} selectorAndStyleObject
 * @property {string} selector - The CSS selector.
 * @property {string} style - The CSS style to apply.
 */
export type selectorAndStyleObject = {
    selector: string,
    style: string
}

/**
 * Type representing an object with a selector, a style, and a method.
 * 
 * @typedef {Object} selectorStyleAndMethodObject
 * @property {string} selector - The CSS selector.
 * @property {string} style - The CSS style to apply.
 * @property {string} method - The method to use.
 */
export type selectorStyleAndMethodObject = {
    selector: string,
    style: string,
    method: string
}
