import About from '../components/About/About.jsx';
import Deals from '../components/Deals/Deals.jsx';
import Footer from '../components/Footer/Footer.jsx';
import HeaderBlock from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Stats from '../components/Stats/Stats.jsx';
import { Container, ContWrapper } from '../styles/GlobalStyles.jsx';

const HomePage = () => {
  return (
    <>
      <ContWrapper>
        <Container>
          <HeaderBlock />
          <Hero />
        </Container>
        <Stats />
        <Container>
          <Deals />
        </Container>
        <About />
        <Container>
          <Footer />
        </Container>
      </ContWrapper>
    </>
  );
};
export default HomePage;
