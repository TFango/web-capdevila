import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.poster}>MMA - MIG - TIG</span>
          <h1 className={styles.title}>20 AÑOS DE SOLDADURA <span className={styles.titleRed}>CONSTANTE</span></h1>
          <p className={styles.subtitle}>
            Soldadura profesional Naval, industrial y domestica en Mar del Plata
          </p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            Pedir presupuesto gratis
          </button>
          <button className={styles.secondaryBtn}>Ver servicios</button>
        </div>
      </div>
    </section>
  );
}
