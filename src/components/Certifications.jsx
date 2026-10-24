import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/data";
import styles from "./Certifications.module.css";

const Modal = lazy(() => import("./Modal"));

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: (i % 3) * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  if (!certifications || certifications.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Aún no hay certificaciones</p>
        <p className={styles.emptyText}>
          Sube las imágenes de tus diplomas/cursos a <code>public/certifications/</code> y añádelos a <code>certifications</code> en <code>src/data/data.js</code>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {certifications.map((cert, i) => (
          <motion.button
            key={cert.id || cert.title}
            type="button"
            className={styles.item}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover="hover"
            onClick={() => setSelected({ ...cert, gradient: cert.gradient || "linear-gradient(135deg,#667eea,#764ba2)" })}
            aria-label={`Ver certificado ${cert.title}`}
          >
            <div className={styles.thumbWrap}>
              {cert.imgSrc ? (
                <motion.img
                  src={cert.imgSrc}
                  alt={`Diploma o certificado ${cert.title}`}
                  className={styles.thumb}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  variants={{ hover: { scale: 1.04 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderInitials}>{cert.title?.slice(0, 2).toUpperCase()}</span>
                </div>
              )}
            </div>
            <div className={styles.meta}>
              <p className={styles.certTitle}>{cert.title}</p>
              <p className={styles.certMeta}>
                {cert.issuer}
                {cert.date ? ` · ${cert.date}` : ""}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {selected && (
        <Suspense fallback={null}>
          <Modal project={selected} onClose={() => setSelected(null)} />
        </Suspense>
      )}
    </>
  );
}
