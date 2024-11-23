import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Hakkımızda</h1>
        <p className="text-lg text-gray-600 mt-4">
          Etin en lezzetli halini, sıcak bir ortamda sunmak için buradayız.
        </p>
      </div>

      {/* Görsel ve Metin Bölümü */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        {/* Görsel Bölümü */}
        <div className="lg:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Restoran görseli"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Metin Bölümü */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Et Yemeklerinde Ustalık
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Restoranımız, en taze ve kaliteli etleri, geleneksel tarifler ve modern pişirme
            teknikleri ile birleştirerek eşsiz bir yemek deneyimi sunar. Misafirlerimize, sadece
            lezzetli yemekler değil, aynı zamanda sıcak ve samimi bir ortam sunmayı hedefliyoruz.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misafirperverlik ve Kalite</h2>
          <p className="text-gray-600 leading-relaxed">
            Sunduğumuz her tabakta, yılların deneyimi ve tutkumuzun izleri bulunur. Müşterilerimizin
            memnuniyeti her zaman önceliğimizdir ve her gün, beklentilerin ötesine geçmek için
            çalışıyoruz.
          </p>
        </div>
      </div>

      {/* Hizmetlerimiz Bölümü */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Hizmetlerimiz</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Özel Kesim Etler</h3>
            <p className="text-gray-600">
              En taze etlerle hazırlanan özel kesimler, sizin için en ideal pişirme yöntemleriyle
              sunulur.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Geniş Menü Seçenekleri</h3>
            <p className="text-gray-600">
              Klasiklerden modern lezzetlere kadar geniş bir yelpazede yemek seçenekleri sunuyoruz.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Özel Etkinlikler</h3>
            <p className="text-gray-600">
              Kutlamalarınız ve özel günleriniz için unutulmaz bir yemek deneyimi sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
