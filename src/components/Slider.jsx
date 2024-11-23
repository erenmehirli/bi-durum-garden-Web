import { useState, useEffect } from "react";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 saniyede bir otomatik geçiş
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Images */}
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`image ${i + 1}`} className="w-full h-full object-cover flex-shrink-0" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-full transition-all ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Manual Controls */}
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black p-2 rounded-full shadow">
        <ArrowBackIosNewOutlinedIcon className="text-white"/>
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black opacity-75  p-2 rounded-full shadow">
        <NavigateNextOutlinedIcon className="text-white"/>
      </button>
    </div>
  );
}
