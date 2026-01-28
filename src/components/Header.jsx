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
              <li><a href="#home" onClick={() => setMenuCenterOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuCenterOpen(false)}>Acerca de mí</a></li>
            <li><a href="#services" onClick={() => setMenuCenterOpen(false)}>Servicios</a></li>
            <li><a href="#experiencias" onClick={() => setMenuCenterOpen(false)}>Experiencias</a></li>
            <li><a href="#reservation" onClick={() => setMenuCenterOpen(false)}>Agenda</a></li>
            <li><a href="#Faq" onClick={() => setMenuCenterOpen(false)}>FAQ</a></li>
            </ul>
          </nav>

          <ul className="Header-menu-center-desktop">
            <li><a href="#home" onClick={() => setMenuCenterOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuCenterOpen(false)}>Acerca de mí</a></li>
            <li><a href="#services" onClick={() => setMenuCenterOpen(false)}>Servicios</a></li>
            <li><a href="#experiencias" onClick={() => setMenuCenterOpen(false)}>Experiencias</a></li>
            <li><a href="#reservation" onClick={() => setMenuCenterOpen(false)}>Agenda</a></li>
            <li><a href="#Faq" onClick={() => setMenuCenterOpen(false)}>FAQ</a></li>
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
                  <a href="https://www.instagram.com/tiamomakeup/" target="_blank"><img src="./icons/Insta.png" alt="Instagram Icon" /></a>
                  <a href="https://wa.me/573244493254?text=Hola%2C%20estoy%20interesada%20en%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20hacer%20una%20reservaci%C3%B3n%20de%20maquillaje." target="_blank"><img src="./icons/Wap.png" alt="Whatsapp Icon" /></a>
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