/**
 * Script injection functions
 */

/**
 * Injects a script from a URL into the specified location in the DOM.
 * 
 * @param {string} url - The URL of the script to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function scriptInjectFromUrl(url: string, location: string = 'head'): void | Error {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = url;

    switch (location) {
        case 'head':
            document.head.appendChild(scriptElement);
            break;
        case 'body':
            document.body.appendChild(scriptElement);
            break;
        default:
            const errorMessage = `Failed to inject script from url: ${url} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}

/**
 * Injects a script from text into the specified location in the DOM.
 * 
 * @param {string} script - The script content to inject.
 * @param {string} [location='head'] - The location to inject the script ('head' or 'body').
 * @returns {void | Error} Returns void if successful, otherwise returns an error.
 */
export function scriptInjectFromText(script: string, location: string = 'head'): void | Error {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.innerHTML = script;

    switch (location) {
        case 'head':
            document.head.appendChild(scriptElement);
            break;
        case 'body':
            document.body.appendChild(scriptElement);
            break;
        default:
            const errorMessage = `Failed to inject script from text: ${script} due to invalid injection location: ${location}`;
            console.error(errorMessage);
            return new Error(errorMessage);
    }
}
