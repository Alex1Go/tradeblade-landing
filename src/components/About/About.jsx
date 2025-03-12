import React from 'react';
import {
  AboutContainer,
  AboutSection,
  Button,
  Form,
  Input,
  TextAbout,
  Title,
  TitleForm,
  Trap,
  TextBox,
} from './About.styled';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <Trap></Trap>
        <TextBox>
          <Title>О компании</Title>
          <TextAbout>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
          </TextAbout>
          <TextAbout>
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </TextAbout>
        </TextBox>
        <Form>
          <TitleForm>
            Попробуйте сейчас и получите
            <br /> 5 дней бесплатного пользования
          </TitleForm>
          <Input type="email" placeholder="ВАШ E-MAIL" />
          <Button>Пoпробовать</Button>
        </Form>
      </AboutContainer>
    </AboutSection>
  );
};
export default About;
