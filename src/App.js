import Container from "react-bootstrap/Container";
import "./App.scss";
import AboutCompany from "./components/AboutCompany";
import CarouselMain from "./components/Carousel";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import UtpCard from "./components/UtpCards";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ background: "#6CB9D8" }}>
        <Container>
          <CarouselMain />
        </Container>
      </main>
      <Container>
        <UtpCard />
        <Products />
        <AboutCompany />
        <Contacts />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
