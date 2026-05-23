import styles from "./LoadingScreen.module.scss";

export default function LoadingScreen() {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <span />
      در حال آماده‌سازی دعوت‌نامه
    </div>
  );
}
