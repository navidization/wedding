import { motion } from "framer-motion";
// import flowerImage from "../../assets/images/flower.png";
import flowerImage from "../../assets/images/orchids.png";
import twineImage from "../../assets/images/jutetwine.png";
import WaxSeal from "../WaxSeal/WaxSeal";
import styles from "./Wrap.module.scss";

type WrapProps = {
  isOpen: boolean;
  reducedMotion: boolean;
};

export default function Wrap({ isOpen, reducedMotion }: WrapProps) {
  const panelDuration = reducedMotion ? 0 : 1.08;
  const softEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div className={styles.wrapLayer} aria-hidden="true">
      <motion.div
        className={styles.greenPanel}
        initial={false}
        animate={
          isOpen || reducedMotion
            ? { x: "-118%", rotate: -1.8, y: -2 }
            : { x: "0%", rotate: 0, y: 0 }
        }
        transition={{
          duration: panelDuration,
          ease: softEase,
          delay: reducedMotion ? 0 : 1.88,
        }}
      >
        <div className={styles.paperGrain} />
        <motion.img
          className={styles.flowerStem}
          src={flowerImage}
          alt=""
          draggable="false"
          initial={false}
          animate={
            isOpen || reducedMotion
              ? { rotate: -3.5, x: -5, y: -2 }
              : { rotate: 0, x: 0, y: 0 }
          }
          transition={{
            duration: reducedMotion ? 0 : 1.08,
            ease: softEase,
            delay: reducedMotion ? 0 : isOpen ? 1.88 : 0,
          }}
        />
      </motion.div>

      <motion.div
        className={styles.twine}
        initial={false}
        animate={
          isOpen || reducedMotion
            ? { x: "86%", y: 10, opacity: 0, rotate: 2.6, scaleX: 1.03 }
            : { x: "0%", y: 0, opacity: 1, rotate: 0, scaleX: 1 }
        }
        transition={{
          duration: reducedMotion ? 0 : 1.12,
          ease: softEase,
          delay: reducedMotion ? 0 : 1.58,
        }}
      >
        <img src={twineImage} alt="" draggable="false" />
      </motion.div>

      <WaxSeal isOpen={isOpen} reducedMotion={reducedMotion} />
    </div>
  );
}
