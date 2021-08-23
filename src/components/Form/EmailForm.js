import React, { useState } from 'react';
import { Form } from './Form';

export function EmailForm() {
  const [email, setEmail] = useState('');

  return(
    <Form
      onClick={
        (e) => {
          e.preventDefault();
          setEmail('');
        }
      }
    >
      <input 
        type="text" 
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder="이메일 주소" />
      <button>30일 무료 이용</button>
    </Form>
  )
}