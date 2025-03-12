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
        <Title>МОМЕНТАЛЬНО КОПИРУЙ СДЕЛКИ ПРОФИ ТРЕЙДЕРОВ</Title>
        <Description>
          Начни копировать сделки с успешной командой профессиональных трейдеров
          в автоматическом режиме.
        </Description>
        <Form>
          <Input type="email" placeholder="ВАШ E-MAIL" />
          <Button>НАЧАТЬ</Button>
        </Form>
        <DescText>3 дня бесплатного использования</DescText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
