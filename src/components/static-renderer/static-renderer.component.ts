import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind-element/tailwind.component";

const style = css``;

@customElement("static-renderer")
export class StaticRenderer extends TailwindElement(style) {
  @property()
  name = "World";

  render() {
    return html`
      <div class="p-8 bg-slate-100 rounded-lg inline-block">
        <p>Hello, <b>${this.name}</b>!</p>
      </div>
    `;
  }
}
