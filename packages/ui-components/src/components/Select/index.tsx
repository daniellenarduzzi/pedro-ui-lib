import React from 'react';
import {
  StyledSelect,
} from './styled';

export interface SelectProps {
  value: string
}

class Select extends React.PureComponent<SelectProps> {
  render() {
    return (
      <StyledSelect value={this.props.value}>
        <option value="option">Option</option>
      </StyledSelect>
    )
  }
}

export { Select }