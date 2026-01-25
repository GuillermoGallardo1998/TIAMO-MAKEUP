import { useState } from "react";
import "../styles/Faq.css";

const Faq = () => {
  const faqs = [
    { question: "¿Qué servicios ofrece Nahomy Makeup?",
      answer: "Ofrecemos maquillaje social, de novia, de grado, artístico, full glam y quinceañero."
    },
    { question: "¿Dónde están ubicados?",
      answer: "Estamos en Barranquilla y atendemos a domicilio, especialmente en la zona norte."
    },
    { question: "¿Cómo puedo agendar una cita?",
      answer: "Puedes agendar por cualquier medio; solo es necesario contactar y verificar disponibilidad."
    },
    { question: "¿Trabajan con productos hipoalergénicos?",
      answer: "Contamos con todo tipo de productos. En casos específicos de alergia, usamos maquillajes especiales que pueden tener un costo adicional."
    },
    { question: "¿Con cuánta anticipación debo reservar?",
      answer: "Recomendamos reservar con al menos una semana de anticipación, pero si hay disponibilidad, también se puede atender el mismo día."
    },
    { question: "¿Puedo cambiar mi cita una vez agendada?",
      answer: "Sí, las reprogramaciones deben solicitarse con 3 días hábiles de anticipación."
    },
    { question: "¿Tienen paquetes de maquillaje y peinado?",
      answer: "Actualmente ofrecemos solo servicios de maquillaje, sin paquetes de peinado."
    },
    { question: "¿Cuánto tiempo dura una sesión de maquillaje?",
      answer: "La duración varía según el tipo de maquillaje, desde 1 hora hasta aproximadamente 6 horas."
    },
    { question: "¿Ofrecen servicios a domicilio?",
      answer: "Sí, realizamos maquillaje a domicilio únicamente en Barranquilla, especialmente en la zona norte."
    },
    { question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, Bancolombia y Nequi."
    }
  ];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Faq">
      <h2 className="Faq-title">Preguntas Frecuentes</h2>

      <div className="Faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`Faq-item ${openIndex === index ? "active" : ""}`}
          >
            <div className="Faq-question" onClick={() => toggleAnswer(index)}>
              <p>{faq.question}</p>
              <span className={`Faq-chevron ${openIndex === index ? "open" : ""}`}></span>
            </div>

            <div className={`Faq-answer ${openIndex === index ? "show" : "hidden"}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
