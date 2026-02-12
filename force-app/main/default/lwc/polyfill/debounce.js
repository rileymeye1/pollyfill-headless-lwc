/**
 * Creates a debounced version of the provided function that delays
 * invocation until after the specified delay has elapsed since the
 * last call. Useful for rate-limiting events like input, resize, or scroll.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds before the function is invoked.
 * @returns {Function} A debounced version of the provided function.
 * @example
 * import { debounce } from 'c/polyfill';
 *
 * const handleSearch = debounce((event) => {
 *     fetchResults(event.target.value);
 * }, 300);
 */
export function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}
