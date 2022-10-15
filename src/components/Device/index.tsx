import styles from "./styles.module.scss";

export const Device = () => {
  return (
    <section className={styles.device}>
      <div>
        <img src={"/images/android-frame.png"} />
        <main>
          <div className={styles.appsContainer}></div>
        </main>
      </div>
    </section>
  );
};
