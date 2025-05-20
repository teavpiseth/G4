import styles from "./page.module.css";

export default function SmartphoneLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.mainHeading}>LOSE YOURSELF IN ENTERTAINMENT</h1>
        <p className={styles.subHeading}>SPEND LESS ENJOY MORE</p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <div className={styles.featureNumber}>1</div>
          <h2 className={styles.featureTitle}>TRIPLE CAMERA</h2>
          <p className={styles.featureDescription}>
            Duis at tellus at urna condimentum mattis pellentesque id nibh. Elit
            scelerisque mauris pellentesque pulvinar. Nunc aliquet bibendum enim
            facilisis gravida.
          </p>
          <button className={styles.viewMoreButton}>View More</button>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureNumber}>2</div>
          <h2 className={styles.featureTitle}>ULTRA GAME MODE</h2>
          <p className={styles.featureDescription}>
            Urna et pharetra pharetra massa massa ultricies mi. Scelerisque
            varius morbi enim nunc faucibus a pellentesque. Purus sit amet
            volutpat consequat mauris.
          </p>
          <button className={styles.viewMoreButton}>View More</button>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureNumber}>3</div>
          <h2 className={styles.featureTitle}>SUPER AMOLED DISPLAY</h2>
          <p className={styles.featureDescription}>
            Urna neque viverra justo nec ultrices dui sapien eget mi. Sed
            elementum tempus egestas sed sed risus pretium quam vulputate. Neque
            sodales ut etiam.
          </p>
          <button className={styles.viewMoreButton}>View More</button>
        </div>
      </div>
    </div>
  );
}
