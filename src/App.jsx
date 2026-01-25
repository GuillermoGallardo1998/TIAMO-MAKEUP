import React, { useState } from "react";
import Header from "./components/Header";
import Presentation from "./pages/Presentation";
import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";

import Reservation from "./components/Reservation";
import Experiencias from "./components/Experiencias";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <>
      {!entered ? (
        <Presentation onEnter={handleEnter} />
      ) : (
        <>
          <Header />
          <main>
            <section id="home">
              <Home />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="services">
              <Services />
            </section>

            <section id="experiencias">
              <Experiencias />
            </section>

            <section id="reservation">
              <Reservation />
            </section>    

            <section id="Faq">
              <Faq />
            </section>

            <section id="Footer">
              <Footer />
            </section>
          </main>

          <a
            href="https://wa.me/573244493254"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/Wap-logo.png" alt="WhatsApp" />
          </a>
        </>
      )}
    </>
  );
}

export default App;
