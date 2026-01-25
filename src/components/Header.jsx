import { useState, useRef, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [menuCenterOpen, setMenuCenterOpen] = useState(false);
  const [menuRightOpen, setMenuRightOpen] = useState(false);

  const centerMenuRef = useRef(null);
  const rightMenuRef = useRef(null);

  // Cierra menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        centerMenuRef.current &&
        !centerMenuRef.current.contains(event.target) &&
        rightMenuRef.current &&
        !rightMenuRef.current.contains(event.target)
      ) {
        setMenuCenterOpen(false);
        setMenuRightOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  const isMobile = window.innerWidth < 768; // detecta pantallas <768px

  if (isMobile && (menuCenterOpen || menuRightOpen)) {
    document.body.style.overflow = "hidden"; // bloquea scroll solo en móvil
  } else {
    document.body.style.overflow = "auto"; // restaurar scroll
  }

  // Restaurar scroll si cambian las dimensiones de la ventana
  const handleResize = () => {
    const isMobileResize = window.innerWidth < 768;
    if (!isMobileResize) {
      document.body.style.overflow = "auto";
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    document.body.style.overflow = "auto"; // asegurarse de limpiar al desmontar
  };
}, [menuCenterOpen, menuRightOpen]);



  return (
    <section className="Header">
      <a href="#home" className="Header-logo">
        <img src="./images/Logo-header.png" alt="" />
      </a>

      <div className="Header-Hamburguer">
        <div className="Header-wrapper-center">
          <button className="hamburger-icon" onClick={() => setMenuCenterOpen(true)} >
            <img src="./icons/Hamburguer-left.png" alt="Menú de hamburguesa central"/>
          </button>

          <nav ref={centerMenuRef} className={`Header-menu-center ${menuCenterOpen ? "open" : ""}`} >
            <button className="Header-close-btn" onClick={() => setMenuCenterOpen(false)} >
              ✕
            </button>
            <ul className="Header-menu-center-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de mí</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#experiencias">Experiencias</a></li>
              <li><a href="#reservation">Agenda</a></li>
              <li><a href="#Faq">FAQ</a></li>
            </ul>
          </nav>

          <ul className="Header-menu-center-desktop">
            <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de mí</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#experiencias">Experiencias</a></li>
              <li><a href="#reservation">Agenda</a></li>
              <li><a href="#Faq">FAQ</a></li>
          </ul>
        </div>









        <div className="Header-wrapper-right">
          <button className="hamburger-icon" onClick={() => setMenuRightOpen(true)}>
            <img src="./icons/Hamburguer-right.png" alt="Menú de hamburguesa derecha" />
          </button>

          <nav ref={rightMenuRef} className={`Header-menu-right ${menuRightOpen ? "open" : ""}`} >
            <button className="Header-close-btn" onClick={() => setMenuRightOpen(false)} >
              ✕
            </button>
            <div className="Header-menu-right-info">
              <h2 className="Header-menu-right-info-title">TIAMO MAKEUP</h2>
              <h3 className="Header-menu-right-info-subtitle">// INSTAGRAM</h3>

              <div className="Header-menu-right-info-instagram">
                <img src="./icons/Insta.png" alt="Instagram Icon" />
                <p>tiamomakeup</p>
              </div>

              <div className="Header-menu-right-info-images">
                <img src="./images/Header-menu1.jpg" alt="" />
                <img src="./images/Header-menu2.jpg" alt="" />
                <img src="./images/Header-menu3.jpg" alt="" />

                <img src="./images/Header-menu4.jpg" alt="" />
                <img src="./images/Header-menu5.jpg" alt="" />
                <img src="./images/Header-menu6.jpg" alt="" />
              </div>

              <div className="Header-menu-right-info-data">
                <div className="Header-menu-right-info-data-item">
                  <img src="./icons/Mail.png" alt="" />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tiamonahomy20@gmail.com&su=Consulta&body=Hola%20deseo%20mas%20informacion." target="_blank"
                  rel="noopener noreferrer">tiamonahomy20@gmail.com</a>
                </div>
                <div className="Header-menu-right-info-data-item">
                  <img src="./icons/Phone.png" alt="" />
                  <a href="tel:+57 3244493254">+57 324 449 3254</a>
                </div>
                <div className="Header-menu-right-info-data-item">
                  <img src="./icons/Location.png" alt="" />
                  <p>Barranquilla - Colombia</p>
                </div>
              </div>

              <div className="Header-menu-right-info-social">
                <p>// SIGUENOS</p>
                <div className="Header-menu-right-info-social-logo">
                  <a href=""><img src="./icons/Insta.png" alt="Instagram Icon" /></a>
                  <a href=""><img src="./icons/Wap.png" alt="Whatsapp Icon" /></a>
                </div>
              </div>

            </div>



          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;