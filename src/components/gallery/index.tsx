import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>

        <div className={styles.info}>
          <span className={styles.cartel}>Mis laburos</span>
          <h2 className={styles.title}>Galería de fotos</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.row}>
            <div className={styles.imgWrapper}>
              <img src="/images/galerry/galerry1.png" alt="Trabajo 1" className={styles.img} />
            </div>
            <div className={styles.imgWrapper}>
              <img src="/images/galerry/galerry2.png" alt="Trabajo 2" className={styles.img} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.imgWrapper}>
              <img src="/images/galerry/galerry3.png" alt="Trabajo 3" className={styles.img} />
            </div>
            <div className={styles.imgWrapper}>
              <img src="/images/galerry/galerry4.png" alt="Trabajo 4" className={styles.img} />
            </div>
          </div>

          <div className={styles.imgWrapperFull}>
            <img src="/images/galerry/galerry5.png" alt="Trabajo 5" className={styles.img} />
          </div>
        </div>

      </div>
    </section>
  );
}