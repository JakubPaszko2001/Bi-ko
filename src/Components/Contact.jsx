import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#1f3622] text-white py-12 px-[20px] flex flex-col items-center justify-center">
      <form className="w-full max-w-md md:max-w-lg lg:max-w-xl space-y-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
          Kontakt
        </h2>

        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Imię:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Twoje imię"
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Twój e-mail"
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="message">
            Wiadomość:
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Napisz wiadomość..."
            className="w-full px-4 py-2 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#1f3622] transition"
          >
            Wyślij
          </button>
        </div>
      </form>

      <p className="mt-12 text-center text-lg px-4 max-w-4xl leading-relaxed">
        Zastanawiasz się nad modernizacją swojego domu lub miejsca pracy? Skontaktuj się z firmą Bińko-Bud i dowiedz się więcej. <br />
        <strong>Klepacka 6/6, 15-634 Białystok, Polska</strong> <br />
        <strong>Email:</strong> danielczakjoanna53@gmail.com &nbsp;|&nbsp;
        <strong>Tel:</strong> 883 925 596
      </p>
    </div>
  );
};

export default Contact;
