import { Hand, Music2, VolumeX } from "lucide-react";
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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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
        setIsMusicPlaying(true);
      }
    } catch {
      // The placeholder file is empty for now; replace it with real music later.
    }
  };

  const handleToggleMusic = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
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
            <span className={styles.openHint}>
              <Hand aria-hidden="true" size={16} strokeWidth={2} />
              برای باز کردن لمس کنید
            </span>
          )}
        </button>
      </section>
      <audio
        ref={audioRef}
        src={weddingMusic}
        preload="auto"
        loop
        muted={isMuted}
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />
      {isMusicPlaying && (
        <button
          className={`${styles.musicToggle} ${isMuted ? styles.musicToggleMuted : ""}`}
          type="button"
          onClick={handleToggleMusic}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          aria-pressed={isMuted}
        >
          {isMuted ? <VolumeX aria-hidden="true" size={18} /> : <Music2 aria-hidden="true" size={18} />}
        </button>
      )}
      <ActionButtons />

    </main>
  );
}
