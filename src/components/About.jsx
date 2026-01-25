import "../styles/About.css";

function About() {
  return (
    <div className="About">
      <div className="About-info">
        <h2 className="About-info-Name">
          Nahomy Tiamo
          <br />
          Maquilladora
        </h2>
        <p className="About-info-description">
        Soy una maquilladora profesional con años de experiencia transformando cada rostro en una obra de arte. Me apasiona resaltar la belleza única de cada persona y crear looks que reflejen su estilo y personalidad.
        <br/> 
        Estoy comprometida con ofrecer un servicio de alta calidad, atención personalizada y resultados que superen tus expectativas. Cada cita es una oportunidad para que te sientas segura, radiante y lista para brillar.
        </p>
      </div>
      <img src="./images/Nahomy_sobre_mi.png" alt="foto de Nahomy Tiamo" className="About-img"/>
      <div className="About-exp">
        <p>5+</p>
        <h3>Maquilladora Profesional</h3>
      </div>
    </div>
  );
}

export default About;
