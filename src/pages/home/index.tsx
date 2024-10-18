import Container from "@components/container";
import About from "./about";
import Hero from "./hero";
import Services from "./services";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <About />
        <Services />
      </Container>
    </>
  );
};

export default Home;
