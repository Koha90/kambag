import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const productDescs = [
  {
    title: "Одностропные МКР",
    img: "../img/1-line.png",
    link: "#Products",
  },
  {
    title: "Двухстропные МКР",
    img: "../img/2-line.png",
    link: "#items",
  },
  {
    title: "Четырёхстропные МКР",
    img: "../img/4-lines.png",
    link: "#Products",
  },
];

const productItems = productDescs.map((item) => (
  <Col
    md={4}
    className="col-custom"
    key={item.title}
  >
    <h4 style={{ marginBottom: "30px" }}>{item.title}</h4>
    <img src={item.img} style={{ maxWidth: "210px", marginBottom: "80px" }} />
    <Button
      href={item.link}
      className="text-secondary btn-custom"
    >
      Подробнее
    </Button>
  </Col>
));

const Products = () => {
  return (
    <Container>
      <h2 className="h2 h2-custom text-center">
        Продукция
      </h2>
      <Row className="row-custom">{productItems}</Row>
      <hr
        style={{
          maxWidth: "1300px",
          height: "5px",
          margin: "0",
          background: "#3B94CB",
          border: "none",
        }}
      />
    </Container>
  );
};

export default Products;
