/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Select } from '../..';

storiesOf('Components.Select', module).add('Default', () => {
  return (
    <Select value="value"></Select>
  );
});
