import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CodeBoxWrapper = styled.div`
  background-color: ${colors.primaryDarkColor};
  border: 1px solid ${colors.borderColor};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CodeTag = styled.code`
  color: #dcdcdc;
  white-space: pre-wrap; /* Garante que o código não saia da caixa */
`;

export const CopyButton = styled.button`
  background-color: transparent;
  border: none;
  color: #a0a0a0;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: #2f2f36;
    color: #ffffff;
  }

  &:active {
    transform: scale(0.95);
  }
`;
