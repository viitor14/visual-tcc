import styled from 'styled-components';
import * as colors from '../../config/colors';

const levelColors = {
  critical: {
    main: 'rgba(255, 117, 117, 1)',
    background: 'rgba(255, 117, 117, 0.1)',
    border: 'rgba(255, 117, 117, 0.4)'
  },
  serious: {
    main: 'rgba(255, 169, 87, 1)',
    background: 'rgba(255, 169, 87, 0.15)',
    border: 'rgba(255, 169, 87, 0.4)'
  },
  moderate: {
    main: 'rgba(4, 153, 71, 1)',
    background: 'rgba(4, 153, 71, 0.1)',
    border: 'rgba(4, 153, 71, 0.4)'
  }
};

export const CardContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 18px 24px;
  background: ${colors.secondaryColor};
  border: 1px solid;
  border-color: ${colors.borderColor};
  border-radius: 20px;
  gap: 16px;
`;

export const CardAlertTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span:first-child {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 50%;
    border: 1px solid ${(props) => levelColors[props.level]?.border};
    background: ${(props) => levelColors[props.level]?.background};
    svg {
      color: ${(props) => levelColors[props.level]?.main};
    }
  }

  p {
    font-weight: semi-bold;
    font-size: 18px;
  }

  span:last-child {
    background: ${(props) => levelColors[props.level]?.background};
    color: ${(props) => levelColors[props.level]?.main};
    padding: 4px 12px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const CardResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 60px;
  gap: 16px;

  p {
    color: rgba(160, 159, 166, 1);
    font-size: 14px;
  }
`;

export const CardProblematicCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-weight: bold;
  }
`;
