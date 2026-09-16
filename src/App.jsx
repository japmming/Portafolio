import "./index.css";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Skills from "./components/Skills";
import FeedGrid from "./components/FeedGrid";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { profileData } from "./data/data";

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <Navbar />

      <main className="main">
        <ProfileHeader />
        <Skills />
        <FeedGrid />
        <Contact />
      </main>

      <motion.footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 20px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--muted)",
          letterSpacing: ".5px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {year} @{profileData.username} · Hecho con ❤️ y mucho ☕
      </motion.footer>
    </div>
  );
}

export default App;
