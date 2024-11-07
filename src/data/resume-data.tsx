import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abhishek Bhonde",
  initials: "AB",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
"As a Full Stack Developer with foundational DevOps skills, I am skilled in TypeScript, React, Node.js, Express.js, and Next.js. I am currently a final-year student, balancing academic commitments with practical development experience. My background includes hands-on projects that bridge theoretical knowledge with real-world applications.",  avatarUrl: "https://avatars.githubusercontent.com/u/113115756?v=4",
  personalWebsiteUrl: "https://abhishek.me",
  contact: {
    email: "abhishekbhonde31@gmail.com",
    tel: "+919284324926",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/abhishekbhonde",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bhonde_abhishek",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Savitribai Phule Pune University ",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025"
    },
  ],
  work: [
    {
      company: "Stoccoin",
      link: "https://stoccoin.vercel.app/",
      badges: ["Remote"],
      title: "Full Stack Developer Intern",
      logo: ParabolLogo,
      start: "Oct 2022",
      end: "Feb 2023",
      description:
        "Created and launched an engaging website using modern tools like React.js, JavaScript, and Tailwind CSS. The site offers dynamic features and smooth user experiences, owing to careful planning and execution during development and deployment.",
    },
    {
      company: "ACM RSCOE",
      link: "https://rscoe.acm.org/",
      badges: ["Remote"],
      title: "Lead - Web Team",
      logo: ClevertechLogo,
      start: "2022",
      end: "2024",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "ExpresJs",
    "MySql",
    "MongoDb",
    "TailwindCss",
    
  ],
  projects: [
    {
      title: "InteractAI",
      techStack: [
        "Side Project",
        "Javascript",
        "React.js",
        "Vite",
        "Node.Js",
        "MongoDb",
        "OpenAPI"
      ],
      description: "A platform designed to assist with information, creativity, and conversation through natural language processing.",
      logo: ConsultlyLogo,
      link: {
        label: "interactAI.com",
        href: "https://interactai.netlify.app/",
      },
    },
  
    {
      title: "Payment virtual money wallet money transfer",
      techStack: [
        "Side Project",
        "Javascript",
        "React.js",
        "Vite",
        "Node.Js",
        "MongoDb",
      ],
      description: "A platform to transfer money between users smoothlessly",
      logo: ConsultlyLogo,
      link: {
        label: "cashless.com",
        href: "https://github.com/abhishekbhonde/Cashless-Wallet-v2",
      },
    },
    {
      title: "Blogging Website",
      techStack: ["Side Project", "Javascript", "React.js", "Node.Js", "MySql"],
      description:
        "A platfrom where users can express their thoughts",
      logo: MonitoLogo,
      link: {
        label: "Blogging.com",
        href: "https://github.com/abhishekbhonde/StoryStream",
      },
    },
    {
      title: "GithubAcmRscoe",
      techStack: ["College Project", "React.Js", "TailwindCss"],
      description:
        "A session was conducted for students on github by me.",
      logo: JarockiMeLogo,
      link: {
        label: "githubrscoeacm.com",
        href: "https://githubrscoeacm.vercel.app/",
      },
    },
    {
      title: "ACM RSCOE",
      techStack: ["College Club Project", "React.Js", "Css"],
      description:
        "Platform for showcasing events that are happend in college",
      logo: Minimal,
      link: {
        label: "acmrscoe.com",
        href: "https://rscoe.acm.org/",
      },
    },
    {
      title: "Allen Website",
      techStack: ["College Club Project", "React.Js", "Css"],
      description:
        "Clone of allen website - developed for the practice",
      logo: Minimal,
      link: {
        label: "allen.in",
        href: "https://allen-ecru.vercel.app/",
      },
    },
    {
      title: "Eth-Sol-web-Based-Wallet",
      techStack: ["College Club Project", "React.Js","TailwindCss", "Solana", "Ethereum"],
      description:
        "Ethereum and solana based wallet project",
      logo: Minimal,
      link: {
        label: "ethsol.com",
        href: "https://eth-sol-web-wallet.vercel.app/",
      },
    },
    {
      title: "Blockchain Miner",
      techStack: ["College Club Project", "React.Js","TailwindCss", "Solana", "Ethereum"],
      description:
        "A blockchain miner is a participant in a decentralized network who uses computational power to validate and add transactions to the blockchain, earning rewards in the process.",
      logo: Minimal,
      link: {
        label: "blockchainminer.com",
        href: "https://blockchain-miner.vercel.app/",
      },
    },
    
  ],
} as const;
