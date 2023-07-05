import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../img/logo.png";

const AboutCompany = () => {
  return (
    <section id="about">
      <h2 className="h2 h2-custom text-center">О компании КамБэг</h2>
      <Row>
        <div className="col-md-7">
          <p className="text-about">
            Производственно-торговая компания «КАМБЭГ» основана в 2020 году.
            Предприятие находится в г. Перми и специализируется на производстве
            всех известных видов МКР (Биг-бэг).
          </p>
          <p className="text-about">
            Коллектив нашей команды имеет профильное образование с постоянным
            повышением квалификации. Вы можете видеть нашу продукцию на
            инженерно-промышленных форумах и профильных выставках. А так же в
            использовании у многих предприятий Пермского края.
          </p>
          <p className="text-about">
            Камбэг гарантирует соблюдение всех технических параметров заказа.
            Благодаря современному оборудованию мы можем выполнять заказы на МКР
            в кротчайшие сроки.
          </p>
        </div>
        <div className="col-md-5">
          <img src={logo} style={{ maxWidth: "100%" }} />
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

export default AboutCompany;
