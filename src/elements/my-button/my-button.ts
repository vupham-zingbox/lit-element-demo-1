
import { LitElement, html, customElement, property, css, internalProperty } from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    button {
      padding: 5px;
      border-radius: 5px;
      background: green;
      color: white;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  text = '';

  @internalProperty()
  private _innerText = '';

  render() {
    return html`
      <button @click=${this._onClick}>
        ${this.text}
      </button>
      <span>
        ${this._innerText}
      </span>
    `;
  }

  attributeChangedCallback(changed: any) {

    console.log('r', changed);

  }

  update(changedProperties: any) {

    console.log('update', changedProperties);

  }

  updated(changedProperties: any) {

    console.log('updated', changedProperties);

  }

  private _onClick() {
    let myEvent = new CustomEvent('that-click', {
      detail: { message: 'my-event happened.' },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(myEvent);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
