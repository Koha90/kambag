import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductData from "./ProductData";

function Product(
  { id, title, img, description, volume, size, loadCapacity, cost },
) {
  return (
    <div key={id}>
      <h4 style={{ marginBottom: "30px" }}>{title}</h4>
      <Row className="g-2">
        <Col className="md-2">
          <img
            src={img}
            style={{ maxWidth: "210px", marginBottom: "20px" }}
            alt={title}
          />
        </Col>
        <Col className="md-2">
          <p>
            <strong>Грузоподъёмность:</strong> {loadCapacity}
          </p>
          <p>
            <strong>Размер:</strong> {size}
          </p>
          <p>
            <strong>Объём:</strong> {volume}
          </p>
          <p>
            <strong>Дополнительная опция:</strong>{" "}
            Вкладыш Полиэтиленовый по размерам заказчика от 170р. за штуку
          </p>
          <p>
            <strong>Описание:</strong> {description}
          </p>
          <p>
            <strong>Цена за 1 штуку:</strong> {cost}
          </p>
        </Col>
      </Row>
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();

  // Распарсить данные о продукте из объекта productData
  const product = ProductData.find((item) => item.id === parseInt(id));

  return (
    <Container>
      <h2 className="h2 h2-custom text-center">{product.title}</h2>
      {product
        ? (
          <Product
            id={product.id}
            title={product.title}
            img={product.img}
            loadCapacity={product.description.loadCapacity}
            size={product.description.size}
            volume={product.description.volume}
            description={product.description.text}
            cost={product.description.cost}
          />
        )
        : <p>Продукт не найден</p>}
      <Link
        to="/"
        className="btn btn btn-primary text-secondary btn-custom"
        style={{ marginBottom: "60px" }}
      >
        Назад
      </Link>
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
}

export default ProductPage;
