import { motion } from "framer-motion";
import { profileData } from "../data/data";
import Avatar from "./Avatar";
import {
  Download, UserCheck, Link2,
  FolderKanban, Clock, Star,
  Rocket, Lightbulb, Globe2,
} from "../icons";
import styles from "./ProfileHeader.module.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const bioIcons = [Rocket, Lightbulb, Globe2];

const statConfig = [
  { key: "projects",    label: "proyectos",   Icon: FolderKanban },
  { key: "experience",  label: "años exp.",   Icon: Clock },
  { key: "satisfaction",label: "satisfacción",Icon: Star },
];

export default function ProfileHeader() {
  const { username, fullName, title, bio, tags, link, stats } = profileData;

  return (
    <motion.section
      className={styles.header}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Avatar */}
      <motion.div className={styles.avatarWrap} variants={itemVariants}>
        <motion.div
          className={styles.avatarRing}
          whileHover={{ scale: 1.05, rotate: 4 }}
          transition={{ type: "spring", stiffness: 260 }}
        >
          <div className={styles.avatarInner}>
            <Avatar
              src="/programmer-3d.webp"
              className={styles.avatarImg}
              emojiClassName={styles.avatarEmoji}
            />
          </div>
        </motion.div>
        <motion.div
          className={styles.onlineDot}
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
      </motion.div>

      {/* Username + acciones */}
      <motion.div className={styles.head} variants={itemVariants}>
        <span className={styles.username}>{username}</span>
        <div className={styles.actions}>
          <a href="#contacto" className={styles.btnLink}>
            <motion.button
              className={styles.btnPrimary}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <UserCheck size={15} strokeWidth={2.2} aria-hidden="true" />
              Contrátame
            </motion.button>
          </a>
          <a href="/CV__JOSE%20ABEL%20PEREZ%20MARCHENA_2026.pdf" download>
            <motion.button
              className={styles.btnSecondary}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} strokeWidth={2.2} aria-hidden="true" />
              Descargar CV
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div className={styles.stats} variants={itemVariants}>
        {statConfig.map(({ key, label, Icon }) => (
          <div key={key} className={styles.stat}>
            <Icon size={15} strokeWidth={2} className={styles.statIcon} aria-hidden="true" />
            <span className={styles.statNumber}>{stats[key]}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.div className={styles.bio} variants={itemVariants}>
        <p className={styles.fullName}>{fullName} ✨</p>
        <p className={styles.title}>{title}</p>
        {bio.map((line, i) => {
          const Icon = bioIcons[i];
          return (
            <p key={i} className={styles.bioLine}>
              <Icon size={14} strokeWidth={2.2} className={styles.bioIcon} aria-hidden="true" />
              {line}
            </p>
          );
        })}
        <p className={styles.tags}>{tags.join("  ")}</p>
        <a href="#contacto" className={styles.profileLink}>
          <Link2 size={13} strokeWidth={2.5} aria-hidden="true" />
          {link}
        </a>
      </motion.div>
    </motion.section>
  );
}