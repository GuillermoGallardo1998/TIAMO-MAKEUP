import "../styles/Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div className="Footer-top">
        <div className="Footer-top-barra">
          <img src="./images/Footer-barra1.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
          <img src="./images/Footer-barra2.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
          <img src="./images/Footer-barra3.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
          <img src="./images/Footer-barra4.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
          <img src="./images/Footer-barra5.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
          <img src="./images/Footer-barra6.jpeg" alt="Imagen de Instagram" className="Footer-top-barra-img"/>
        </div>
        <div className="Footer-top-box">
          <a href="https://www.instagram.com/tiamomakeup/" target="blank">
            <img src="./icons/Insta.png" alt="Instagram Icono" className="Footer-top-box-img"/>
            <p className="Footer-top-box-text">Síguenos en Instagram</p>
          </a>
        </div>
      </div>

      <div className="Footer-Middle">
        <div className="Footer-Middle-left">
          <a href="#home">INICIO</a>
          <a href="#about">ACERCA DE MÍ</a>
          <a href="#services">SERVICIOS</a>
          <a href="#experiencias">EXPERIENCIAS</a>
          <a href="#reservation">AGENDA AHORA</a> 
          <a href="#Faq">PREGUNTAS FRECUENTES</a>
        </div>
        <div className="Footer-Middle-center">
          <img src="./images/Logo.png" alt="logo" className="Footer-Middle-center-logo"/>
          <div className="Footer-Middle-center-contact">
            <p>LLÁMAME AHORA:</p>
            <div className="Footer-Middle-center-contact-number">
              <img src="./icons/Wap.png" alt="Whatsapp Icono" />
              <p>+57 324 449 3254</p>
            </div>
          </div>
        </div>
        <div className="Footer-Middle-right">
          <a href="#social">MAQUILLAJE SOCIAL</a>
          <a href="#boda">MAQUILLAJE DE NOVIA</a>
          <a href="#grado">MAQUILLAJE DE GRADO</a>
          <a href="#artistico">MAQUILLAJE ARTÍSTICO</a>
          <a href="#fullglam">MAQUILLAJE FULL GLAM</a>
          <a href="#quince">MAQUILLAJE QUINCEAÑERO</a>
        </div>
      </div>

      <div className="Footer-down">
        <p>Tiamo Makeup todos los derechos reservados.</p>
        <div className="Footer-down-social">
          <a href="https://www.instagram.com/tiamomakeup/" target="blank">
            <img src="./icons/Insta.png" alt="Instagram Icono" className="Footer-down-social-icon"/>
          </a>
          <a href="https://www.facebook.com/nahomy2004" target="blank">
            <img src="./icons/Facebook.png" alt="Facebook Icono" className="Footer-down-social-icon"/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;