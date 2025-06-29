import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${globalColor.colorWhite};
  position: relative;
`;

export const Svg = styled.svg`
  width: 107px;
  height: 52px;

  @media screen and (min-width: 1440px) {
    width: 132px;
    height: 64px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  background: ${globalColor.colorPurple};
  width: 375px;
  height: 100vh;
  padding: 84px 16px 16px 16px;
  transition: right 0.3s ease;
  gap: 32px;
  z-index: 10;
  

  @media (min-width: 1440px) {
    position: static;
    flex-direction: row;
    height: auto;
    width: auto;
    background: none;
    padding: 0;
  }
`;

export const SvgClose = styled.svg`
  width: 32px;
  height: 32px;
  top: 9px;
  right: 8px;
  position: absolute;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${globalColor.colorWhite};
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 1440px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 121%;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

export const AuthButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const DesktopAuthButtons = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    gap: 12px;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  border-radius: 3px;
  background: ${({ primary }) =>
    primary ? '#57e1ff' : 'rgba(87, 225, 255, 0.2)'};
  color: ${({ primary }) => (primary ? '#030718' : '#57e1ff')};
  box-shadow: 0 0 4px 0 #57e1ff;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #57e1ff')};
  padding: 16px 24px;
  cursor: pointer;
  transition: 0.3s ease;
  height: 52px;

  &:hover {
    background: ${({ primary }) => (primary ? '#0097a7' : '#00bcd4')};
    color: ${globalColor.colorWhite};
  }
  @media (min-width: 1440px) {
    height: 42px;
    padding: 11px 24px;
  }
`;

export const Burger = styled.div`
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SvgOpen = styled.svg`
  fill: #fff;
  width: 23px;
  height: 15px;
  cursor: pointer;
`;
