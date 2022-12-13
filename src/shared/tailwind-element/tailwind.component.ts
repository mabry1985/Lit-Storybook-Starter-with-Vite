import { CSSResult, LitElement, unsafeCSS } from "lit";
import style from "./tailwind.global.css";

const tailwindElement = unsafeCSS(style);

/**
 * A mixin for the LitElement class that applies Tailwind CSS to the component
 * @param style CSSResult - You can pass in an empty CSS template string if you don't
 * want to apply any custom stylesheets
 * @returns LitElement Component with Tailwind CSS applied
 */
export const TailwindElement = (style: CSSResult) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
