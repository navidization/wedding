import { RefObject, useState } from "react";
import { wedding } from "../../data/wedding";
import { exportElementAsPng } from "../../utils/exportImage";
import { openExternalUrl } from "../../utils/maps";
import styles from "./ActionButtons.module.scss";

type ActionButtonsProps = {
  cardRef: RefObject<HTMLElement | null>;
};

export default function ActionButtons({ cardRef }: ActionButtonsProps) {
  const [status, setStatus] = useState("");

  const handleSave = async () => {
    if (!cardRef.current) return;
    setStatus("در حال آماده‌سازی تصویر...");
    await exportElementAsPng(cardRef.current, "navid-marzieh-invitation.png");
    setStatus("کارت ذخیره شد.");
  };


  return (
    <section className={styles.actions} aria-label="اقدام‌های دعوت‌نامه">
      <button type="button" onClick={handleSave} aria-label="ذخیره کارت به صورت تصویر">
        <span aria-hidden="true">↓</span>
        ذخیره کارت
      </button>
      <button type="button" onClick={() => openExternalUrl(wedding.mapUrl)} aria-label="مشاهده مسیر روی نقشه">
        <span aria-hidden="true">⌖</span>
        مشاهده مسیر
      </button>

      <p className={styles.status} role="status" aria-live="polite">
        {status}
      </p>
    </section>
  );
}
