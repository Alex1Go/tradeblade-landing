import { useState } from 'react';
import sprite from '../../assets/logo/sprite.svg';
import {
  AuthButtons,
  Burger,
  Button,
  HeaderContainer,
    Logo,
  Svg,
  NavLinks,
  StyledLink,
} from './Header.styles';

const HeaderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo>
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </Logo>
      <NavLinks isOpen={isOpen}>
        <StyledLink href="#stats">ЦИФРЫ</StyledLink>
        <StyledLink href="#deals">СДЕЛКИ ОНЛАЙН</StyledLink>
        <StyledLink href="#about">О КОМПАНИИ</StyledLink>
        <StyledLink href="#how-to-start">КАК НАЧАТЬ</StyledLink>
        <StyledLink href="#tariffs">ТАРИФЫ</StyledLink>
        <StyledLink href="#reviews">ОТЗЫВЫ</StyledLink>
        <StyledLink href="#faq">FAQ</StyledLink>
        <AuthButtons>
          <Button>ВОЙТИ</Button>
          <Button primary>РЕГИСТРАЦИЯ</Button>
        </AuthButtons>
      </NavLinks>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
    </HeaderContainer>
  );
};

export default HeaderBlock;
