package main

import (
	"fmt"
	"net/smtp"
	"net/http"
)

func main() {
	http.HandleFunc("/submit-form", func(w http.ResponseWriter, r *http.Request) {
		// Получение данных из формы
		name := r.FormValue("name")
		phone := r.FormValue("phone")
		email := r.FormValue("email")
		quantity := r.FormValue("quantity")
		variants := r.FormValue("variants")
		notes := r.FormValue("notes")

		// Проверка, что все необходимые поля заполнены
		if name == "" || phone == "" {
			http.Error(w, "Пожалуйста, заполните обязательные поля", http.StatusBadRequest)
			return
		}

		from := "koha.nokhrin@gmail.com"
		password := "VictoriaBekham1995"
		to := "koha.nokhrin@gmail.com"
		// to := "ooo.kambag@mail.ru"
		subject := "Новая заявка"
    body := fmt.Sprintf("Здравствуйте,\n\nУ вас появилась новая заявка.\n\nИмя: %s\nТелефон: %s\nEmail: %s\nКоличество: %s\nВарианты: %s\nПояснение: %s", name, phone, email, quantity, variants, notes)

		// Формирование письма
		message := "From: " + from + "\n" +
			"To: " + to + "\n" +
			"Subject: " + subject + "\n\n" +
			body

		// Настройка параметров SMTP-сервера
		smtpHost := "smtp.gmail.com"
		smtpPort := 587

		// Установка параметров аутентификации
		auth := smtp.PlainAuth("", from, password, smtpHost)

		// Отправка письма
		err := smtp.SendMail(smtpHost+":"+string(smtpPort), auth, from, []string{to}, []byte(message))
		if err != nil {
			http.Error(w, "Ошибка при отправке заявки", http.StatusInternalServerError)
			return
		}

		// Ответ успешной отправки
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Заявка успешно отправлена"))
	})

	http.ListenAndServe(":8080", nil)
}
