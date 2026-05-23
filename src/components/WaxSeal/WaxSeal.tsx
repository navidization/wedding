import { motion, Variants } from "framer-motion";
import sealImage from "../../assets/images/seal.png";
import styles from "./WaxSeal.module.scss";

type WaxSealProps = {
  isOpen: boolean;
  reducedMotion: boolean;
};

const sealVariants: Variants = {
  closed: {
    opacity: 1,
    scale: 1,
    rotate: -2,
    y: 0,
  },
  opening: {
    opacity: [1, 1, 1, 0],
    scale: [1, 1.035, 1.01, 0.86],
    rotate: [-2, -4.5, -2.5, 7],
    y: [0, -2, -5, -24],
    transition: {
      delay: 0.72,
      duration: 1.12,
      ease: [0.22, 1, 0.36, 1],
      times: [0, 0.34, 0.64, 1],
    },
  },
  reduced: {
    opacity: 0,
    scale: 0.88,
    y: -16,
  },
};

export default function WaxSeal({ isOpen, reducedMotion }: WaxSealProps) {
  return (
    <motion.div
      className={styles.seal}
      aria-hidden="true"
      variants={sealVariants}
      initial="closed"
      animate={reducedMotion ? "reduced" : isOpen ? "opening" : "closed"}
    >
      <img src={sealImage} alt="" draggable="false" />
    </motion.div>
  );
}
