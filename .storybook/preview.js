/* https://storybook.js.org/docs/configurations/options-parameter/#sorting-stories */
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import StoryWrapper from '../docs-shared/storyWrapper';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});
// addParameters({
//   options: {
//     storySort: (a, b) => {
//       const folderA = a[1].kind;
//       const folderB = b[1].kind;

//       // Make Introduction story the first page
//       if (folderA.includes('Getting Started/Introduction')) {
//         return -1;
//       }
//       if (folderB.includes('Getting Started/Introduction')) {
//         return 1;
//       }
//       // Make 'Foundations' follow 'Getting Started'
//       if (folderA.includes('Foundations')) {
//         return folderB.includes('Getting Started') ? 1 : -1;
//       }
//       if (folderB.includes('Foundations')) {
//         return folderA.includes('Getting Started') ? -1 : 1;
//       }

//       return folderA === folderB
//         ? 0
//         : folderA.localeCompare(folderB, { numeric: true });
//     },
//     showRoots: true,
//   },
// });

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);
