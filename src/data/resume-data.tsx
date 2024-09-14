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
      title: "Senior Full Stack Developer",
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
    "WebRTC",
  ],
  projects: [
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
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
