/**
 * Script injection all types
 */

/**
 * Type representing an object with a script URL and a location.
 * 
 * @typedef {Object} urlAndLocationObject
 * @property {string} url - Script URL.
 * @property {string} location - The location to inject.
 */
export type urlAndLocationObject = {
    url: string,
    location: string
};

/**
 * Type representing an object with a script and a location.
 * 
 * @typedef {Object} scriptAndLocationObject
 * @property {string} script - The script content.
 * @property {string} location - The location to inject.
 */
export type scriptAndLocationObject = {
    script: string,
    location: string
};
