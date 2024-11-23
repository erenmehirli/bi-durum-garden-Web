import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        {/* Üst Bölüm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hakkımızda</h3>
            <p className="text-black text-sm">
              Adana'da 50 yıllık lezzet geleneğini sürdüren Dede Kebap, kebap,
              fırın yemekleri, steak ve tatlı çeşitleriyle eşsiz bir deneyim
              sunuyor.
            </p>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="text-black text-sm space-y-2">
              <li>
                <span className="font-semibold">Adres:</span> Adana, Türkiye
              </li>
              <li>
                <span className="font-semibold">Telefon:</span> +90 123 456 7890
              </li>
              <li>
                <span className="font-semibold">E-posta:</span>{" "}
                info@dedekebap.com.tr
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black hover:text-red-600 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.437.414a4.918 4.918 0 011.785 1.042 4.918 4.918 0 011.042 1.785c.174.467.358 1.267.414 2.437.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.414 2.437a4.918 4.918 0 01-1.042 1.785 4.918 4.918 0 01-1.785 1.042c-.467.174-1.267.358-2.437.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.437-.414a4.918 4.918 0 01-1.785-1.042 4.918 4.918 0 01-1.042-1.785c-.174-.467-.358-1.267-.414-2.437-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.414-2.437a4.918 4.918 0 011.042-1.785 4.918 4.918 0 011.785-1.042c.467-.174 1.267-.358 2.437-.414 1.266-.058 1.646-.07 4.85-.07zM12 0C8.736 0 8.332.015 7.052.072 5.773.13 4.837.37 4.136.632 3.462.88 2.945 1.202 2.463 1.683a6.118 6.118 0 00-1.051 1.155c-.481.482-.803.999-1.051 1.673-.262.701-.502 1.637-.56 2.915C0 8.332 0 8.736 0 12s.015 3.668.072 4.948c.058 1.278.298 2.214.56 2.915.248.674.57 1.191 1.051 1.673.481.482.999.803 1.673 1.051.701.262 1.637.502 2.915.56C8.332 24 8.736 24 12 24s3.668-.015 4.948-.072c1.278-.058 2.214-.298 2.915-.56.674-.248 1.191-.57 1.673-1.051.482-.481.803-.999 1.051-1.673.262-.701.502-1.637.56-2.915C24 15.668 24 15.264 24 12s-.015-3.668-.072-4.948c-.058-1.278-.298-2.214-.56-2.915-.248-.674-.57-1.191-1.051-1.673-.482-.482-.999-.803-1.673-1.051-.701-.262-1.637-.502-2.915-.56C15.668 0 15.264 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm7.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 transition"
                aria-label="Twitter"
              >
                {/* SVG for Twitter */}
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Dede Kebap. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
