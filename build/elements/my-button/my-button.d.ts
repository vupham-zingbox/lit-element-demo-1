import { LitElement } from 'lit-element';
export declare class MyButton extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    isDark: boolean;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
//# sourceMappingURL=my-button.d.ts.map