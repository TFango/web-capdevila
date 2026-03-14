import styles from "./Cta.module.css";

export default function Cta() {
  const phone = "5492236000000";
  const message = encodeURIComponent(
    "Hola, quiero pedir un presupuesto sin cargo.",
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className={styles.cta}>
      <div className={styles.bgText} aria-hidden>
        CAPDEVILA
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.cartel}>Contacto</span>
          <h2 className={styles.title}>
            Escribime para armar un presupuesto
          </h2>
          <p className={styles.subtitle}>
            La visita no te cuesta nada. Respondo hoy.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.dot} />
            <span>Presupuesto sin cargo</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.dot} />
            <span>Voy hasta tu lugar</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.dot} />
            <span>Respuesta el mismo día</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
