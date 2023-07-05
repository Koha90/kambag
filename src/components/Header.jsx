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

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
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
  );
};

export default Header;
