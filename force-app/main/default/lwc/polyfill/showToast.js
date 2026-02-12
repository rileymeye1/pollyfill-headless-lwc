import { ShowToastEvent } from "lightning/platformShowToastEvent";

/**
 * Dispatches a toast notification from the provided component.
 *
 * @param {LightningElement} component - The component instance to dispatch the toast from.
 * @param {string} title - The toast title.
 * @param {string} message - The toast message body.
 * @param {"success"|"error"|"warning"|"info"} variant - The toast variant.
 * @param {"dismissible"|"pester"|"sticky"} [mode=sticky] - The toast display mode which defaults to sticky.
 * @param {Array} [messageData=[]] - Data for message string replacements.
 * @example
 * import { showToast } from 'c/polyfill';
 *
 * showToast(this, 'Success', 'Record saved.', 'success');
 */
export const showToast = (component, title, message, variant, mode = "sticky", messageData = []) => {
  component.dispatchEvent(
    new ShowToastEvent({
      title,
      message,
      variant,
      mode,
      messageData
    })
  );
};
