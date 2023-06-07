/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-alert';

describe('auro-alert', () => {
  it('sets auro-alert to default style', async () => {
    const el = await fixture(html`
      <auro-alert></auro-alert>
    `);

    const root = el.shadowRoot;
    const content = root.querySelector('.alert');
    await expect(content.getAttribute('aria-hidden')).to.equal('false');
  });

  it('sets auro-alert to error style', async () => {
    const el = await fixture(html`
      <auro-alert type="error"></auro-alert>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');
    const hiddenContent = root.querySelector('.util_displayHiddenVisually');

    await expect(el.role).to.equal("alert");
    await expect(title.innerHTML).to.equal("");
    await expect(hiddenContent.innerHTML).to.contain("Error.");
  });

  it('sets auro-alert to warning style', async () => {
    const el = await fixture(html`
      <auro-alert type="warning"></auro-alert>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');
    const hiddenContent = root.querySelector('.util_displayHiddenVisually');

    await expect(el.role).to.equal("alert");
    await expect(title.innerHTML).to.equal("");
    await expect(hiddenContent.innerHTML).to.contain("Warning.");
  });

  it('sets auro-alert to success style', async () => {
    const el = await fixture(html`
      <auro-alert type="success"></auro-alert>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');
    const hiddenContent = root.querySelector('.util_displayHiddenVisually');

    await expect(el.role).to.equal("alert");
    await expect(title.innerHTML).to.equal("");
    await expect(hiddenContent.innerHTML).to.contain("Success.");
  });


  it('sets auro-alert to information style', async () => {
    const el = await fixture(html`
      <auro-alert type="information"></auro-alert>
    `);

    const root = el.shadowRoot;
    const svg = root.querySelector('svg');
    const title = svg.querySelector('title');
    const hiddenContent = root.querySelector('.util_displayHiddenVisually');

    await expect(el.role).to.be.undefined;
    await expect(title.innerHTML).to.equal("");
    await expect(hiddenContent.innerHTML).to.contain("Informational notice.");
  });

  it('sets auro-alert to noIcon style', async () => {
    const el = await fixture(html`
      <auro-alert type="information" noIcon></auro-alert>
    `);

    const root = el.shadowRoot;
    const hiddenContent = root.querySelector('.util_displayHiddenVisually');

    await expect(el.role).to.be.undefined;
    await expect(hiddenContent.innerHTML).to.contain("Informational notice.");
  });

  it('auro-alert is accessible', async () => {
    const el = await fixture(html`
      <auro-alert type="information">
        <p>For your child's safety, unaccompanied minors aged 8-17 can only fly on Alaska Airlines flights departing between 5:00 AM and 9:00 PM. <a href="#">Rules for children traveling alone.</a></p>
        <p>We searched for all Seattle Area, WA airports. Be sure to note which airport is being used.</p>
        <p>We searched for all Bay Area, CA airports. Be sure to note which airport is being used.</p>
      </auro-alert>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-alert custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-alert"));

    await expect(el).to.be.true;
  });
});
