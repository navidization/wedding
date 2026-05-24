import { Download, MapPin } from "lucide-react";
import { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
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
    try {
      setStatus("در حال آماده‌سازی تصویر...");
      await exportElementAsPng(cardRef.current, "navid-marzieh-invitation.png");
      setStatus("کارت ذخیره شد.");
    } catch {
      setStatus("ذخیره تصویر انجام نشد.");
    }
  };

  return (
    <section className={styles.actions} aria-label="اقدام‌های دعوت‌نامه">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleSave}
        aria-label="ذخیره کارت به صورت تصویر"
      >
        <Download aria-hidden="true" />
        ذخیره کارت
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => openExternalUrl(wedding.mapUrl)}
        aria-label="مشاهده مسیر روی نقشه"
      >
        <MapPin aria-hidden="true" />
        مشاهده مسیر
      </Button>

      <p className={styles.status} role="status" aria-live="polite">
        {status}
      </p>
    </section>
  );
}
