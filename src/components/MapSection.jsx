import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapSection = () => {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center  text-white mb-6">Bizi Ziyaret Edin</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          {/* React Leaflet Map */}
          <MapContainer
            center={[37.0, 35.321]} // Adana'nın koordinatları
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            {/* Harita Katmanı */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker */}
            <Marker position={[37.0, 35.321]}>
              <Popup>
                Dede Kebap Lokasyonu<br /> Adana, Türkiye.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
