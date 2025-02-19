import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaBootstrap, FaGitAlt, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dimple from "@/public/dimplegram.png";
import vibes from "@/public/vibes.png";
import physioplus from "@/public/physioplus.png";
import acencore from "@/public/Acencore.png";
import stakehub from "@/public/stakehub.png";
import vp from "@/public/vp.png";
import foodapp from "@/public/foodApp.png";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoVercel,
  IoLogoNodejs,
} from "react-icons/io5";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoRedux,
} from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiPrisma } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BsStars } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.tech CSE(AI)",
    location: "Jaipur, RJ",
    description:
      "Pursuing my Bachelors of Technology in CSE degree from Jaipur, Currently in my Final Year looking for full time opportunities",
    icon: React.createElement(LuGraduationCap),
    date: "2021-25",
  },
  {
    title: "Web Developer",
    location: "Devyut, Jaipur",
    description:
      "Worked as a part-time front-end developer during college, contributing to freelance projects and mentoring sophomores during their internships at the company.",
    icon: React.createElement(CgWorkAlt),
    date: "Part-time",
  },
  {
    title: "Junior Software Developer",
    location: "Physioplus Healthcare, Jaipur",
    description:
      "Worked as a Junior Software Developer at a health-tech startup, built their marketing website, and led the frontend team to develop the doctor booking platform using the MERN stack.",
    icon: React.createElement(FaReact),
    date: "2023 Sept - 2023 Dec",
  },
  {
    title: "Front-end Developer",
    location: "StakeHub Infotech, Jaipur",
    description:
      "Worked as a temporary developer, migrated the codebase from Tailwind to SCSS, and contributed new components to the unlisted-IPO trading platform.",
    icon: React.createElement(BiLogoTailwindCss),
    date: "2024 May - 2024 May",
  },
  {
    title: "Front-end Developer",
    location: "Acencore Technologies, Remote",
    description:
      "Worked as a Frontend Developer, built the company's main website, contributed by developing significant components to the AI-assisted hiring platform, and completed V-0 of the AI-driven video interview flow.",
    icon: React.createElement(BsStars),
    date: "2024 Jul - 2024 Dec",
  },
] as const;

export const projectsData = [
  {
    title: "Dimple",
    description:
      "A social media application, facilitating user connection, content sharing, and diverse exploration",
    tags: ["React", "Tanstack Query", "Appwrite", "Tailwind", "TS"],
    imageUrl: dimple,
    link: "https://dimplegram.vercel.app/",
  },
  {
    title: "Vibezz",
    description:
      "A Mood Tracker that Shows Memes related to your Mood consisting of a Custom Calendar to keep track of ur mood",
    tags: ["Next.JS", "TS", "Reddit Api", "Tailwind", "Firebase"],
    imageUrl: vibes,
    link: "https://vibezzz-sage.vercel.app/",
  },
  {
    title: "Acencore",
    description:
      "AI aided Hiring Platform to ease up the Hiring Process Efficiently and Quickly (Main Website)",
    tags: ["React", "Next.js", "MagicUI", "Tailwind", "Framer"],
    imageUrl: acencore,
    link: "https://www.acencore.com/",
  },
  {
    title: "Physioplus",
    description:
      "Platform for getting expert physiotherapy At-Home or In-Clinic with personalized care tailored to your recovery needs.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: physioplus,
    link: "https://physioplushealthcare.com/",
  },
  {
    title: "StakeHub",
    description:
      "The World of Unlisted Equity, All in One Place. One stop solution to trade in unlisted IPOs ",
    tags: ["React", "Node.js", "Next.js", "Tailwind", "SCSS", "AWS"],
    imageUrl: stakehub,
    link: "https://www.stakehub.in/",
  },
  {
    title: "FoodApp",
    description:
      "A public web app for foodies where you can upload your recipies and can view recipies of others with yummy pictures.",
    tags: ["Next.js", "CSS", "S3"],
    imageUrl: foodapp,
    link: "https://next-level-food-nu.vercel.app/",
  },
  {
    title: "VP",
    description:
      "A public web app for a Printing Business. It shows all the services provided by the Business.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imageUrl: vp,
    link: "https://vp-zeta.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    icon: React.createElement(IoLogoHtml5),
  },
  {
    title: "CSS",
    icon: React.createElement(IoLogoCss3),
  },
  {
    title: "JavaScript",
    icon: React.createElement(IoLogoJavascript),
  },
  {
    title: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
  },
  {
    title: "React",
    icon: React.createElement(FaReact),
  },
  {
    title: "Next.js",
    icon: React.createElement(IoLogoVercel),
  },
  {
    title: "Node.js",
    icon: React.createElement(IoLogoNodejs),
  },
  {
    title: "Express.js",
    icon: React.createElement(SiExpress),
  },
  {
    title: "Git",
    icon: React.createElement(FaGitAlt),
  },
  {
    title: "Tailwind",
    icon: React.createElement(BiLogoTailwindCss),
  },
  {
    title: "Bootstrap",
    icon: React.createElement(FaBootstrap),
  },
  {
    title: "MongoDB",
    icon: React.createElement(BiLogoMongodb),
  },
  {
    title: "Redux",
    icon: React.createElement(BiLogoRedux),
  },
  {
    title: "Prisma",
    icon: React.createElement(SiPrisma),
  },
  {
    title: "WordPress",
    icon: React.createElement(FaWordpress),
  },
  {
    title: "MySQL",
    icon: React.createElement(DiMysql),
  },
  {
    title: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
  },
  ,
] as const;
