"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Differentions.module.css";

const cards = [
  {
    title: "20 años de experiencia",
    description:
      "Trayectoria impecable en los trabajos más exigentes de la industria naval e industrial de la zona.",
    icon: "/images/logos/experience.svg",
  },
  {
    title: "Forma de trabajo",
    description: "Trabajo preciso, seguro y adaptado a cada necesidad.",
    icon: "/images/logos/time.svg",
  },
  {
    title: "Soy soldador certificado en MMA, MIG y TIG",
    description:
      "Certificación oficial. Trabajo con los estándares que exige la industria.",
    icon: "/images/logos/license.svg",
  },
  {
    title: "Todo tipo de soluciones",
    description:
      "Brindo soluciones de soldadura para industrias, construccion y sector naval.",
    icon: "/images/logos/services.svg",
  },
];

export default function Differentions() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goTo = (index: number) => {
    stopAutoPlay();
    setCurrent(index);
    startAutoPlay();
  };

  return (
    <section className={styles.differentions}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.poster}>Por qué trabajar conmigo</span>
          <h2 className={styles.title}>Lo que me diferencia</h2>
        </div>

        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardInner}>
                <div className={styles.top}>
                  <img src={card.icon} alt="" className={styles.icon} />
                  <div className={styles.redLine} />
                </div>
                <p className={styles.titleCard}>{card.title}</p>
                <p className={styles.descriptionCard}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {cards.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
