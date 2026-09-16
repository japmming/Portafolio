// ─────────────────────────────────────────────
//  Lucide React icons (UI / acciones)
// ─────────────────────────────────────────────
export {
  LayoutGrid,
  Briefcase,
  Mail,
  Link2,
  Download,
  UserCheck,
  FolderKanban,
  Clock,
  Star,
  Rocket,
  Lightbulb,
  Globe2,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Tag,
  X,
  Building2,
  CalendarDays,
  MapPin,
  MessageSquare,
  Moon,
  Sun,
  ArrowLeft,
  Loader2,
} from "lucide-react";

//  Icono extra para el Blog (también se usa en el mapa de proyectos)
export { BookOpen } from "lucide-react";

// ─────────────────────────────────────────────
//  Iconos de proyecto (data.js usa nombres string)
//  Mapa estático → permite tree-shaking del bundle
// ─────────────────────────────────────────────
import {
  ShoppingCart,
  BarChart2,
  Bot,
  Smartphone,
  Palette,
  Home,
  BookOpen,
  Globe,
  Zap,
  Box,
  CalendarClock
} from "lucide-react";

const lucideIconMap = {
  ShoppingCart,
  BarChart2,
  Bot,
  Smartphone,
  Palette,
  Home,
  BookOpen,
  Globe,
  Zap,
  CalendarClock
};

export function getLucideIcon(name) {
  return lucideIconMap[name] ?? Box;
}

// ─────────────────────────────────────────────
//  Brand icons (react-icons) — import explícito
// ─────────────────────────────────────────────
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiPostman,
  SiBootstrap,
  SiDotnet,
} from "react-icons/si";

import {
  FaJava,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

import { VscAzureDevops } from "react-icons/vsc";

const brandIconMap = {
  si: { SiReact, SiNodedotjs, SiPython, SiJavascript, SiPostgresql, SiPostman, SiBootstrap, SiDotnet },
  fa: { FaJava },
  vsc: { VscAzureDevops },
};

export function getBrandIcon(iconLib, icon) {
  return brandIconMap[iconLib]?.[icon];
}

//  Iconos sociales (Contact.jsx usa nombres string de data.js)
export { FaGithub, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";

export const socialIconMap = { FaGithub, FaLinkedin, FaTwitter, FaBehance };