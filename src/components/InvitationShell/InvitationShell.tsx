import { useEffect, useRef, useState } from "react";
import weddingMusic from "../../assets/audio/wedding-music.mp3";
import { Guest } from "../../data/guests";
import { animationTiming } from "../../data/wedding";
import { usePageReady } from "../../hooks/usePageReady";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import ActionButtons from "../ActionButtons/ActionButtons";
import Envelope from "../Envelope/Envelope";
import InvitationCard from "../InvitationCard/InvitationCard";
import Wrap from "../Wrap/Wrap";
import styles from "./InvitationShell.module.scss";

type InvitationShellProps = {
  guest: Guest;
};

export default function InvitationShell({ guest }: InvitationShellProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const reducedMotion = useReducedMotionPreference();
  const isReady = usePageReady(shellRef, { disabled: reducedMotion });
  const isOpen = reducedMotion || hasOpened;
  const canOpen = isReady && !isOpen;

  useEffect(() => {
    if (reducedMotion) {
      setHasOpened(true);
    }
  }, [reducedMotion]);

  const handleOpenInvitation = async () => {
    if (!canOpen) return;

    setHasOpened(true);

    try {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        await audio.play();
      }
    } catch {
      // The placeholder file is empty for now; replace it with real music later.
    }
  };

  return (
    <main className={styles.page}>
      <section
        className={styles.stage}
        ref={shellRef}
        style={{ "--initial-delay": `${animationTiming.initialDelay}s` } as React.CSSProperties}
        aria-label="دعوت‌نامه عروسی نوید و مرضیه"
      >
        <button
          className={styles.invitationStack}
          type="button"
          onClick={handleOpenInvitation}
          disabled={!canOpen}
          aria-label={canOpen ? "باز کردن دعوت‌نامه" : "دعوت‌نامه باز شده است"}
        >
          <InvitationCard ref={cardRef} guest={guest} isOpen={isOpen} reducedMotion={reducedMotion} />
          <Envelope isOpen={isOpen} reducedMotion={reducedMotion} />
          <Wrap isOpen={isOpen} reducedMotion={reducedMotion} />
          {canOpen && (
            <span
              className={styles.openHint}

            >
              <span aria-hidden="true">⌁</span>
              برای باز کردن لمس کنید
            </span>
          )}
        </button>
      </section>
      <audio ref={audioRef} src={weddingMusic} preload="auto" loop />
      <ActionButtons cardRef={cardRef} />

    </main>
  );
}
