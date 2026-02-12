/**
 * @module c/polyfill
 * @description Headless LWC utility module that serves as a polyfill barrel file,
 * aggregating and re-exporting helper functions not natively available on the platform.
 * Import utilities from this module rather than from internal files directly.
 *
 * @example
 * import { debounce } from 'c/polyfill';
 */
export { debounce } from "./debounce";
export { showToast } from "./showToast";
