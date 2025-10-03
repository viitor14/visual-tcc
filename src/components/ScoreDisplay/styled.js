import styled from 'styled-components';
import * as colors from '../../config/colors';
import { device } from '../../config/breakpoints';

const CorTypeProblem = (type) => {
  switch (type) {
    case 'critical':
      return 'rgba(255, 117, 117, 1)';
    case 'warning':
      return 'rgba(255, 169, 87, 1)';
    case 'good':
      return 'rgba(4, 153, 71, 1)';
    default:
      return '#7f8c8d'; // Cinza padrão
  }
};

export const CardScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: ${colors.secondaryColor};
  border: 1px solid;
  border-color: ${colors.borderColor};
  border-radius: 20px;
  padding: 24px;
`;

export const ProgressBar = styled.progress`
  appearance: none;
  width: 100%;
  height: 10px;
  border: none;
  border-radius: 5px;

  /* Estilos para Chrome, Safari, Edge */
  &::-webkit-progress-bar {
    background-color: rgba(51, 50, 56, 1);
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background: linear-gradient(to right, rgba(159, 96, 255, 1), rgba(138, 63, 252, 1));
    border-radius: 5px;
  }

  /* Estilos para Firefox */
  background-color: rgba(51, 50, 56, 1);

  &::-moz-progress-bar {
    background: linear-gradient(to right, rgba(159, 96, 255, 1), rgba(138, 63, 252, 1));
    border-radius: 5px;
  }
`;

export const BoxResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px;

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const BoxResultInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => CorTypeProblem(props.type)};
  background-color: rgba(42, 40, 48, 1);
  padding: 20px;
  gap: 8px;
  border-radius: 12px;

  @media (max-width: ${device.tablet}) {
    flex: initial;
    width: 100%;
  }
`;

export const NumScore = styled.span`
  font-size: 72px;
  color: rgba(138, 63, 252, 1);
`;

export const MaxNumScore = styled.span`
  font-size: 20px;
  color: rgba(160, 159, 166, 1);
`;
