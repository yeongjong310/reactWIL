import React from 'react';
import { StyledAccordion } from './Accordion.styled';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({accordianItems}) => {
  return (
    <StyledAccordion>
      {
        accordianItems && 
        accordianItems.length > 0 &&
        accordianItems.map(({id, title, content, isVisible}) => (
          <AccordionItem 
            key={id}
            id={id}
            title={title} 
            content={content} 
            isVisible={isVisible} />
        ))
      }
    </StyledAccordion>
  )
}
