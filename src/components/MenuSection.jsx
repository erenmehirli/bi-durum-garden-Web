import React from "react";
import resim from "../assets/steak.png";

const MenuSection = () => {
  const menuItems = [
    { id: "KEBAP", label: "KEBAP", href: "", image: resim },
    { id: "FIRIN", label: "FIRIN", href: "", image: resim },
    { id: "STEAK", label: "STEAK", href: "", image: resim },
    { id: "TATLI", label: "TATLI", href: "", image: resim },
  ];

  return (
    <section className="bg-black py-20" id="menus">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">MENÜ</h1>
      </div>

      {/* Menü Listesi */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group relative bg-white shadow-lg overflow-hidden hover:shadow-xl transition"
            style={{ height: "300px" }} // Kart yüksekliği artırıldı
          >
            {/* Resim */}
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30 group-hover:bg-opacity-50 transition"></div>
            {/* Hover İçerik */}
            <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-white text-2xl font-bold">{item.label}</h2>
              <span className="text-sm text-white mt-2">Detay</span>
            </div>
          </a>
        ))}
      </div>

      {/* Daha Fazlası Butonu */}
      <div className="text-center mt-12">
        <a
          href=""
          className="px-6 py-3 bg-white border border-white text-black hover:bg-black hover:text-white transition duration-300"
        >
          Daha Fazlası
        </a>
      </div>
    </section>
  );
};

export default MenuSection;
