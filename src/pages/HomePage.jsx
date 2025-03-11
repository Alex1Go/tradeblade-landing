import HeaderBlock from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import { Container } from '../styles/GlobalStyles.jsx';

const HomePage = () => {
  return (
    <>
      <Container>
        <HeaderBlock />
        <Hero />
      </Container>
    </>
  );
};
export default HomePage;
