import { Link, NavLink } from 'react-router-dom';
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
  /* @media screen and (min-width: 320px) {
    width: 107px;
    height: 52px;
  } */

  /* @media screen and (max-width: 1339px) {
    width: 107px;
    height: 52px;
  } */

  @media screen and (min-width: 1440px) {
    width: 132px;
    height: 64px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1339px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    background: rgba(0, 0, 0, 0.9);
    width: 200px;
    padding: 20px;
    transition: right 0.3s ease;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? '#00bcd4' : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : '#00bcd4')};
  border: 1px solid #00bcd4;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ primary }) => (primary ? '#0097a7' : '#00bcd4')};
    color: white;
  }
`;

export const Burger = styled.div`
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
