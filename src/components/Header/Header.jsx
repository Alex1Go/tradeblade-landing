import { useState } from 'react';
import sprite from '../../assets/logo/sprite.svg';
import {
  AuthButtons,
  Burger,
  Button,
  HeaderContainer,
  Svg,
  NavLinks,
  StyledLink,
  SvgOpen,
  SvgClose,
  Overlay,
  DesktopAuthButtons,
} from './Header.styles';

const HeaderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Svg>
        <use href={`${sprite}#icon-Frame-21067`}></use>
      </Svg>

      {/* Затемненный фон при открытии меню */}
      {isOpen && <Overlay onClick={closeMenu} />}

      <NavLinks isOpen={isOpen}>
        <SvgClose onClick={closeMenu}>
          <use href={`${sprite}#icon-Frame-18`}></use>
        </SvgClose>
        <StyledLink href="#stats" onClick={closeMenu}>
          ЦИФРЫ
        </StyledLink>
        <StyledLink href="#deals" onClick={closeMenu}>
          СДЕЛКИ ОНЛАЙН
        </StyledLink>
        <StyledLink href="#about" onClick={closeMenu}>
          О КОМПАНИИ
        </StyledLink>
        <StyledLink href="#how-to-start" onClick={closeMenu}>
          КАК НАЧАТЬ
        </StyledLink>
        <StyledLink href="#tariffs" onClick={closeMenu}>
          ТАРИФЫ
        </StyledLink>
        <StyledLink href="#reviews" onClick={closeMenu}>
          ОТЗЫВЫ
        </StyledLink>
        <StyledLink href="#faq" onClick={closeMenu}>
          FAQ
        </StyledLink>
        <AuthButtons>
          <Button primary>РЕГИСТРАЦИЯ</Button>
          <Button>ВОЙТИ</Button>
        </AuthButtons>
      </NavLinks>
      <DesktopAuthButtons>
        <Button>ВХОД</Button>
        <Button primary>РЕГИСТРАЦИЯ</Button>
      </DesktopAuthButtons>
      <Burger onClick={toggleMenu}>
        <SvgOpen>
          <use href={`${sprite}#icon-Group-21046`}></use>
        </SvgOpen>
      </Burger>
    </HeaderContainer>
  );
};

export default HeaderBlock;
