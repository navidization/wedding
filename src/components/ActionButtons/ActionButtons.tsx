import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import invitationDownload from "../../assets/images/jutetwine.png";
import { wedding } from "../../data/wedding";
import { openExternalUrl } from "../../utils/maps";
import styles from "./ActionButtons.module.scss";

export default function ActionButtons() {
  const handleSave = () => {
    const link = document.createElement("a");
    link.href = invitationDownload;
    link.download = "navid-marzieh-invitation.png";
    link.click();
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
    </section>
  );
}
