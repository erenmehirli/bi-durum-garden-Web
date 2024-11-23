import React from "react";

const Reservation = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Rezervasyon Yap</h1>
        <p className="text-lg text-gray-600 mt-4">
          Restoranımızda yerinizi ayırtmak için aşağıdaki formu doldurun.
        </p>
      </div>

      {/* Rezervasyon Formu */}
      <div className="container mx-auto max-w-lg bg-white rounded-lg shadow-lg p-8">
        <form className="space-y-6">
          {/* Ad Soyad */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Adınızı ve soyadınızı girin"
              required
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Telefon Numarası
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Telefon numaranızı girin"
              required
            />
          </div>

          {/* Tarih */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
              Tarih
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Saat */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
              Saat
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Kişi Sayısı */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="guests">
              Kişi Sayısı
            </label>
            <select
              id="guests"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="" disabled selected>
                Kişi sayısını seçin
              </option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Kişi
                </option>
              ))}
            </select>
          </div>

          {/* Mesaj */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Özel Not (Opsiyonel)
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Rezervasyonla ilgili özel bir notunuz var mı?"
            ></textarea>
          </div>

          {/* Gönder Butonu */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Rezervasyon Yap
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
