import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const cardText = [
  { text: `Работаем c 2020 года` },
  { text: "Команда профессионалов" },
  { text: "Выполнения заказа за короткий срок" },
];

const cardItems = cardText.map((text) => (
  <Col style={{ display: "flex", justifyContent: "center" }} key={text.text}>
    <Card
      className="text-center"
      bg="secondary"
      key={text.text}
      style={{
        fontSize: "2.25rem",
        maxWidth: "320px",
        height: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {text.text}
    </Card>
  </Col>
));

const UtpCard = () => {
  return (
    <Container>
      <Row className="gap-3">
        {cardItems}
      </Row>
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

export default UtpCard;
