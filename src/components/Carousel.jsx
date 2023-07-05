import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

const cardStyle = {
  borderRadius: "25px",
  background: "rgba(18, 89, 123, 0.60)",
  boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  maxWidth: "620px",
  height: "480px",
  marginBottom: "80px",
  marginTop: "410px",
};

const cardItems = [
  {
    title: "Биг-Бэг (МКР) Двустропный",
    description: {
      loadCapacity: "1 тонна",
      size: "75*75*125 см",
      volume: "700 литров",
    },
    image: "../img/2x-string.png",
  },
  {
    title: "Биг-Бэг (МКР) Одностропный",
    description: {
      loadCapacity: "1 тонна",
      size: "75*75*125 см",
      volume: "700 литров",
    },
    image: "../img/1-line.png",
  },
  {
    title: "Биг-Бэг (МКР) Четырёхстропный",
    description: {
      loadCapacity: "1 тонна",
      size: "75*75*125 см",
      volume: "700 литров",
    },
    image: "../img/4-lines.png",
  },
];

const carouselItems = cardItems.map((item) => (
  <Carousel.Item key={item.title}>
    <Col lg={{ span: 6, offset: 6 }}>
      <Card
        bg="primecard"
        className="text-secondary"
        style={cardStyle}
      >
        <Card.Body>
          <Card.Img
            src={item.image}
            style={{ maxWidth: "258px", maxHeight: "", marginLeft: "220px" }}
          />
          <Card.ImgOverlay>
            <Card.Title>
              {item.title}
            </Card.Title>

            <Card.Text> 
              Грузоподъёмность: {item.description.loadCapacity}
              <br />Размер: {item.description.size}
              <br />Объём: {item.description.volume}
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </Col>
  </Carousel.Item>
));

function CarouselMain() {
  return (
    <Carousel style={{ maxHeight: "972px" }}>
      {carouselItems}
    </Carousel>
  );
}

export default CarouselMain;
