import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/data";
import { ArrowLeft, CalendarDays, Clock, Tag } from "../icons";
import styles from "./Blog.module.css";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const viewVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

export default function Blog() {
  const [post, setPost] = useState(null);

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        {post ? (
          <motion.article
            key={post.id}
            className={styles.article}
            variants={viewVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button type="button" className={styles.backBtn} onClick={() => setPost(null)}>
              <ArrowLeft size={15} strokeWidth={2.2} aria-hidden="true" />
              Volver al blog
            </button>

            <header className={styles.articleHeader}>
              <span className={styles.category}>{post.category}</span>
              <h2 className={styles.articleTitle}>{post.title}</h2>
              <div className={styles.articleMeta}>
                <span>
                  <CalendarDays size={13} strokeWidth={2} aria-hidden="true" />
                  {post.date}
                </span>
                <span>
                  <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  {post.readTime} min de lectura
                </span>
              </div>
            </header>

            <div className={styles.articleBody}>
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.articleTags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  <Tag size={11} strokeWidth={2} aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ) : (
          <motion.div
            key="list"
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {blogPosts.map((item) => (
              <motion.article
                key={item.id}
                className={styles.card}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                onClick={() => setPost(item)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.cardDate}>{item.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>
                    <Clock size={13} strokeWidth={2} aria-hidden="true" />
                    {item.readTime} min
                  </span>
                  <button type="button" className={styles.readMore} onClick={() => setPost(item)}>
                    Leer artículo →
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}