import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const FooterSection = styled.section`
  padding-top: 180px;
  padding-bottom: 25px;

  @media (min-width: 1440px) {
    padding-top: 44px;
    padding-bottom: 40px;
    position: relative;
  }
`;

export const NavBox = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0px 70px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const NavTitle = styled.p`
  font-size: 14px;
  line-height: 143%;
  text-transform: uppercase;
  opacity: 0.4;

  @media (min-width: 1440px) {
    margin-bottom: 224px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 57px;
  list-style: none;

  @media (min-width: 1440px) {
    gap: 24px;
    flex-direction: row;
    margin: 0;
  }
`;

export const FootItem = styled.li``;
export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-transform: uppercase;
`;

export const Line = styled.div`
  width: 375px;
  height: 1px;
  background: ${globalColor.colorWhite};
  opacity: 0.3;
  @media (min-width: 1440px) {
    rotate: 90deg;
    width: 348px;
    position: absolute;
    left: 740px;
    top: 50%;
  }
`;

export const Svg = styled.svg`
  width: 165px;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 80px;

  @media (min-width: 1440px) {
    position: absolute;
    right: 0;
    margin-top: 28px;
    top: 0;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  line-height: 143%;
  opacity: 0.5;
  @media (min-width: 1440px) {
    position: absolute;
    right: 0;
    bottom: 40px;
  }
`;
