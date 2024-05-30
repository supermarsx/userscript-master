/**
 * Style injection functions
 */

/**
 * Injects a CSS stylesheet from a URL into the specified location in the DOM.
 * 
 * @param {string} url - The URL of the CSS file.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function styleInjectFromUrl(url: string, location: string = 'head'): void | Error {
    const styleElement = document.createElement('link');
    styleElement.rel = 'stylesheet';
    styleElement.type = 'text/css';
    styleElement.href = url;

    switch (location) {
        case 'head':
            document.head.appendChild(styleElement);
            break;
        case 'body':
            document.body.appendChild(styleElement);
            break;
        default:
            const errorMessage = `Failed to inject style from url: ${url} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}

/**
 * Injects CSS styles from text into the specified location in the DOM.
 * 
 * @param {string} styleCss - The CSS text to inject.
 * @param {string} [location='head'] - The location to inject the CSS ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function styleInjectFromText(styleCss: string, location: string = 'head'): void | Error {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = styleCss;

    switch (location) {
        case 'head':
            document.head.appendChild(styleElement);
            break;
        case 'body':
            document.body.appendChild(styleElement);
            break;
        default:
            const errorMessage = `Failed to inject style due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}

/**
 * Hides elements specified by a CSS selector.
 * 
 * @param {string} selector - The CSS selector of the elements to hide.
 * @returns {void}
 */
export function styleInjectElementHide(selector: string): void {
    const styleCss = `
        ${selector} {
            display: none !important;
        }
    `;
    styleInjectFromText(styleCss);
}

/**
 * Makes elements specified by a CSS selector transparent.
 * 
 * @param {string} selector - The CSS selector of the elements to make transparent.
 * @returns {void}
 */
export function styleInjectElementTransparent(selector: string): void {
    const styleCss = `
        ${selector} {
            opacity: 0 !important;
        }
    `;
    styleInjectFromText(styleCss);
}

/**
 * Makes elements specified by a CSS selector invisible.
 * 
 * @param {string} selector - The CSS selector of the elements to make invisible.
 * @returns {void}
 */
export function styleInjectElementInvisible(selector: string): void {
    const styleCss = `
        ${selector} {
            visibility: hidden !important;
        }
    `;
    styleInjectFromText(styleCss);
}
