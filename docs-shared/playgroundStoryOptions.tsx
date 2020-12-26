import { withInfo } from '@storybook/addon-info';

const options = {
  decorators: [withInfo],
  parameters: {
    info: {
      inline: true,
      header: false,
      propTables: null,
    },
  },
};

export default options;
