import React, { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  // Lista de fondos y textos
  const slides = [
    {
      image: "/images/Portada-1.jpeg",
      subtitle: "Resalta tu belleza",
      title: "crea tu estilo",
    },
    {
      image: "/images/Portada-2.jpeg",
      subtitle: "Brilla con confianza",
      title: "luce única",
    },
    {
      image: "/images/Portada-3.jpeg",
      subtitle: "Tu look perfecto",
      title: "nuestra pasión",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar de fondo cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="Home">
      {/* Contenedor de las imágenes superpuestas */}
      <div className="Home-backgrounds">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`Home-backgrounds-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>

      <div className="Home-overlay"></div>

      {/* Contenido centrado */}
      <div className="Home-content">
        <div key={currentIndex + "-text"} className="text-content">
          <h2 className="Home-content-subtitle">{currentSlide.subtitle}</h2>
          <h1 className="Home-content-title">{currentSlide.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
