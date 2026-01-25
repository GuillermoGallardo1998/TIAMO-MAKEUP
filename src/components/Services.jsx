import "../styles/Services.css";
import { useState, useEffect } from "react";

const images = [
  { 
    id: "boda",
    src: "./images/Boda.jpeg",
    title: "Maquillaje de Boda",
    description: "Para novias e invitadas, creamos un maquillaje elegante y duradero que resalta la belleza natural de cada persona. Desde un look romántico y sutil hasta un estilo más sofisticado, cada detalle está pensado para que luzcas radiante durante toda la celebración y captures todas las miradas." 
  },
  { 
    id: "artistico",
    src: "./images/Artistico.jpeg",
    title: "Maquillaje Artístico",
    description: "Exprésate sin límites con nuestro maquillaje artístico. Diseños creativos, colores vibrantes y acabados originales que reflejan tu personalidad única. Ideal para sesiones fotográficas, eventos especiales o simplemente para experimentar con tu estilo y destacar con un look único." 
  },
  { 
    id: "fullglam",
    src: "./images/FullGlam.jpeg",
    title: "Full Glam",
    description: "Un maquillaje completo y espectacular que transforma tu apariencia y te hace brillar en cualquier evento. Desde pestañas dramáticas hasta sombras intensas y labios perfectos, el Full Glam garantiza un look impactante y duradero, ideal para fiestas, sesiones fotográficas o cualquier ocasión en la que quieras deslumbrar." 
  },
  { 
    id: "grado",
    src: "./images/Grado.jpeg",
    title: "Maquillaje de Grado",
    description: "Celebra tu graduación con un maquillaje elegante, fresco y sofisticado que resalta tu belleza natural y te hace sentir especial. También ofrecemos opciones para familiares e invitadas, logrando que todos luzcan impecables y armoniosos en esta fecha tan memorable." 
  },
  { 
    id: "quince",
    src: "./images/Quince.jpeg",
    title: "Maquillaje de Quinceañera",
    description: "Para la quinceañera y sus invitadas, diseñamos un maquillaje que combina frescura, encanto y elegancia. Cada look se adapta a tu estilo y al de tus acompañantes, asegurando que todos luzcan radiantes y memorables en la celebración de este momento tan especial." 
  },
  { 
    id: "social",
    src: "./images/Social.jpeg",
    title: "Maquillaje Social",
    description: "Ideal para cualquier ocasión social: fiestas, eventos corporativos, reuniones o salidas especiales. Nuestro maquillaje resalta tus rasgos de manera natural y sofisticada, creando un look armonioso que refleja tu estilo y seguridad, para que te sientas cómoda y elegante en todo momento." 
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);



  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      const service = images.find(img => img.id === hash);
      if (!service) return;

      // 🔥 SIEMPRE hacer scroll a la sección SERVICES
      const section = document.getElementById("services-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      // ⏱️ Pequeño delay para que el scroll termine
      setTimeout(() => {
        setSelected(service);
      }, 300);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);



  const closeModal = () => setSelected(null);

  return (
    <section className="Services" id="services-section">
      <h1 className="Services-title">SERVICIOS</h1>

      <div className="services-container">
        {images.map((img) => (
          <div 
            key={img.id} 
            id={img.id}
            className="service-container-item"
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.title} />
            <h2>{img.title}</h2>
          </div>
        ))}
      </div>

      {selected && (
        <div className="Services-modal-overlay" onClick={closeModal}>
          <div className="Services-modal" onClick={e => e.stopPropagation()}>
            <button className="Services-modal-close" onClick={closeModal}>×</button>
            <img src={selected.src} alt={selected.title} className="Services-modal-image" />
            <div className="Services-modal-content">
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
