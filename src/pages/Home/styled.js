import styled from 'styled-components';
import * as colors from '../../config/colors';
import { device } from '../../config/breakpoints';
export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background-color: ${colors.backgroundColor};
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  max-width: 700px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.1rem;
    color: rgba(160, 159, 166, 1);
  }
`;

export const DivText = styled.div`
  background: ${colors.secondaryColor};
  padding: 20px;
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: ${colors.borderColor};
  border: 1px solid ${colors.borderColor};
  border-radius: 12px;
  padding: 24px;
`;

export const InputHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 300px;
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;

  color: #fff;
  font-size: 1rem;
  line-height: 1.5;

  &::placeholder {
    color: #fff;
  }
`;

export const AnalyzeButton = styled.button`
  margin-top: 24px;
  padding: 14px 32px;
  background-color: rgba(138, 63, 252, 1);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;
