import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MovieR from "@/public/movieR.png"
import Football from "@/public/Football.png"
import ChatApi from "@/public/ChatApi.png"

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
] as const;

export const experiencesData = [
  {
    title: "Bachelors Of Engineering",
    location: "Osmania University",
    description:
      "I completed my bachelors in Computer Science Engineering with a CGPA of 8.30.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Rejolt EDtech",
    description:
      "I worked as a front-end developer intern for 3 months, where my job was to implement UI/UX design using ReactJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Cloud Student Program Intern",
    location: "PayPal AWS",
    description:
      "Learnt AWS tools  and services. Built environments for Software Developments. Used services like EC2, S3 etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Developer - Full Stack",
    location: "SRZK Global Solutions LLP",
    description:
      "Built Gen AI applications. Maintained code integrity and ensured responsiveness of applications. Designed APIs and managed databases.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Football Club",
    description:
      "It is a football club webpage, that has features like -events, trophy cabinets, socials, testimonials etc. This was my initial project which I built using reactJS.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: Football,
  },
  {
    title: "AL-Bayan",
    description:
      "An application that enables easy religious learnings. Currently I'm building this appliaction with a team of 3 for a hackathon in KSA.",
    tags: ["React Native", "TypeScript", "Tailwind","Django","NLP"],
    imageUrl: ChatApi,
  },
  {
    title: "Chat AI",
    description:
      "A basic chat application that uses websockets, langchain to communicate with a language model.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","SQL lite","Django"],
    imageUrl: ChatApi,
  },
  {
    title: "Movie Recommendation System",
    description:
      "Built on jupyter notebook using ML model- Cosine Similarity.",
    tags: ["Python", "NumPy", "Pandas","SQL lite"],
    imageUrl: MovieR,
  }
] as const;

export const skillsData = [
"ReactJS",
"NextJS",
"Tailwind",
"Framer Motion",
"Typescript",
"Python",
"Java",
"Django",
"PostgreSQL",
"Langchain",
"WebSocket API",
"React Native"
] as const;
