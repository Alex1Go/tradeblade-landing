import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../styles/root';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${globalColor.colorWhite};
  position: relative;
`;

export const Logo = styled.div`
 
`;

export const Svg = styled.svg`
  @media screen and (min-width: 320px) {
    width: 107px;
    height: 52px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 1440px) {
    width: 132px;
    height: 64px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #673ab7;
    width: 200px;
    padding: 20px;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
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
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
