import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa6';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  width: 100%;

  img {
    max-width: 120px;
    max-height: 80px;
  }
`;

export const ResultProblems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2 {
    margin-top: 40px;
  }
`;

export const DivCardsAlerts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BackPage = styled.div`
  position: absolute;
  left: 4%;
  top: 4%;
  display: flex;
  align-items: center;
  background: rgba(217, 217, 217, 1);
  color: rgba(160, 159, 166, 1);
  border: 1px solid rgba(51, 50, 56, 1);
  border-radius: 12px;
  width: fit-content;
  padding: 8px 16px;
  gap: 6px;
  cursor: pointer;

  span {
    font-size: 14px;
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  color: rgba(160, 159, 166, 1);
  font-size: 14px;
`;
