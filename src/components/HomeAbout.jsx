import React from "react";
import logoHead from "../assets/SiyahLogo.png"; // Görsel yolunu güncelleyin.

const HomeAbout = () => {
  return (
    <div className="about__intro bg-black py-12 ">
      <div className="about__intro-inner w-full max-w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Görsel Alanı */}
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img src={logoHead} alt="Logo" className="w-full max-w-xs" />
            </div>

            {/* Başlık ve Açıklama Alanı */}
            <div className="w-full md:w-2/3 about-title text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                ADANA'DA 50 YILLIK LEZZET GELENEĞİ
              </h2>
              <p className="text-white text-xl leading-relaxed font-semibold mb-6 max-w-3xl">
                Kebaplar ile işe başlayan, fırın yemekleri ile devam edip, steak
                çeşitleri ile menüsünü zenginleştiren. İtalyanlardan bile daha
                iyi makarna yaptığını iddia eden ve dillere destan mantar
                servisi ile <br />
                herkesin gönlüne taht kurmuş bir lezzet markasıdır.
              </p>
              <br />
              <br />
              <div className="text-center md:text-left">
                <a
                  href=""
                  className="button px-6 py-3 bg-white border border-white text-black hover:bg-black hover:text-white transition duration-300"
                >
                  DAHA FAZLASI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
