import React, { memo } from 'react';
import { StyledForm } from './Form.styled';

export function Form({children, ...restProps}) {
  return (
    <StyledForm
      {...restProps}
    >
      {children}
    </StyledForm>
  )
};