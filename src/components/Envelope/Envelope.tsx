import { motion } from "framer-motion";
import { animationTiming } from "../../data/wedding";
import styles from "./Envelope.module.scss";

type EnvelopeProps = {
  isOpen: boolean;
  reducedMotion: boolean;
};

export default function Envelope({ isOpen, reducedMotion }: EnvelopeProps) {
  return (
    <div className={styles.envelope} aria-hidden="true">
      <div className={styles.backing} />
      <motion.div
        className={styles.flap}
        initial={false}
        animate={isOpen || reducedMotion ? { rotateX: -128, y: -8 } : { rotateX: 0, y: 0 }}
        transition={{
          duration: reducedMotion ? 0 : animationTiming.flapDuration,
          ease: [0.22, 1, 0.36, 1],
          delay: reducedMotion ? 0 : 2.18,
        }}
      />
      <div className={styles.leftPocket} />
      <div className={styles.rightPocket} />
      <div className={styles.bottomPocket} />
    </div>
  );
}
