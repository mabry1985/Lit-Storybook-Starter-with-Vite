import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind-element/tailwind.component";

import style from "./static-renderer.component.scss";

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
