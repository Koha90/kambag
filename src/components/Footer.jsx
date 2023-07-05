import tg from "../img/telegram.svg";
import vb from "../img/viber.svg";
import wa from "../img/whatsapp.svg";

const Footer = () => {
  return (
    <footer style={{ margin: "70px 0" }}>
      <div className="col-md-6">
        График работы: пн-пт с 8:00 до 20:00<br />
        Тел: +7‒912‒989‒77‒55 <br />
        Соц. сети и мессенджеры:{" "}
        <a href="tg://resolve?domain=ooo_KamBag">
          <img src={tg} />
        </a>
        <a href="viber://add?number=79129897755">
          <img src={vb} />
        </a>
        <a href="https://wa.me/79129897755">
          <img src={wa} />
        </a>
        <br />
        Пполитика обработки персональных данных<br />
      </div>
    </footer>
  );
};

export default Footer;
