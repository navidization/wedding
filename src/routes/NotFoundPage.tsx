import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <section>
        <p>دعوت‌نامه پیدا نشد</p>
        <h1>به نظر می‌رسد لینک دعوت‌نامه درست نیست.</h1>
        <span>
          لطفاً لینک ارسال‌شده را دوباره بررسی کنید یا با میزبان مراسم در تماس
          باشید.
        </span>
        <Link to="/invite/guest-001">مشاهده نمونه دعوت‌نامه</Link>
      </section>
    </main>
  );
}
