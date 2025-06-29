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
} from './Header.styled';

const HeaderBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Svg>
        <use href={`${sprite}#icon-Frame-21067`}></use>
      </Svg>
      {isOpen && <Overlay onClick={closeMenu} />}
      <NavLinks isOpen={isOpen}>
        <SvgClose onClick={closeMenu}>
          <use href={`${sprite}#icon-Frame-18`}></use>
        </SvgClose>
        <StyledLink href="#stats" onClick={closeMenu}>
          NUMBERS
        </StyledLink>
        <StyledLink href="#deals" onClick={closeMenu}>
          ONLINE DEALS
        </StyledLink>
        <StyledLink href="#about" onClick={closeMenu}>
          ABOUT THE COMPANY
        </StyledLink>
        <StyledLink href="#how-to-start" onClick={closeMenu}>
          HOW TO GET STARTED
        </StyledLink>
        <StyledLink href="#tariffs" onClick={closeMenu}>
          RATES
        </StyledLink>
        <StyledLink href="#reviews" onClick={closeMenu}>
          REVIEWS
        </StyledLink>
        <StyledLink href="#faq" onClick={closeMenu}>
          FAQ
        </StyledLink>
        <AuthButtons>
          <Button primary>REGISTRATION</Button>
          <Button>LOG IN</Button>
        </AuthButtons>
      </NavLinks>
      <DesktopAuthButtons>
        <Button>LOG IN</Button>
        <Button primary>REGISTRATION</Button>
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
