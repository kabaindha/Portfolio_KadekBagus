// Centralized content sourced from Kadek Bagus Indra Dharmawan's CV.
// Update this file to keep the whole site in sync with the CV.

export const profile = {
  name: "Kadek Bagus Indra Dharmawan",
  title: "Full Stack Web Developer",
  location: "Tangerang, Indonesia",
  phone: "082110368717",
  email: "kbagus.dharmawan@gmail.com",
  linkedin: "https://www.linkedin.com/in/kadek-bagus-indra-d-7a1739172/",
  github: "https://github.com/kabaindha",
  cvFile: "/Kadek_Bagus_Indra_Dharmawan_CV.pdf",
  summary:
    "Industrial Engineering graduate with professional experience in production supervision and operational leadership. Currently pursuing a Full-Stack Web Developer Bootcamp at Purwadhika Digital Technology School, focusing on modern web technologies such as React, Node.js, TypeScript, and relational databases. Experienced in building user-centered digital solutions through software development and UX research methodologies.",
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Supervisor Production",
    company: "PT Poly Packaging Industry (Charoen Pokphand Group)",
    period: "May 2022 – Present",
    points: [
      "Plan and control material allocation throughout the production process, reducing waste to below 3%.",
      "Coordinate with multiple departments to ensure smooth production flow from raw materials to finished products.",
      "Ensure production activities follow operational procedures and safety standards to maintain zero workplace accidents.",
      "Supervise production operators and maintain production quality and efficiency according to company targets.",
    ],
  },
  {
    role: "Unit Head Production",
    company: "PT Mayora Indah Tbk",
    period: "Aug 2020 – Nov 2020",
    points: [
      "Supervised production operators and monitored daily manufacturing processes.",
      "Prepared production reports and coordinated product delivery to finished goods warehouse.",
      "Provided training to production staff to improve operational efficiency and productivity.",
    ],
  },
  {
    role: "PPIC Intern",
    company: "PT Eagle Indo Pharma",
    period: "Jun 2021 – Dec 2021",
    points: [
      "Created production scheduling and inventory planning to prevent production delays.",
      "Monitored production processes and ensured supply availability met production demand.",
    ],
  },
  {
    role: "Business Owner",
    company: "Healthy Cendol Otista",
    period: "Feb 2020 – Present",
    points: [
      "Managed product development, promotions, sales planning, and budgeting.",
      "Increased revenue by 63% in 2021 through operational improvements.",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Purwadhika Digital Technology School",
    degree: "Full Stack Web Developer",
    period: "2025",
  },
  {
    school: "Binar Academy",
    degree: "UI/UX Research & Design",
    period: "2022",
  },
  {
    school: "Trisakti University",
    degree: "Industrial Engineering, GPA: 3.18",
    period: "2016 – 2021",
  },
];

export type CertificationItem = {
  issuer: string;
  name: string;
  period: string;
  link?: string;
};

export const certifications: CertificationItem[] = [
  {
    issuer: "Purwadhika Digital Technology School",
    name: "Fullstack Web Developer",
    period: "2026",
    link: "https://drive.google.com/file/d/10PlYWqvhmdkS9CmiklBLGmV2YexRjogt/view?usp=sharing",
  },
  {
    issuer: "Binar Academy",
    name: "UI/UX Research & Design",
    period: "2022",
    link: "https://drive.google.com/file/d/1YQh24T6iOYlM4Xu1TKELO6Hh6aZiSx3t/view?usp=drive_link",
  },
];

export const skills = {
  hard: [
    "TypeScript",
    "JavaScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "SQL",
    "Prisma ORM",
    "REST API Development",
    "UX Research",
    "Usability Testing",
  ],
  soft: ["Leadership", "Problem Solving", "Critical Thinking", "Communication"],
  tools: ["Git", "GitHub", "Postman", "Visual Studio Code", "Figma"],
  languages: ["Indonesian (Native)", "English (Upper-Intermediate)"],
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  links: { label: string; url: string }[];
  image?: string;
};
