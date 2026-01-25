import { useState, useEffect } from "react";
import "../styles/Experiencias.css";

const experienciasData = [
  {
    nombre: "Gloria Pino",
    titulo: "Ingeniera de Mercados y Docente SENA",
    texto:
      "El maquillaje fue simplemente espectacular. Logró resaltar mis facciones con un acabado elegante y natural. Se nota la experiencia y el amor por su trabajo. ¡Una verdadera artista!",
    foto: "./images/Gloria-Pino.jpg",
  },
  {
    nombre: "Guillermo Gallardo",
    titulo: "Ingeniero Mecánico y Programador",
    texto:
      "Me hizo un maquillaje para Halloween y quedé fascinado. Logró un diseño increíble, muy realista y con una técnica impecable. ¡Definitivamente se nota su talento y profesionalismo!",
    foto: "./images/Guillermo-Gallardo.jpg",
  },
  {
    nombre: "Lolimar Vásquez",
    titulo: "Confeccionista",
    texto:
      "Me encantó cómo me dejó. Su trabajo es limpio, delicado y me hizo sentir muy segura. Nunca me había sentido tan linda. ¡Súper recomendada!",
    foto: "./images/Lolymar.jpg",
  },
  {
    nombre: "Roberlis Sarmeron",
    titulo: "Asesora de Ventas",
    texto:
      "El maquillaje duró todo el día y se veía perfecto en cada foto. Tiene un talento increíble para entender lo que uno quiere y hacerlo realidad. ¡Una experiencia maravillosa!",
    foto: "./images/Roberlis.jpg",
  },
  {
    nombre: "Cindy Gallardo",
    titulo: "Ingeniera de Mercados y Emprendedora",
    texto:
      "Su trabajo es impecable, sabe cómo realzar la belleza natural sin exagerar. Me sentí como modelo. Profesional, puntual y con un toque único. ¡La recomiendo al 100%!",
    foto: "./images/Cindy-Gallardo.jpg",
  },
];


function Experiencias() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const total = experienciasData.length;

  const siguiente = () => setCurrent((prev) => (prev + 1) % total);
  const anterior = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 7000);

    return () => clearInterval(interval);
  }, [total]); // solo depende de total

  // 🔹 Swipe táctil
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) {
      // swipe izquierda → siguiente
      siguiente();
    } else if (deltaX < -50) {
      // swipe derecha → anterior
      anterior();
    }
  };

  return (
    <section className="experiencias-section">
      <h2 className="experiencias-titulo">Experiencias</h2>
      <p className="experiencias-subtitulo">
        Clientes y colaboraciones más destacadas:
      </p>

      <div
        className="experiencias-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {experienciasData.map((exp, index) => {
          const leftIndex = (current - 1 + total) % total;
          const rightIndex = (current + 1) % total;

          let clase = "oculta";
          if (index === current) clase = "centro";
          else if (index === leftIndex) clase = "izquierda";
          else if (index === rightIndex) clase = "derecha";

          return (
            <div key={index} className={`experiencia-card ${clase}`}>
              <img src={exp.foto} alt={exp.nombre} className="experiencia-foto" />
              <h3>{exp.nombre}</h3>
              <p className="experiencia-titulo">{exp.titulo}</p>
              <p className="experiencia-texto">“{exp.texto}”</p>
            </div>
          );
        })}
      </div>

      <div className="experiencias-controles">
        <button onClick={anterior}>‹</button>
        <button onClick={siguiente}>›</button>
      </div>

      <div className="experiencias-dots">
        {experienciasData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "activo" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Experiencias;