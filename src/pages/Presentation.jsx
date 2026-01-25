/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "../styles/presentation.css";

const icons = [
  "/icons/Home-img1.png",
  "/icons/Home-img2.png",
  "/icons/Home-img3.png",
  "/icons/Home-img4.png",
  "/icons/Home-img5.png",
  "/icons/Home-img6.png",
  "/icons/Home-img7.png",
  "/icons/Home-img8.png",
  "/icons/Home-img9.png",
];

const getIconSize = () => {
  const w = window.innerWidth;

  if (w < 425) return 60;
  if (w < 768) return 80;
  if (w < 1024) return 100;
  if (w < 1440) return 120;
  return 140;
};

const Presentation = ({ onEnter }) => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const itemsRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const [entering, setEntering] = useState(false);
  const [iconSize, setIconSize] = useState(getIconSize());

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
useEffect(() => {
  const container = containerRef.current;

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  container.addEventListener("mousemove", handleMouseMove);

  itemsRef.current = iconsRef.current.map((el) => ({
    el,
    x: Math.random() * (container.clientWidth - iconSize),
    y: Math.random() * (container.clientHeight - iconSize),
    vx: (Math.random() < 0.5 ? -1 : 1) * 2,
    vy: (Math.random() < 0.5 ? -1 : 1) * 2,
  }));

  const animate = () => {
    const maxX = container.clientWidth - iconSize;
    const maxY = container.clientHeight - iconSize;

    itemsRef.current.forEach((item) => {
      if (!entering) {
        const cx = item.x + iconSize / 2;
        const cy = item.y + iconSize / 2;

        const dx = cx - mouseRef.current.x;
        const dy = cy - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150 && dist > 0) {
          const force = (150 - dist) / 150;
          item.vx += (dx / dist) * force * 0.8;
          item.vy += (dy / dist) * force * 0.8;
        }

        item.vx = Math.max(-3, Math.min(3, item.vx));
        item.vy = Math.max(-3, Math.min(3, item.vy));
      }

      item.x += item.vx;
      item.y += item.vy;

      if (item.x <= 0 || item.x >= maxX) item.vx *= -1;
      if (item.y <= 0 || item.y >= maxY) item.vy *= -1;

      item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    cancelAnimationFrame(animationRef.current);
    container.removeEventListener("mousemove", handleMouseMove);
  };
}, [iconSize]);

  const handleEnter = () => {
    setEntering(true);
    cancelAnimationFrame(animationRef.current);

    const container = containerRef.current;
    const targetX = 20;
    const targetY = container.clientHeight - iconSize - 20;

    let finished = 0;

    itemsRef.current.forEach((item) => {
      const moveToCart = () => {
        const dx = targetX - item.x;
        const dy = targetY - item.y;

        item.x += dx * 0.08;
        item.y += dy * 0.08;

        item.el.style.transform = `translate(${item.x}px, ${item.y}px)`;

        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
          item.el.style.opacity = 0;
          finished++;
          if (finished === itemsRef.current.length) {
            setTimeout(onEnter, 500);
          }
          return;
        }

        requestAnimationFrame(moveToCart);
      };

      moveToCart();
    });
  };

  return (
    <div className="presentation-container" ref={containerRef}>
      <div className="presentation-center">
        <h1 className="presentation-title">
          Aquí encontrarás el maquillaje ideal para cualquier ocasión
        </h1>

        <button
          className="presentation-button"
          onClick={handleEnter}
          disabled={entering}
        >
          Ingresá y sorprendete
        </button>
      </div>

      {icons.map((src, i) => (
        <img
          key={i}
          src={src}
          ref={(el) => (iconsRef.current[i] = el)}
          className="icon"
          alt="icon"
        />
      ))}

      {entering && (
        <img
          src="/icons/Makeup.png"
          className="cart-icon"
          alt="cart"
        />
      )}
    </div>
  );
};

export default Presentation;
