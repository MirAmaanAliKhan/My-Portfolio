"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, I
        decided to explore my options in the tech field. I followed my passion
        for programming, and started building applications.{" "}
        <span className="font-medium">
          As of now, I am exploring the world of gen AI and langchain to
          integrate in applications
        </span>
        . <span className="font-medium"></span> My favorite part of programming
        is the problem-solving aspect. I love the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, PostreSQL & Django</span>.
        I am also familiar with languages like Python, Typescript and Java. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <br />
        <span className="font-medium">software developer.</span>
      </p>
    </motion.section>
  );
}
