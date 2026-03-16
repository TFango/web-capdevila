"use client";

import styles from "./Services.module.css";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Naval",
    description:
      "Trabajo con los estándares que exige la industria. Reparación y montaje en embarcaciones.",
    items: ["Reparación y Soldadura Naval", "Reparación de Portones de Pesca"],
    img: "/images/serviceOne.jpeg",
  },
  {
    title: "Residencial",
    description:
      "Mismo nivel de exigencia para tu hogar. Sin importar el tamaño.",
    items: ["Soldadura en general", "Portones y Rejas a medida"],
    img: "/images/serviceTwo.jpeg",
  },
  {
    title: "Industrial",
    description:
      "Trabajo con maquinaria pesada, estructuras y reparaciones de plantas.",
    items: ["Mobiliario industrial", "Reparaciones y Refuerzos de Estructuras"],
    img: "/images/serviceThree.jpg",
  },
];

export default function Services() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.75 + 8;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    setCurrent(index);
  };

  const prev = () => scrollTo(Math.max(current - 1, 0));
  const next = () => scrollTo(Math.min(current + 1, services.length - 1));

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span className={styles.cartel}>Servicios</span>
            <h2 className={styles.title}>Donde trabajo</h2>
          </div>
          <div className={styles.arrows}>
            <button
              className={`${styles.arrow} ${current === 0 ? styles.arrowDisabled : ""}`}
              onClick={prev}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className={`${styles.arrow} ${current === services.length - 1 ? styles.arrowDisabled : ""}`}
              onClick={next}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div className={styles.cards} ref={scrollRef}>
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={styles.card}
              style={{
                backgroundImage: `url(${service.img})`,
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className={styles.overlay} />
              <div className={styles.infoCard}>
                <p className={styles.titleCard}>{service.title}</p>
                <p className={styles.descriptionCard}>{service.description}</p>
                <div className={styles.divider} />
                <ul className={styles.list}>
                  {service.items.map((item, j) => (
                    <li key={j} className={styles.listItem}>
                      <span className={styles.listDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {services.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir a ${services[i].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
