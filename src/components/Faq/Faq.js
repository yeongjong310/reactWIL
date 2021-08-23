import React, { useState, useEffect, useCallback } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { FaqContext } from '@/context';

export const Faq = () => {
  const [faq, setFaq] = useState([]); // fag = { id, title, content }

  const fetchFaq = async () => {
    const res = await fetch('/api/faq');
    const faq = await res.json();
  
    setFaq(faq.map(item => ({
      ...item, isVisible: false
    })));
  }

  const handleUpdateFaqVisibleState = id => {
    const newFaq = faq.map(
      item => item.id === id ? ({...item, isVisible: !item.isVisible}) : item
    )
    setFaq(newFaq)
  }

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <FaqContext.Provider value={{
      onUpdate: handleUpdateFaqVisibleState,
    }}>
      <Accordion accordianItems={faq} />
    </FaqContext.Provider>
  )
}