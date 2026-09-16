import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send } from "../icons";
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

export default function Contact() {
  const [sent, setSent] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("asunto") || "Contacto desde tu portfolio"));
    const body = encodeURIComponent(
      `Nombre: ${data.get("nombre") || ""}\nEmail: ${data.get("email") || ""}\n\n${data.get("mensaje") || ""}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSent(true);
    e.currentTarget.reset();
    timeoutRef.current = setTimeout(() => setSent(false), 3000);
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

        <motion.button
          type="submit"
          className={`${styles.sendBtn} ${sent ? styles.sent : ""}`}
          whileHover={!sent ? { scale: 1.03 } : {}}
          whileTap={!sent ? { scale: 0.97 } : {}}
          animate={sent ? { backgroundColor: "#22c55e" } : {}}
        >
          <Send size={16} strokeWidth={2} aria-hidden="true" />
          {sent ? "¡Enviado!" : "Enviar mensaje"}
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