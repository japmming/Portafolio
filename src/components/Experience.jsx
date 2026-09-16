import { motion } from "framer-motion";
import { experience } from "../data/data";
import { Building2, CalendarDays, MapPin } from "../icons";
import styles from "./Experience.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:   { opacity: 0, x: -32 },
  visible:  { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.timeline} />

      {experience.map((job, i) => (
        <motion.div key={job.role} className={styles.card} variants={cardVariants}>
          <motion.div
            className={`${styles.dot} ${job.current ? styles.dotActive : ""}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
          >
            {job.current && (
              <motion.div
                className={styles.dotPulse}
                animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </motion.div>

          <motion.div
            className={styles.cardInner}
            whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(0,0,0,0.09)" }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  <Building2 size={13} strokeWidth={2} className={styles.metaIcon} aria-hidden="true" />
                  {job.company}
                </p>
              </div>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <CalendarDays size={13} strokeWidth={2} className={styles.metaIcon} aria-hidden="true" />
                  {job.period}
                </span>
                <span className={styles.metaItem}>
                  <MapPin size={13} strokeWidth={2} className={styles.metaIcon} aria-hidden="true" />
                  {job.location}
                </span>
              </div>
            </div>

            <p className={styles.desc}>{job.desc}</p>

            <div className={styles.tags}>
              {job.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className={styles.tag}
                  whileHover={{ scale: 1.06 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
