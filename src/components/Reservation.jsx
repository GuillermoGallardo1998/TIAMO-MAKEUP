import "../styles/Reservation.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Reservation() {

  const form = useRef(); // Referencia al formulario

  const sendEmail = (e) => {
    e.preventDefault(); // Evita recargar la página

    emailjs
      .sendForm(
        "service_xdf21au",   // ← Pega tu Service ID aquí
        "template_f8upubq",  // ← Pega tu Template ID aquí
        form.current,      // Toma todos los datos del form
        "V8Lrx4cG4H_VgsnNK"    // ← Pega tu Public Key aquí
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente 💌");
          form.current.reset(); // Limpia el formulario después de enviar
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un error al enviar ❌");
        }
      );
  };

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

        {/* 👇 Conectamos el form */}
        <form ref={form} onSubmit={sendEmail} className="Reservation-form">
          <div className="Reservation-form-row">
            <input 
              type="text" 
              name="from_name"   // ESTE NOMBRE debe coincidir con el template
              placeholder="Nombre*" 
              required 
            />
            <input 
              type="email" 
              name="from_email"  // Debe coincidir con el template
              placeholder="E-mail*" 
              required 
            />
          </div>

          <input 
            type="text" 
            name="subject" 
            placeholder="Asunto" 
          />

          <textarea 
            name="message" 
            placeholder="Descripción"
          ></textarea>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
