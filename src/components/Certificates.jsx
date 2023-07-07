import { Col, Row } from "react-bootstrap";
import cert1 from "../img/sert.webp";
import cert2 from "../img/cert.webp";

const Certificates = () => {
  return (
    <section id="certificates">
      <h2 className="h2 h2-custom text-center">Сертификаты</h2>
      <Row className="row-custom">
        <Col md={6} xs={12}>
          <img src={cert1} alt="certificate" style={{ maxWidth: "100%" }} />
        </Col>
        <Col md={6} xs={12}>
          <img src={cert2} alt="certificate" style={{ maxWidth: "100%" }} />
        </Col>
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
    </section>
  );
};

export default Certificates;
