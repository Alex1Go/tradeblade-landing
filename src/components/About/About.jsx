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
          <Title>About the company</Title>
          <TextAbout>
            We are an experienced team for whom trading is a profession. TradeBlade is an authorized official broker of the Binance exchange.
          </TextAbout>
          <TextAbout>
            It provides users with many benefits such as faster API sync speeds and the ability to create a Binance account through the TradeBlade platform with just 1 click.
          </TextAbout>
        </TextBox>
        <Form>
          <TitleForm>
            Try it now and get it
            <br /> 5 days free
          </TitleForm>
          <Input type="email" placeholder="E-MAIL" />
          <Button>Try it</Button>
        </Form>
      </AboutContainer>
    </AboutSection>
  );
};
export default About;
