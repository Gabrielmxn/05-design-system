import { background, themes } from '@storybook/theming';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
