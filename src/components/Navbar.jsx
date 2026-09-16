import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Mail, Moon, Sun } from "../icons";
import { profileData } from "../data/data";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Proyectos", href: "#proyectos", Icon: LayoutGrid },
  { label: "Contacto",  href: "#contacto",  Icon: Mail },
];

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function Navbar() {
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = dark;
    try {
      localStorage.setItem("theme", dark);
    } catch (e) {}
  }, [dark]);

  useEffect(() => {
    const toggle = (e) => {
      setDark(e.matches ? "dark" : "light");
    };
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    mq?.addEventListener?.("change", toggle);
    return () => mq?.removeEventListener?.("change", toggle);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const themeButtonLabel = dark === "dark" ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className={styles.logo}>@{profileData.username}</span>
      <div className={styles.links}>
        {navLinks.map(({ label, href, Icon }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            className={`${styles.link} ${active === href ? styles.linkActive : ""}`}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon size={15} strokeWidth={2} aria-hidden="true" />
            <span className={styles.linkLabel}>{label}</span>
          </motion.a>
        ))}
        <motion.button
          type="button"
          className={styles.themeBtn}
          onClick={() => setDark((prev) => (prev === "dark" ? "light" : "dark"))}
          aria-label={themeButtonLabel}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
        >
          {dark === "dark" ? (
            <Sun size={17} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Moon size={17} strokeWidth={2} aria-hidden="true" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}