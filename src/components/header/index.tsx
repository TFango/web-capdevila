import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/images/logos/logo.svg"
          alt="Capdevila Soldadura"
          width={120}
          height={40}
          className={styles.logo}
        />
        <button className={styles.btn} aria-label="Abrir menú">
          <Image
            src="/images/logos/menu.svg"
            alt=""
            width={24}
            height={24}
            className={styles.menu}
          />
        </button>
      </div>
    </header>
  );
}
