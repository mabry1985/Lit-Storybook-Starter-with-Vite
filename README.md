# Lit Storybook Starter with Vite and Tailwind

This is a component library starter kit for [Lit Element](https://lit.dev/docs/) with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) and [TailwindCSS](https://tailwindcss.com/docs/installation).

## Getting Started

### Install dependencies
`pnpm install`

### Start Storybook

`pnpm storybook`

### Start Local Dev Server

`pnpm start` - this will start the dev server on port 3000 and renders `./index.html`

### Build Storybook for Production

`pnpm build-storybook` - this will build the storybook and output it to the `./storybook-static` directory

### Build for Production

`pnpm build` - this will build the static html directory. Copy the static files where you need them.

## How does the Tailwind integration work?

### Note: This Tailwind integration was originally developed by [butopen](https://github.com/butopen/web-components-tailwind-starter-kit)

Tailwind and web components do not play well together. 

We managed to find a way to make them work without hacks or weird tech: just common technologies combined in a elegant way.

No dependencies, based on [lit-element](https://lit.dev/docs/).

Here is a sample code:

```typescript
import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TailwindElement} from '../shared/tailwind.element';

import style from './test.component.scss'; // #1

@customElement('test-component')
export class TestComponent extends TailwindElement(style) { // #2

  @property()
  name?: string = 'World';

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `;
  }
}
```
It is based on the [lit element](https://lit.dev/docs/) technology: if you wrote a lit component before, you'll find it familiar.  

There are only two differences to a standard _LitElement_:
1) You must import your styles from a separate file. And this is good for two reasons:
   - it separate the CSS from the logic
   - you can decide to use CSS or SCSS
2) the class extends a _TailwindElement_ rather than a LitElement

A _TailwindElement_ extends a _LitElement_ (see below) and adds the logic to integrate tailwind and your style.

## Show me the pieces
If you want to understand how it works, it's simple:

- the **package.json** integrates these technologies:
```json
"autoprefixer": "^10.4.12",
"postcss": "^8.4.18",
"lit": "^2.4.0",
"tailwindcss": "^3.2.0",
"typescript": "^4.8.4",
"vite": "^3.1.8",
"sass": "^1.55.0"
```

- **vite** does almost all the work automatically
- to integrate tailwind, the most important file is in _src/shared/tailwind.element.ts_

```typescript
import {LitElement, unsafeCSS} from "lit";

import style from "./tailwind.global.css";

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style) =>
    class extends LitElement {

        static styles = [tailwindElement, unsafeCSS(style)];
    
    };

```

It extends a _LitElement_ class at runtime and adds the component tailwind classes.

The _style_ variable comes from your component, where it is imported from an external CSS (or SCSS) file.

Then it is combined with the default tailwind classes.

If you add more components, the common parts are reused.

## Who uses it?

[butopen](https://github.com/butopen) developed this starter kit to implement a web session player for their open source SaaS [browserbot](https://browserbot.io/).

I've since taken this starter kit and modified it to suit my needs.
