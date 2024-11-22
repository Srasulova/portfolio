"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMe from "./components/aboutMe";
import HeroArea from "./components/hero";
import MyTechStack from "./components/myTeckStack";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contacts from "./components/contacts";


export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [hasScrolledDown, setHasScrolledDown] = useState(false); // Track if scrolled down

  // Animation properties for scroll-in effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  // Animation properties for the separator
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down and set the flag
      if (currentScrollY > lastScrollY && !hasScrolledDown) {
        setHasScrolledDown(true); // User has scrolled down for the first time
      }

      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledDown]);

  return (
    <div>
      <main className="bg-white">

        <HeroArea />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <AboutMe />
        </motion.div>

        <motion.div
          className="h-0.5 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          animate={hasScrolledDown ? (scrollDirection === "down" ? "visible" : "hidden") : "hidden"}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <MyTechStack />
        </motion.div>

        <motion.div
          className="h-0.5 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          animate={hasScrolledDown ? (scrollDirection === "down" ? "visible" : "hidden") : "hidden"}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Projects />
        </motion.div>

        <motion.div
          className="h-0.5 my-8 bg-gradient-to-r from-cyan-400 via-transparent to-fuchsia-500"
          variants={lineVariants}
          initial="hidden"
          animate={hasScrolledDown ? (scrollDirection === "down" ? "visible" : "hidden") : "hidden"}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInVariants}>
          <Contacts />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
