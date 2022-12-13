import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './static-renderer.component';

export default {
  title: 'ChatGPT Experiments/Static Renderer',
  component: 'static-renderer',
  argTypes: {
    stringProp: {
      control: {
        type: 'text',
      },
      name: 'string-prop',
      description: 'Document property here',
    },
  },
  args: {
    stringProp: 'default value',
  },
};

const Template = ({
  stringProp,
}): TemplateResult =>
  html`
    <static-renderer
      stringProp='${ifDefined(stringProp)}'
    >
    </static-renderer>
  `;

export const StaticRendererVariation = Template.bind({});
StaticRendererVariation.args = {
  stringProp: 'overwrite template property',
};
