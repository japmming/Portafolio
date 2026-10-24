import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLucideIcon, Heart, MessageCircle, Send, X, FaGithub } from "../icons";
import Avatar from "./Avatar";
import { profileData } from "../data/data";
import styles from "./Modal.module.css";

// Rango de aspecto tipo Instagram: vertical 4:5 a horizontal 1.91:1
const MIN_MEDIA_RATIO = 4 / 5;
const MAX_MEDIA_RATIO = 1.91;

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden:  { opacity: 0, scale: 0.88, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 280 } },
  exit:    { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

export default function Modal({ project, onClose }) {
  const modalRef = useRef(null);
  const [mediaRatio, setMediaRatio] = useState(null);
  const [imgState, setImgState] = useState(project.imgSrc ? "loading" : "fallback");

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    const previousActive = document.activeElement;
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      previousActive?.focus?.();
    };
  }, [onClose]);

  const handleImgLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      const ratio = naturalWidth / naturalHeight;
      setMediaRatio(Math.min(Math.max(ratio, MIN_MEDIA_RATIO), MAX_MEDIA_RATIO));
    }
    setImgState("loaded");
  };

  const showImage = imgState !== "fallback";
  const LucideIcon = getLucideIcon(project.lucideIcon);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          className={styles.modal}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles del proyecto ${project.title}`}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image side */}
          <div
            className={`${styles.imgSide} ${showImage ? styles.imgSideMedia : styles.imgSideFallback}`}
            style={{
              ...(showImage ? {} : { background: project.gradient }),
              ...(mediaRatio ? { "--media-ratio": mediaRatio } : {}),
            }}
          >
            {showImage ? (
              <>
                {imgState === "loading" && (
                  <span className={styles.imgSkeleton} aria-hidden="true" />
                )}
                <motion.div
                  className={styles.imgFrame}
                  initial={{ scale: 0.94, rotate: -8, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 16 }}
                >
                  <img
                    src={project.imgSrc}
                    alt={`Captura de pantalla del proyecto ${project.title}`}
                    className={`${styles.projectImg} ${
                      imgState === "loaded" ? styles.projectImgLoaded : ""
                    }`}
                    onLoad={handleImgLoad}
                    onError={() => setImgState("fallback")}
                    decoding="async"
                    draggable={false}
                  />
                </motion.div>
              </>
            ) : (
              <motion.div
                className={styles.iconFallback}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring", damping: 14 }}
              >
                <LucideIcon
                  size={90}
                  strokeWidth={1.2}
                  color="rgba(255,255,255,0.92)"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.25))" }}
                />
              </motion.div>
            )}
          </div>

          {/* Info side */}
          <div className={styles.info}>
            <div className={styles.infoInner}>
              <div className={styles.modalHeader}>
                <div className={styles.modalAvatar}>
                  <Avatar
                    src="/perfil-portfolio.webp"
                    className={styles.modalAvatarImg}
                    emojiClassName={styles.modalAvatarEmoji}
                  />
                </div>
                <div>
                  <p className={styles.modalUsername}>{profileData.username}</p>
                  <p className={styles.modalStack}>{project.stack}</p>
                </div>
                <motion.button
                  className={styles.closeBtn}
                  onClick={onClose}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} strokeWidth={2.5} />
                </motion.button>
              </div>

              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className={styles.title}>{project.title}</h2>
                {(project.desc || project.issuer) && (
                  <p className={styles.desc}>
                    {project.desc || [project.issuer, project.date].filter(Boolean).join(" | ")}
                  </p>
                )}
                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <div className={styles.tagRow}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.tag}>#{t}</span>
                    ))}
                  </div>
                )}
              </motion.div>

              {project.likes != null && (
                <div className={styles.actions}>
                  {[
                    { Icon: Heart,         label: project.likes,    fill: true,  link: false },
                    { Icon: MessageCircle, label: project.comments, fill: false, link: false },
                    { Icon: Send,          label: null,             fill: false, link: !!project.link },
                  ].map(({ Icon, label, fill, link }, i) => {
                  const Action = link ? motion.a : motion.button;
                  const actionProps = link
                    ? {
                        href: project.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `Visitar sitio de ${project.title}`,
                      }
                    : { type: "button", "aria-label": Icon === Heart ? "Me gusta" : "Comentarios" };

                  return (
                    <Action
                      key={i}
                      {...actionProps}
                      className={styles.actionBtn}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      whileHover={{ scale: 1.22 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        color="var(--text)"
                        fill={fill ? "#ef4444" : "none"}
                        style={fill ? { color: "#ef4444" } : {}}
                        aria-hidden="true"
                      />
                      {label && <span className={styles.actionCount}>{label}</span>}
                    </Action>
                  );
                })}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código en GitHub de ${project.title}`}
                    style={{ marginLeft: "auto" }}
                  >
                    <motion.button
                      className={styles.actionBtn}
                      whileHover={{ scale: 1.22 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={24} strokeWidth={1.8} color="var(--text)" />
                    </motion.button>
                  </a>
                )}
              </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
