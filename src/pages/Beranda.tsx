import { useIsMobile } from "@/hooks/use-mobile";

import DekstopHome from "./DekstopHome";
import MobileHome from "./MobileHome";

import jworksImg from "@/assets/images/jworks.jpg";
import eprocImg from "@/assets/images/eproc.jpg";
import mqrImg from "@/assets/images/mqr.jpg";
import tspImg from "@/assets/images/tsp.jpg";
import elatnisImg from "@/assets/images/elatnis.jpg";
import melonkuImg from "@/assets/images/melonku.jpg";
import greenhouseImg from "@/assets/images/greenhouse.jpg";
import r3storeImg from "@/assets/images/r3store.jpg";
import ccodImg from "@/assets/images/ccod.jpg";

import { GithubIcon, InstagramIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";


const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Indocyber Global Teknologi – Project Assignment at BPJS Ketenagakerjaan",
    start: "DEC 2024",
    end: "present",
    jobs: [
      "Conducted unit testing, stress testing, and performance optimization of web applications.",
      "Refactored monolithic systems into microservices for scalability and efficiency.",
      "Developed RESTful APIs, optimized queries, and performed database tuning.",
      "Collaborated within Agile/Scrum teams using Jira for project management.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "PT. Positif Media Citra",
    start: "JAN 2019",
    end: "NOV 2024",
    jobs: [
      "Developed and maintained end-to-end web applications (frontend & backend).",
      "Implemented microservices architecture and integrated third-party APIs.",
      "Improved application performance through refactoring and automated testing.",
      "Developed and maintained end-to-end web and mobilebased Point of Sale (POS) systems, including payment methods, sales reporting, and inventory management.",
    ],
  }
];

const projectData = [
  {
    imgUrl: jworksImg,
    link: "#",
    title: "JWORKS - BPJS Ketenagakerjaan",
    description: "JWorks is a superapp for internal use at BPJS Ketenagakerjaan, functioning as a shortcut hub to access other internal applications within BPJS TK. In this project, I work as a Backend Developer, responsible for building APIs and integrating them with various internal BPJS TK applications.",
    skills: ['Express', 'Node JS', 'Mysql', 'Typescript', 'Oracle', 'Docker'],
  },
  {
    imgUrl: eprocImg,
    link: "#",
    title: "EPROC - BPJS Ketenagakerjaan",
    description: "EProc is an electronic procurement application developed for BPJS Ketenagakerjaan to streamline the procurement process.",
    skills: ['Express', 'Node JS', 'Mysql', 'Oracle', 'Vue.JS', 'Docker'],
  },
  {
    imgUrl: mqrImg,
    link: "https://mahamerulantas.id/",
    title: "Mahameru Quick Response",
    description: "Mahameru Quick Response was developed using Vue JS and Express. Its purpose is to serve as an information hub for activities within the East Java Traffic Directorate (DITLANTAS Polda Jatim) as well as a monitoring tool for officers.",
    skills: ['Vue JS', 'Tailwindcss', 'Express', 'Node JS', 'Mysql'],
  },
  {
    imgUrl: tspImg,
    link: "https://teguranpresisi.id",
    title: "Teguran Presisi",
    description: "Teguran Presisi was built with Vue JS and Laravel. It is an application designed for recording traffic violations and sending automated notifications through WhatsApp broadcasts.",
    skills: ['Vue JS', 'Laravel', 'Tailwindcss', 'Mysql'],
  },
  {
    imgUrl: elatnisImg,
    link: "https://elatnis.setukpa.id",
    title: "E-Latnis Setukpa",
    description: "E-Latnis is a training application developed for Setukpa Lemdiklat to support technical training programs.",
    skills: ['Vue JS', 'Express', 'Tailwindcss', 'Node JS', 'Mysql'],
  },
  {
    imgUrl: melonkuImg,
    link: "https://melonku.id",
    title: "Melonku",
    description: "Melonku is designed using Vue JS and Express, focusing on selling fresh and high-quality melons directly from farmers to consumers.",
    skills: ['Vue JS', 'Nuxt JS', 'Tailwindcss', 'Express', 'Node JS', 'MongoDB'],
  },
  {
    imgUrl: greenhouseImg,
    link: "https://gh.melonku.id",
    title: "My Greenhouse",
    description: "My Greenhouse is a monitoring application for temperature, humidity, and other conditions inside the greenhouse. It also provides control features for water pumps, fans, and more.",
    skills: ['Vue JS', 'Nuxt JS', 'Tailwindcss', 'Express', 'TypeScript', 'Node JS', 'MongoDB'],
  },
  {
    imgUrl: r3storeImg,
    link: "https://r3store.co",
    title: "R3Store",
    description: "R3Store is a platform for purchasing digital items such as diamonds, UC, and vouchers for various popular games. It is built with a simple and responsive interface to ensure users can complete transactions quickly, safely, and conveniently.",
    skills: ['Vue JS', 'Nuxt JS', 'Tailwindcss', 'Nest JS', 'TypeScript', 'Node JS', 'Mysql'],
  },
  {
    imgUrl: ccodImg,
    link: "https://r3store.co",
    title: "CCOD",
    description: "CCOD is a monitoring dashboard designed to observe and analyze data related to forests, mining areas, and more.",
    skills: ['Vue JS', 'Nuxt JS', 'Tailwindcss', 'TypeScript', 'Node JS', 'Mysql'],
  },
];

const links = [
  {
    href: "https://github.com/irulhuda983",
    icon: GithubIcon,
  },
  {
    href: "https://instagram.com/iroel.h",
    icon: InstagramIcon,
  },
  {
    href: "https://x.com/irulhuda26",
    icon: TwitterIcon,
  },
  {
    href: "https://www.linkedin.com/in/m-khoirul-huda/",
    icon: LinkedinIcon,
  },
  {
    href: "https://wa.me/6282337831456",
    icon: WhatsappIcon,
  },
];

const skillData = ['JavaScript (ES6+)', 'Typescript', 'Node.js', 'Express', 'Nest.js', 'Vue.js', 'React.js', 'Next.js', 'MongoDB', 'Mysql', 'PostgreSQL', 'Docker', 'Kubenetes', 'Jenskin', 'GIT', 'Tailwindcss'];

const teknologiData = {
  programingLanguage: ['JavaScript (ES6+)', 'Typescript', 'Node.js', 'PHP', 'Python'],
  framework: ['Laravel', 'Express', 'Nest.js', 'Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'Tailwindcss'],
  database: ['MongoDB', 'Mysql', 'PostgreSQL', 'Oracle'],
  devOps: ['Nginx', 'Apache', 'Docker', 'Kubernetes', 'Gitlab CI', 'Jenskin', 'Openshift', 'GIT'],
};

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileHome
          experienceData={experienceData}
          projectData={projectData}
          linksData={links}
          skillData={skillData}
          teknologiData={teknologiData}
        />
      ) : (
        <DekstopHome
          experienceData={experienceData}
          projectData={projectData}
          skillData={skillData}
          linksData={links}
          teknologiData={teknologiData}
        />
      )}
    </>
  );
};

export default Home;
