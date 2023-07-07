import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import React from "react";
import ProductData from "./ProductData";


const productItems = ProductData.map((item) => (
  <Col
    md={4}
    className="col-custom"
    key={item.id}
  >
    <h4 style={{ marginBottom: "30px" }}>{item.title}</h4>
    <img src={item.img} style={{ maxWidth: "210px", marginBottom: "80px" }} />
    <Link
      to={`/products/${item.id}`}
      className="btn btn btn-primary text-secondary btn-custom"
    >
      Подробнее
    </Link>
  </Col>
));

const Products = () => {
  return (
    <Container id="products">
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
