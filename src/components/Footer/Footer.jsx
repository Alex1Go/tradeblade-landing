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
        <NavTitle>Quick navigation</NavTitle>
        <List>
          <FootItem>
            <Link href="#stats">NUMBERS</Link>
          </FootItem>
          <FootItem>
            <Link href="#deals">ONLINE DEALS</Link>
          </FootItem>
          <FootItem>
            <Link href="#about">ABOUT THE COMPANY</Link>
          </FootItem>
          <FootItem>
            <Link href="#how-to-start">TRADEBLAD IS IT</Link>
          </FootItem>
          <FootItem>
            <Link href="#tariffs">HOW TO GET STARTED</Link>
          </FootItem>
          <FootItem>
            <Link href="#reviews">RATES</Link>
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
