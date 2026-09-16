import { motion } from "framer-motion";
import { skills } from "../data/data";
import { getBrandIcon } from "../icons";
import styles from "./Skills.module.css";

function SkillIcon({ iconLib, icon, color, size = 28 }) {
  const IconComponent = getBrandIcon(iconLib, icon);
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} />;
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      {skills.map((skill, i) => (
        <motion.div
          key={skill.label}
          className={styles.item}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.07, duration: 0.4, ease: "backOut" }}
        >
          <motion.div
            className={styles.circle}
            style={{ "--skill-color": skill.color }}
            whileHover={{ scale: 1.14, rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.3 }}
          >
            <SkillIcon {...skill} />
          </motion.div>
          <span className={styles.label}>{skill.label}</span>
        </motion.div>
      ))}
    </section>
  );
}
