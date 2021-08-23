import '../style/style.css';
import React from 'react';
import styled , {css} from 'styled-components'
import { Faq, EmailForm } from '../components';

const StyledH1 = styled.h1`
  background: red;
`

export default function App() {
  return <>
    <StyledH1 css="background: black">자주 묻는 질문</StyledH1>
    <Faq />
    <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
    <EmailForm />
  </>
}
