import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            CAPDEVILA <span className={styles.logoRed}>SOLDADURA</span>
          </span>
          <p className={styles.tagline}>
            Soldadura naval, industrial y doméstica en Mar del Plata.
          </p>
        </div>

        <div className={styles.links}>
          <span className={styles.linksTitle}>Contacto</span>
          <a
            href="https://wa.me/5492236000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WhatsApp
          </a>
          <a href="tel:+5492236000000" className={styles.link}>
            Teléfono
          </a>
          <a
            href="mailto:contacto@capdevilasoldadura.com"
            className={styles.link}
          >
            Email
          </a>
        </div>

        <div className={styles.links}>
          <span className={styles.linksTitle}>Servicios</span>
          <span className={styles.linkPlain}>Naval</span>
          <span className={styles.linkPlain}>Industrial</span>
          <span className={styles.linkPlain}>Construcción</span>
          <span className={styles.linkPlain}>Residencial</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2026 Capdevila Soldadura — Todos los derechos reservados
        </p>

        <div className={styles.bottomRight}>
          <a
            href="https://instagram.com/capdevilasoldadura"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <img
              src="/images/logos/instagram.svg"
              alt="Instagram"
              className={styles.igIcon}
            />
            @capdevilasoldadura
          </a>
          <a
            href="https://www.certezza.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.made}
          >
            Diseñado por <span className={styles.madeRed}>Certezza</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
