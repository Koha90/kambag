import "./App.scss";
import Container from "react-bootstrap/Container";
import AboutCompany from "./components/AboutCompany";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import UtpCard from "./components/UtpCards";
import CarouselMain from "./components/Carousel";

import React from "react";

function App() {
  return (
    <div className="App" id="main">
      <Header />
      <CarouselMain />
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
