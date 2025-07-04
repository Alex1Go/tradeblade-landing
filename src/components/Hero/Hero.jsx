import React from 'react';
import {
  HeroSection,
  HeroContent,
  Title,
  Description,
  Form,
  Input,
  Button,
  TradeCard,
  TradeBox,
  TradeText,
  Position,
  TradeTitle,
  DescText,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <TradeCard>
        <TradeBox dashed>
          <TradeTitle>ETH/USDT</TradeTitle>
          <Position>Short</Position>
          <TradeText>+141%</TradeText>
        </TradeBox>
        <TradeBox>
          <TradeTitle>ETH/USDT</TradeTitle>
          <Position>Short</Position>
          <TradeText>+116%</TradeText>
        </TradeBox>
      </TradeCard>
      <HeroContent>
        <Title>INSTANTLY COPY PRO TRADES OF PRO TRADERS</Title>
        <Description>
          Start copying trades with a successful team of professional traders
in automatic mode.
        </Description>
        <Form>
          <Input type="email" placeholder="ВАШ E-MAIL" />
          <Button>BEGIN</Button>
        </Form>
        <DescText>3 days free use</DescText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
