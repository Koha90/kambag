import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

function CarouselMain() {
  return (
    <Carousel>
      <Carousel.Item>
        <Col
          md={{ offset: 5 }}
        >
          <Card
            bg="primecard"
            className="text-secondary"
            style={{
              borderRadius: "25px",
              background: "rgba(18, 89, 123, 0.60)",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              width: "620px",
              height: "480px",
              flexShrink: "0",
            }}
          >
            <Card.Body>
              <Card.Title>
                Hello from 1 card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Carousel.Item>
      <Carousel.Item>
        <Col md={{ span: 6, offset: 6 }}>
          <Card
            bg="primecard"
            className="text-secondary"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>
                Hello from 2 card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Carousel.Item>
      <Carousel.Item>
        <Col md={{ span: 6, offset: 6 }}>
          <Card
            bg="primecard"
            text="secondary"
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>
                Hello from 3 card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;
