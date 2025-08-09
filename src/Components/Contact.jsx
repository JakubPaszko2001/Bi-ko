import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null); // 'success' | 'error'
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Wpisz swoje imię i nazwisko.";
    if (!formValues.email.trim()) {
      newErrors.email = "Wpisz adres e-mail.";
      } else if (
        !/^[A-Z0-9._%+\-ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+@[A-Z0-9.\-ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+\.[A-Z]{2,}$/i
          .test(formValues.email.trim())
      ) {
        newErrors.email = "Niepoprawny adres e-mail.";
      }
    if (!formValues.message.trim()) {
      newErrors.message = "Wpisz wiadomość.";
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = "Wiadomość musi mieć co najmniej 10 znaków.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_nikqmd7",
        "template_2swhkjr",
        form.current,
        "s_6XafTQeUcjEz-LL"
      )
      .then(() => {
        setStatusMessage("Wiadomość została wysłana!");
        setStatusType("success");
        form.current.reset();
        setFormValues({ name: "", email: "", message: "" });
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .catch((error) => {
        setStatusMessage("Błąd podczas wysyłania. Spróbuj ponownie.");
        setStatusType("error");
        console.error(error);
        setTimeout(() => setStatusMessage(null), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-[#1f3622] text-white pt-12 px-[20px] flex flex-col items-center justify-center relative">
      <span id="contact" className="block absolute -top-20" aria-hidden="true"></span>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl space-y-6"
        noValidate
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
          Umów się na bezpłatną wycenę swojego remontu
        </h2>

        {/* Imię i nazwisko */}
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Imię i nazwisko:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Twoje imię i nazwisko"
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Twój e-mail"
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Wiadomość */}
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="message">
            Wiadomość:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Napisz wiadomość..."
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Przycisk */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-10 py-2 border text-white rounded-md transition ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "border-white hover:bg-white hover:text-[#1f3622]"
            }`}
          >
            {isLoading ? "Wysyłanie..." : "Wyślij"}
          </button>
        </div>

        {/* Komunikat zwrotny */}
        {statusMessage && (
          <div
            className={`mt-6 text-center py-2 px-4 rounded-md ${
              statusType === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </form>

      <p className="mt-12 text-center text-lg px-4 max-w-5xl leading-relaxed">
        Zastanawiasz się nad modernizacją swojego domu lub miejsca pracy? Skontaktuj się z firmą Bińko-Bud i dowiedz się więcej. <br />
        <strong>Klepacka 6/6, 15-634 Białystok, Polska</strong> <br />
        <strong>Email:</strong>binkobud12@gmail.com &nbsp;|&nbsp;
        <strong>Tel:</strong> 514 008 415
      </p>

      <footer className="mt-20 w-full border-t border-white/30 py-4 text-center text-sm text-white/80">
        © <strong>Bińko-Bud.pl</strong>. Wszelkie prawa zastrzeżone. Projekt:{" "}
        <span className="text-white">Jakub Paszko</span>
      </footer>
    </div>
  );
};

export default Contact;
