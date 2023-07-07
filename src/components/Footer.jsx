import { Link } from "react-router-dom";
import tg from "../img/telegram.svg";
import vb from "../img/viber.svg";
import wa from "../img/whatsapp.svg";

const Footer = () => {
  return (
    <footer style={{ margin: "70px 0" }}>
      <div className="col-md-6">
        График работы: пн-пт с 8:00 до 20:00<br />
        Тел: <a href="tel:+7‒912‒989‒77‒55">+7‒912‒989‒77‒55</a> <br />
        Соц. сети и мессенджеры:{" "} &nbsp;
        <a href="tg://resolve?domain=ooo_KamBag">
          <img src={tg} alt="Telegram" />
        </a>&nbsp;
        <a href="viber://add?number=79129897755">
          <img src={vb} alt="Viber" />
        </a>&nbsp;
        <a href="https://wa.me/79129897755">
          <img src={wa} alt="WhatsApp" />
        </a>
        <br />
        <Link to="/privacy-policy">
          Политика обработки персональных данных
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
