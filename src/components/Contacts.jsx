import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import YandexMap from "./YandexMap";

const Contacts = () => {
  return (
    <section id="contacts">
      <h2 className="h2 h2-custom text-center">Контакты</h2>
      <Row className="g-2 row-custom">
        <div className="col-md-6 text-contacts">
          <strong>Общество с ограниченой ответственностью «КАМБЭГ»</strong>
          <br />
          <strong>ОГРН:</strong> 1215900004671<br />
          <strong>ИНН:</strong> 5904387689<br />
          <strong>КПП:</strong> 590401001<br />
          <strong>ОКВЭД:</strong> 22.22<br />
          <strong>Адрес:</strong> г.Пермь, улица Героев Хасана, 46 лит Б<br />
          <strong>Email:</strong>
          <a href="mailto:ooo.kambag@mail.ru">ooo.kambag@mail.ru</a>
        </div>
        <div className="col-sm-6" style={{minHeight: "450px"}}>
          <YandexMap />
        </div>
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

export default Contacts;
