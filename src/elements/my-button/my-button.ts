
import { LitElement, html, customElement, property, css } from 'lit-element';

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


  render() {
    return html`
      <button @click=${this._onClick}>
        ${this.text}
      </button>
      <span>

      </span>
    `;
  }

  updated(changedProperties: any) {

    console.log(changedProperties);
    
  }

  private _onClick() {
    let myEvent = new CustomEvent('my-button-event', {
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
