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
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <TradeCard>
        <TradeBox dashed>
          <TradeText>
            ETH/USDT
            <br />
            Short
            <br />
            +141%
          </TradeText>
        </TradeBox>
        <TradeBox>
          <TradeText>
            ETH/USDT
            <br />
            Short
            <br />
            +116%
          </TradeText>
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
        <p>3 дня бесплатного использования</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
