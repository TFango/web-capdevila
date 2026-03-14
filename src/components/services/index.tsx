"use client";

import styles from "./Services.module.css";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Naval",
    description:
      "Trabajo con los estándares que exige la industria. Reparación y montaje en embarcaciones.",
    img: "/images/serviceOne.jpeg",
  },
  {
    title: "Doméstica",
    description:
      "Mismo nivel de exigencia para tu hogar. Sin importar el tamaño.",
    img: "/images/serviceTwo.jpeg",
  },
  {
    title: "Industrial",
    description:
      "Trabajo con maquinaria pesada, estructuras y reparaciones de plantas.",
    img: "/images/serviceThree.jpg",
  },
];

export default function Services() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.cartel}>Servicios</span>
          <h2 className={styles.title}>Donde trabajo</h2>
        </div>

        <div className={styles.cards}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
