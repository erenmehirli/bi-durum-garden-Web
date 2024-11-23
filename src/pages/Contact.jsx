import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">İletişim</h1>
        <p className="text-lg text-gray-600 mt-4">
          Bize ulaşmak için aşağıdaki bilgileri kullanabilir ya da formu doldurabilirsiniz.
        </p>
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* İletişim Bilgileri */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim Bilgilerimiz</h2>
          <p className="text-gray-600 mb-4">
            Lezzetli yemeklerimizi tatmak ya da özel etkinlikleriniz için bize ulaşın!
          </p>
          <ul className="text-gray-700 space-y-3">
            <li>
              <span className="font-semibold">Adres:</span> Bahçelievler Mahallesi, No: 25, İstanbul
            </li>
            <li>
              <span className="font-semibold">Telefon:</span>{" "}
              <a href="tel:+905555555555" className="text-blue-600 hover:underline">
                +90 555 555 55 55
              </a>
            </li>
            <li>
              <span className="font-semibold">E-posta:</span>{" "}
              <a
                href="mailto:info@restaurant.com"
                className="text-blue-600 hover:underline"
              >
                info@restaurant.com
              </a>
            </li>
          </ul>
        </div>

        {/* İletişim Formu */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bize Yazın</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Adınızı girin"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Mesajınız
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Mesajınızı buraya yazın"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Harita */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Bizi Ziyaret Edin</h2>
        <div className="container mx-auto">
          <iframe
            title="Google Harita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31218.492146!2d28.979530!3d41.015137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KfQsNCy0LDQvdC40LkgU3VicGxhY2UsIFN1bHRhbmN1cywg0KPQvNC10L7QutC-0LrRgNCw0LvRjA!5e0!3m2!1sen!2str!4v1609374886093!5m2!1sen!2str"
            width="100%"
            height="400"
            className="border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
