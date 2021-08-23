import React, { memo, useContext } from 'react';
import { StyledAccordionItem } from './AccordionItem.styled';
import { FaqContext } from '../../context'

export const AccordionItem = memo(({ id, title, content, isVisible }) => {
  const { onUpdate } = useContext(FaqContext);

  return (
    <StyledAccordionItem>
      <h2>
        <button onClick={() => onUpdate(id)}>
          <span>{title}</span>
          <span>+</span>
        </button>
      </h2>
      {isVisible ? <p>{content}</p> : ''}
    </StyledAccordionItem>
  )
});
