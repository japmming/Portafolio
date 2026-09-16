import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Loader2 } from "../icons";
import { socialIconMap } from "../icons";
import { profileData } from "../data/data";
import styles from "./Contact.module.css";

const fields = [
  { name: "nombre", placeholder: "Tu nombre", type: "text", required: true, autoComplete: "name" },
  { name: "email", placeholder: "Tu email", type: "email", required: true, autoComplete: "email" },
  { name: "asunto", placeholder: "Asunto", type: "text" },
];

const socials = profileData.socials
  .map(({ icon, ...rest }) => ({ ...rest, Icon: socialIconMap[icon] }))
  .filter((s) => s.Icon && s.href);

const fieldVariants = {
  hidden:   { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const formId = process.env.REACT_APP_FORMSPREE_ID;
const hasForm = Boolean(formId);
const FORM_ENDPOINT = hasForm ? `https://formspree.io/f/${formId}` : null;

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const resetStatus = () => {
    timeoutRef.current = setTimeout(() => setStatus("idle"), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (hasForm) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus("sent");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      const subject = encodeURIComponent(String(data.asunto || "Contacto desde tu portfolio"));
      const body = encodeURIComponent(
        `Nombre: ${data.nombre || ""}\nEmail: ${data.email || ""}\n\n${data.mensaje || ""}`
      );
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
    }

    resetStatus();
  };

  return (
    <motion.section
      id="contacto"
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className={styles.titleRow}>
        <MessageSquare size={28} strokeWidth={1.8} color="var(--accent)" aria-hidden="true" />
        <h2 className={styles.title}>Hablemos</h2>
      </div>
      <p className={styles.subtitle}>
        ¿Tienes un proyecto en mente? Escríbeme y lo hacemos realidad.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <motion.input
          type="text"
          name="_gotcha"
          className={styles.honeypot}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {fields.map((field, i) => (
          <motion.input
            key={field.name}
            {...field}
            aria-label={field.placeholder}
            className={styles.input}
            custom={i}
            variants={fieldVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileFocus={{ borderColor: "var(--accent)", scale: 1.01 }}
          />
        ))}

        <motion.textarea
          name="mensaje"
          className={styles.textarea}
          placeholder="Cuéntame sobre tu proyecto..."
          aria-label="Cuéntame sobre tu proyecto"
          required
          custom={3}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileFocus={{ borderColor: "var(--accent)", scale: 1.01 }}
        />

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              className={styles.errorMsg}
              role="alert"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Ups, no se pudo enviar. Inténtalo de nuevo o contáctame en {profileData.email}.
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          className={`${styles.sendBtn} ${status === "sent" ? styles.sent : ""} ${
            status === "error" ? styles.errorBtn : ""
          }`}
          disabled={status === "sending"}
          whileHover={status === "idle" ? { scale: 1.03 } : {}}
          whileTap={status === "idle" ? { scale: 0.97 } : {}}
          animate={
            status === "sent"
              ? { backgroundColor: "#22c55e" }
              : status === "error"
              ? { backgroundColor: "#ef4444" }
              : {}
          }
          aria-live="polite"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} strokeWidth={2} className={styles.spin} aria-hidden="true" />
              Enviando…
            </>
          ) : status === "sent" ? (
            <>
              <Send size={16} strokeWidth={2} aria-hidden="true" />
              ¡Enviado!
            </>
          ) : (
            <>
              <Send size={16} strokeWidth={2} aria-hidden="true" />
              Enviar mensaje
            </>
          )}
        </motion.button>
      </form>

      <div className={styles.socials}>
        {socials.map(({ label, Icon, href, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialPill}
            style={{ "--social-color": color }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.07 }}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}