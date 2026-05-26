import { motion, Variants } from "framer-motion";
import { forwardRef } from "react";
import flImage from "../../assets/images/f2.png";
import heartImage from "../../assets/images/heart.png";
import { Guest } from "../../data/guests";
import { animationTiming, wedding } from "../../data/wedding";
import styles from "./InvitationCard.module.scss";

type InvitationCardProps = {
  isOpen: boolean;
  reducedMotion: boolean;
};

const softEase = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.24 + index * animationTiming.contentStagger,
      duration: 0.58,
      ease: softEase,
    },
  }),
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = ["8", "9", "10", "11", "12", "13", "14"];

const InvitationCard = forwardRef<HTMLElement, InvitationCardProps>(
  ({ isOpen, reducedMotion }, ref) => {
    const opened = isOpen || reducedMotion;

    return (
      <motion.article
        ref={ref}
        className={styles.card}
        aria-label="کارت دعوت عروسی"
        initial={false}
        animate={
          opened
            ? { y: 0, scale: 1, opacity: 1 }
            : { y: 0, scale: 1, opacity: 1 }
        }
        transition={{
          duration: reducedMotion ? 0 : animationTiming.cardRevealDuration,
          delay: reducedMotion ? 0 : 2.68,
          ease: softEase,
        }}
      >
        {/* <div></div> */}

<<<<<<< Updated upstream
        <div
          className={styles.texture}
          aria-hidden="true" />
        <div
          className={styles.cornerArt}
          aria-hidden="true"
        >
          <img src={flImage} alt="" draggable="false" />
        </div>
=======
        <div className={styles.texture} aria-hidden="true" />
>>>>>>> Stashed changes

        <motion.div
          custom={0}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.heartLine}
        >
          <img src={heartImage} alt="" draggable="false" />
        </motion.div>

        <motion.p
          custom={1}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.month}
        >
          JUNE
        </motion.p>

        <motion.div
          custom={2}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.calendar}
          aria-label="June 11th 2026"
        >
          {days.map((day) => (
            <span key={day} className={styles.day}>
              {day}
            </span>
          ))}
          {dates.map((date) => (
            <span
              key={date}
              className={date === "11" ? styles.markedDate : styles.date}
            >
              {date}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={3}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.saveDate}
        >
          <span aria-hidden="true" />
          save the date
        </motion.div>

        <motion.p
          custom={4}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.forWedding}
        >
          FOR THE WEDDING OF
        </motion.p>
        <motion.div
          custom={5}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.names}
        >
          {" "}
          {wedding.coupleNames}
        </motion.div>

        <motion.div
          custom={6}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.englishDetails}
        >
          <p>{wedding.englishDateText}</p>
          <p>{wedding.englishTimeText}</p>
        </motion.div>
        <motion.div
          custom={6}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.englishDetails}
        >
          <p>{wedding.englishAddressText}</p>
          <p>(Lovers’ Garden)</p>
        </motion.div>

        <motion.div
          custom={7}
          variants={contentVariants}
          initial="hidden"
          animate={opened ? "visible" : "hidden"}
          className={styles.persianDetails}
        >
          <p>{wedding.persianDateText}</p>
          <p>{wedding.address}</p>
          <p>{wedding.venueName}</p>
        </motion.div>
      </motion.article>
    );
  },
);

export default InvitationCard;
