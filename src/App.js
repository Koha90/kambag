import Container from "react-bootstrap/Container";
import "./App.scss";
import CarouselMain from "./components/Carousel";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="bg-primary">
        <CarouselMain />
      </Container>
    </div>
  );
}

export default App;
