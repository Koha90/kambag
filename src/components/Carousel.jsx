import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const cardStyle = {
  borderRadius: "25px",
  background: "rgba(18, 89, 123, 0.60)",
  boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  maxWidth: "620px",
  height: "380px",
  marginBottom: "80px",
  marginTop: "410px",
};

export const cardItems = [
  {
    title: "Биг-Бэг (МКР) Двустропный",
    description: {
      loadCapacity: "от 500кг до 2 тонн",
      size: "75*75*125 см и по индивидуальным заявкам",
      volume: "700 литров и по индивидуальным заявкам",
    },
    image: "../img/2x-string.png",
  },
  {
    title: "Биг-Бэг (МКР) Одностропный",
    description: {
      loadCapacity: "от 500кг до 2 тонн",
      size: "75*75*125 см и по индивидуальным заявкам",
      volume: "700 литров и по индивидуальным заявкам",
    },
    image: "../img/1-line.png",
  },
  {
    title: "Биг-Бэг (МКР) Четырёхстропный",
    description: {
      loadCapacity: "от 500кг до 2 тонн",
      size: "75*75*125 см и по индивидуальным заявкам",
      volume: "700 литров и по индивидуальным заявкам",
    },
    image: "../img/4-lines.png",
  },
];

const carouselItems = cardItems.map((item) => (
  <Carousel.Item key={item.title}>
    <Col className="d-flex justify-content-end">
      <Card bg="primecard" className="text-secondary" style={cardStyle}>
        <Row className="g-0">
          <Col xs={6} md={6}>
            <Card.Body className="d-flex flex-column align-items-start">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text style={{ margin: "40% auto" }}>
                <strong>Грузоподъёмность</strong>: {item.description.loadCapacity}
                <br />
                <strong>Размер:</strong> {item.description.size}
                <br />
                <strong>Объём:</strong> {item.description.volume}
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={6} md={6}>
            <Card.Img
              src={item.image}
              style={{ height: "auto", maxWidth: "210px" }}
            />
          </Col>
        </Row>
      </Card>
    </Col>
  </Carousel.Item>
));

const CarouselMain = () => {
  return (
    <div className="carousel-background">
      <Container>
        <Carousel style={{ maxHeight: "972px" }}>
          {carouselItems}
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselMain;
