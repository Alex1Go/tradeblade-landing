import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const AboutSection = styled.section`
  position: relative;
  padding: 24px 0 133px 0;
  background-color: ${globalColor.colorWhite};

  @media (min-width: 1440px) {
    padding: 56px 0 92px 0;
  }
`;

export const AboutContainer = styled.div`
  max-width: 375px;
  padding: 0 16px;
  margin: auto;

  @media (min-width: 1440px) {
    display: flex;
    max-width: 1440px;
    padding: 0 80px;
  }
`;

export const Trap = styled.div`
  position: absolute;
  right: 40%;
  top: -23px;
  width: 1000px;
  border-bottom: 25px solid ${globalColor.colorWhite};
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;

  @media (min-width: 1440px) {
    width: 600px;
    left: 0;
    top: -59px;
    border-bottom: 60px solid ${globalColor.colorWhite};
    border-left: 0 solid transparent;
    border-right: 60px solid transparent;
  }
`;

export const TextBox = styled.div`
  max-width: 415px;

  @media (min-width: 1440px) {
    margin-right: 237px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 129%;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${globalColor.colorBody};

  @media (min-width: 1440px) {
    font-size: 44px;
    line-height: 127%;
    margin-bottom: 20px;
  }
`;
export const TextAbout = styled.p`
  line-height: 125%;
  color: ${globalColor.colorBody};
  opacity: 0.8;
  margin-top: 20px;
  @media (min-width: 1440px) {
    width: 413px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  position: absolute;
  border-radius: 4px;
  width: 356px;
  height: 218px;
  background-color: ${globalColor.colorPurple};
  padding: 16px;

  @media (min-width: 1440px) {
    width: 630px;
    height: 236px;
    padding: 32px 64px 40px 64px;
    right: 80px;
    margin-top: 0;
  }
`;

export const TitleForm = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.04em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 129%;
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  padding: 15px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #201a4f;
  color: ${globalColor.colorWhite};
  border: none;
  margin-bottom: 8px;

  &::placeholder {
    color: ${globalColor.colorWhite};
    opacity: 0.34;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 20px 16px;
    width: 100%;
    height: 60px;
  }
`;

export const Button = styled.button`
  border: 1px solid ${globalColor.colorBtn};
  border-radius: 3px;
  padding: 16px;
  width: 100%;
  height: 52px;
  box-shadow: 0 0 4px 0 ${globalColor.colorBtn};
  background: ${globalColor.colorBtn};
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-transform: uppercase;
  color: ${globalColor.colorBody};
  transition: 0.3s;

  &:hover {
    background: #0097a7;
    color: #ffffff;
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 68px;
    top: 50%;
    transform: translate(0, 43%);
    font-size: 16px;
    padding: 16px 24px;
    width: 165px;
    height: 52px;
  }
`;
