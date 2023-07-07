import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ModalOrder from "./ModalOrder";

import logo from "../img/logo.png";

const navItems = [
  {
    title: "Продукция",
    link: "#products",
  },
  {
    title: "О компании",
    link: "#about",
  },
  {
    title: "Сертификаты",
    link: "#certificates",
  },
  {
    title: "Контакты",
    link: "#contacts",
  },
];

const Header = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setNavbarBg("#E4F7F8"); 
    } else {
      setNavbarBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listNavItems = navItems.map((item) => (
    <Nav key={item.link}>
      <Nav.Link
        href={item.link}
        key={item.link}
        className="text-maintext"
      >
        {item.title}
      </Nav.Link>
    </Nav>
  ));

  return (
    <header>
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          backgroundColor: navbarBg,
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Container>
          <Navbar.Brand href="#main">
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: 150 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {listNavItems}
            <ModalOrder />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
