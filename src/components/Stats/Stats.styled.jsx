import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const StatsSection = styled.section`
  position: relative;
  align-items: center;
  background: ${globalColor.colorWhite};
  padding-top: 24px;
  padding-bottom: 48px;

  @media (min-width: 1440px) {
    padding-top: 56px;
    padding-bottom: 61px;
  }
`;

export const Trap = styled.div`
  position: absolute;
  right: 40%;
  top: -23px;
  width: 1000px;
  border-bottom: 24px solid ${globalColor.colorWhite};
  border-left: 0 solid transparent;
  border-right: 24px solid transparent;

  @media (min-width: 1440px) {
    width: 600px;
    left: 0;
    top: -60px;
    border-bottom: 60px solid ${globalColor.colorWhite};
    border-left: 0 solid transparent;
    border-right: 60px solid transparent;
  }
`;
export const StatsContainer = styled.div`
  max-width: 375px;
  padding: 0 16px;
  text-align: left;
  margin: auto;

  @media (min-width: 1440px) {
    display: flex;
    max-width: 1440px;
    padding: 0 80px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 129%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 2px;

  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 127%;
    margin-right: 156px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.04em;
  color: #000;
  opacity: 0.5;
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px 65px;

  @media (min-width: 1440px) {
    display: flex;
    gap: 100px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #000;
  opacity: 0.8;
  margin-bottom: 4px;
`;

export const StatValue = styled.p`
  font-weight: 500;
  font-size: 35px;
  line-height: 110%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${globalColor.colorPurple};

  @media (min-width: 1440px) {
    font-size: 60px;
  }
`;
