import { AuroAlert } from './src/auro-alert.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
const registerComponent = (name = 'custom-alert') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroAlert {});
  }
};

export { registerComponent };
