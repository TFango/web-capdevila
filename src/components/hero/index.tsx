import styles from "./Hero.module.css";

const phone = "5492236000000";
const message = encodeURIComponent(
  "Hola, quiero pedir un presupuesto sin cargo.",
);
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.poster}>MMA - MIG - TIG</span>
          <h1 className={styles.title}>
            20 AÑOS DE SOLDADURA{" "}
            <span className={styles.titleRed}>CONSTANTE</span>
          </h1>
          <p className={styles.subtitle}>
            Soldadura profesional Naval, industrial y domestica en Mar del Plata
          </p>
        </div>

        <div className={styles.buttons}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Pedir presupuesto gratis
          </a>
          <a href="#services" className={styles.secondaryBtn}>
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
