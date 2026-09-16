import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/data";
import { getLucideIcon, Heart, MessageCircle, LayoutGrid, Briefcase, BookOpen } from "../icons";
import Experience from "./Experience";
import Blog from "./Blog";
import styles from "./FeedGrid.module.css";

const Modal = lazy(() => import("./Modal"));

const TABS = [
  { label: "Proyectos",   Icon: LayoutGrid  },
  { label: "Experiencia", Icon: Briefcase   },
  { label: "Blog",        Icon: BookOpen    },
];

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function FeedGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div id="proyectos" className={styles.tabs}>
        {TABS.map(({ label, Icon }, i) => (
          <motion.button
            key={label}
            className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(i)}
            whileTap={{ scale: 0.96 }}
          >
            <Icon size={14} strokeWidth={2.2} aria-hidden="true" />
            <span className={styles.tabLabel}>{label}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === 0 && (
            <div className={styles.grid}>
              {projects.map((project, i) => (
                <FeedItem
                  key={project.title}
                  project={project}
                  index={i}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          )}

          {activeTab === 1 && <Experience />}

          {activeTab === 2 && <Blog />}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <Suspense fallback={null}>
            <Modal project={selected} onClose={() => setSelected(null)} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}

function FeedItem({ project, index, onClick }) {
  const LucideIcon = getLucideIcon(project.lucideIcon);

  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.4, ease: "easeOut" }}
      whileHover="hover"
      onClick={onClick}
    >
      <div className={styles.bg} style={{ background: project.gradient }}>
        <motion.div
          className={styles.iconWrap}
          variants={{ hover: { scale: 1.18, rotate: -6 } }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260 }}
        >
          <LucideIcon size={52} strokeWidth={1.4} color="rgba(255,255,255,0.92)" />
        </motion.div>
      </div>

      <motion.div
        className={styles.overlay}
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <p className={styles.overlayTitle}>{project.title}</p>
        <p className={styles.overlayStack}>{project.stack}</p>
        <div className={styles.overlayStats}>
          <span><Heart size={14} fill="white" color="white" aria-hidden="true" /> {project.likes}</span>
          <span><MessageCircle size={14} color="white" aria-hidden="true" /> {project.comments}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
