
import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    button {
      height: 36px;
      border-radius: 18px;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      background: white;
      border: 1px solid red;
      color: red;
      outline:none;
    }

    button.dark {
      background: #ccc;
      color: white;
      background: white;
    }

    button:hover {
      cursor: pointer;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({
    type: Boolean
  })
  isDark = false;

  render() {
    return html`
      <button @click=${this._onClick}>
        Switch to ${this.isDark ? 'blue' : 'red'}
      </button>
    `;
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
