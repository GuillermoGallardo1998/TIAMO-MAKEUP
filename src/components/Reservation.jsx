import "../styles/Reservation.css";


function Reservation() {
    return (
    <section className="Reservation">
      <div className="Reservation-wrapper">
        <div className="Reservation-contact">
          <h1 className="Reservation-contact-title">Formulario</h1>
          <h2 className="Reservation-contact-subtitle">Crea tu estilo conmigo</h2>

          <div className="Reservation-contact-info">
            <p className="Reservation-contact-label">LLÁMAME AHORA</p>
            <p className="Reservation-contact-item-number"> 
              <img src="./icons/Wap.png" alt="" />
              +57 324 449 3254
              </p>

            <p className="Reservation-contact-label">CORREO ELECTRÓNICO</p>
            <p className="Reservation-contact-item">tiamonahomy20@gmail.com</p>

            <p className="Reservation-contact-label">DIRECCIÓN</p>
            <p className="Reservation-contact-item">Barranquilla – Cita Previa</p>
          </div>
        </div>

        <form className="Reservation-form">
          <div className="Reservation-form-row">
            <input type="text" placeholder="Nombre*" required />
            <input type="email" placeholder="E-mail*" required />
          </div>
          <input type="text" placeholder="Asunto" />
          <textarea placeholder="Descripción"></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}


export default Reservation;
