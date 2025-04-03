
import { AuroAlert } from '../../src/auro-alert.js';

/**
 * */
class AuroAlertWCA extends AuroAlert {}

if (!customElements.get("auro-alert")) {
  customElements.define("auro-alert", AuroAlertWCA);
}
