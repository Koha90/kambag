import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const OrderModal = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [variants, setVariants] = useState("");
  const [notes, setNotes] = useState("");

  const handleVariantChange = (e) => {
    const value = e.target.value;
    if (variants.includes(value)) {
      setVariants(variants.filter((variant) => variant !== value));
    } else {
      setVariants([...variants, value]);
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // Оставляем только цифры
    const filteredValue = value.replace(/\D/, "");
    setQuantity(filteredValue);
  };

  const handleKeyDown = (e) => {
    if (!/^\d+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validatePhone = (phoneNumber) => {
    // Шаблон номера телефона
    const phonePattern = /^\+?\d{10,}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваш код для обработки отправки формы
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("quantity", quantity);
    formData.append("variants", variants);
    formData.append("notes", notes);

    // Отправляем данные на сервер с использованием Fetch API
    fetch("http://localhost:8080/sumit-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Успешно отправлено
          alert("Заказ успешно отправлен!");
          // handleClose();
        } else {
          // Ошибка при отправке
          alert("Произошла ошибка при отправке заказа.");
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
        alert("Произошла ошибка при отправке заказа.");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Заполните форму, для отправки заявки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Телефон</Form.Label>
            <div className="input-group">
              <span className="input-group-text">+7</span>
              <Form.Control
                type="tel"
                placeholder="Введите телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                isInvalid={phone && !validatePhone(phone)}
              />
              <Form.Control.Feedback type="invalid">
                Пожалуйста, введите корректный номер телефона.
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formQuantity">
            <Form.Label>Количество</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите количество"
              value={quantity}
              onChange={handleQuantityChange}
              onKeyDown={handleKeyDown}
              inputMode="numeric"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formVariant">
            <Form.Label>Вариант МКР</Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="1-стропный"
                value="1"
                checked={variants.includes("1")}
                onChange={handleVariantChange}
              />
              <Form.Check
                type="checkbox"
                label="2-стропный"
                value="2"
                checked={variants.includes("2")}
                onChange={handleVariantChange}
              />
              <Form.Check
                type="checkbox"
                label="4-стропный"
                value="4"
                checked={variants.includes("4")}
                onChange={handleVariantChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNotes">
            <Form.Label>Пояснение</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Введите пояснение"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ height: "100px", resize: "none" }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="text-secondary">
            Отправить заказ
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="text-secondary">
          Закрыть окно
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function ModalOrder() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="text-secondary"
        onClick={() => setModalShow(true)}
        style={{ boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        Оставить заявку
      </Button>
      <OrderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalOrder;
