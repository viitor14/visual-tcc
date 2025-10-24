import { FiCode } from 'react-icons/fi';
import { useState } from 'react';

import history from '../../services/history';

import logo from '/img/logo-white-hd.png';

import {
  HomeContainer,
  Header,
  DivText,
  InputWrapper,
  InputHeader,
  StyledTextarea,
  AnalyzeButton
} from './styled';

export default function Home() {
  const [htmlCode, setHtmlCode] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Enviando o codigo para API:', htmlCode);

    history.push('/result');
  }

  return (
    <HomeContainer>
      <Header>
        <img src={logo} alt="Logo A11y Helper" />
        <p>Cole seu HTML, analise e receba melhorias instantâneas</p>
      </Header>

      <DivText>
        <InputWrapper>
          <InputHeader>
            <FiCode size={20} />
            <span>HTML CODE</span>
          </InputHeader>
          <StyledTextarea
            placeholder="Cole aqui seu código para análise de acessibilidade..."
            onChange={(e) => setHtmlCode(e.target.value)}
          />
        </InputWrapper>
      </DivText>

      <AnalyzeButton onClick={handleSubmit}>Analisar agora</AnalyzeButton>
    </HomeContainer>
  );
}
