import "./App.scss";
import Container from "react-bootstrap/Container";
import AboutCompany from "./components/AboutCompany";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import UtpCard from "./components/UtpCards";
import CarouselMain from "./components/Carousel";
import Product from "./components/Product";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Certificates from "./components/Certificates";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const removeHash = () => {
      if (window.location.hash) {
        window.history.replaceState(
          {},
          document.title,
          window.location.href.replace(window.location.hash, ""),
        );
      }
    };

    removeHash();

    window.addEventListener("hashchange", removeHash);

    return () => {
      window.removeEventListener("hashchange", removeHash);
    };
  }, []);
  return (
    <div className="App" id="main">
      <Header />
      <CarouselMain />
      <Container>
        <UtpCard />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <AboutCompany />
        <Certificates />
        <Contacts />
        <Footer />
      </Container>
    </div>
  );
}

function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default RootApp;
