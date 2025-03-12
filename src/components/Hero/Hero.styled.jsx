import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const HeroSection = styled.section`
  padding-top: 40px;
  padding-bottom: 57px;

  @media (min-width: 1440px) {
    padding-top: 160px;
    padding-bottom: 194px;
    padding-right: 53px;
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
  }
`;

export const TradeCard = styled.div`
  position: relative;
  width: 300px;
  height: 134px;
  margin-bottom: 33px;
  text-align: left;

  @media (min-width: 1440px) {
    margin-left: auto;
    width: 469px;
    height: 209px;
  }
`;

export const TradeBox = styled.div`
  position: ${({ dashed }) => (dashed ? '' : 'absolute')};
  bottom: ${({ dashed }) => (dashed ? '' : '0')};
  right: ${({ dashed }) => (dashed ? '' : '0')};
  border-radius: 4px;
  width: 176px;
  height: 104px;
  padding: 6px 10px;
  border: ${({ dashed }) => (dashed ? '1px dashed  #6a54ff' : 'none')};
  background: ${({ dashed }) => (dashed ? 'none' : ' #6a54ff')};
  color: ${({ dashed }) => (dashed ? '#6a54ff' : '#FFFFFF')};
  opacity: ${({ dashed }) => (dashed ? '0.7' : 'none')};

  @media (min-width: 1440px) {
    width: 276px;
    height: 152px;
    padding: 10px 14px;
    border: ${({ dashed }) => (dashed ? '2px dashed  #6a54ff' : 'none')};
  }
`;
export const TradeTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;
export const TradeText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin-top: 20px;

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-top: 30px;
  }
`;
export const Position = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 123%;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const HeroContent = styled.div`
  @media (min-width: 1440px) {
    width: 575px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 126%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 120%;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 125%;
  color: #e7f7f8;
  opacity: 0.8;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  position: relative;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 15px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  width: 343px;
  height: 50px;
  border-radius: 4px;
  background: #201a4f;
  color: ${globalColor.colorWhite};
  border: none;

  &::placeholder {
    color: ${globalColor.colorWhite};
    opacity: 0.34;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 20px 16px;
    width: 500px;
    height: 60px;
  }
`;

export const Button = styled.button`
  position: absolute;
  border: 1px solid ${globalColor.colorBtn};
  border-radius: 3px;
  padding: 11px 24px;
  width: 102px;
  height: 42px;
  box-shadow: 0 0 4px 0 ${globalColor.colorBtn};
  background: ${globalColor.colorBtn};
  right: 4px;
  top: 50%;
  transform: translate(0, -50%);
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  text-transform: uppercase;
  color: #030718;
  transition: 0.3s;

  &:hover {
    background: #0097a7;
    color: #ffffff;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 16px 24px;
    width: 109px;
    height: 52px;
  }
`;
export const DescText = styled.p`
  font-size: 14px;
  line-height: 143%;
  opacity: 0.3;
`;
