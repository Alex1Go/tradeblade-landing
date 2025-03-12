import React from 'react';
import sprite from '../../assets/logo/sprite.svg';
import {
  FooterSection,
  FooterText,
  FootItem,
  Line,
  Link,
  List,
  NavBox,
  NavTitle,
  Svg,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <NavBox>
        <NavTitle>Быстрая навигация</NavTitle>
        <List>
          <FootItem>
            <Link href="#stats">ЦИФРЫ</Link>
          </FootItem>
          <FootItem>
            <Link href="#deals">СДЕЛКИ ОНЛАЙН</Link>
          </FootItem>
          <FootItem>
            <Link href="#about">О КОМПАНИИ</Link>
          </FootItem>
          <FootItem>
            <Link href="#how-to-start">TRADEBLAD ЭТО</Link>
          </FootItem>
          <FootItem>
            <Link href="#tariffs">КАК НАЧАТЬ</Link>
          </FootItem>
          <FootItem>
            <Link href="#reviews">ТАРИФЫ</Link>
          </FootItem>
          <FootItem>
            <Link href="#faq">FAQ</Link>
          </FootItem>
        </List>
      </NavBox>
      <Line></Line>
      <Svg>
        <use href={`${sprite}#icon-Frame-21067`}></use>
      </Svg>
      <FooterText>&#169; 2022 TradeBlade. All rights reserved</FooterText>
    </FooterSection>
  );
};
export default Footer;
