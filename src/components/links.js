import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    id: 1,
    icon: faGithub,
    title: "GitHub",
    description: "Meus projetos e contribuições",
    href: "https://github.com/BrunoEijiMine",
    color: "#8250df",
  },
  {
    id: 2,
    icon: faLinkedin,
    title: "LinkedIn",
    description: "Vamos nos conectar profissionalmente",
    href: "https://www.linkedin.com/in/bruno-eiji-1b47b1206/",
    color: "#0a66c2",
  },
  {
    id: 3,
    icon: faGlobe,
    title: "Portfolio",
    description: "Confira meus projetos e trabalhos",
    href: "https://bruno-eiji.vercel.app/",
    color: "#4ade80",
    isNew: true,
  },
];