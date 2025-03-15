import React from "react";
import { motion } from "framer-motion";
import "../Css/Home.css";
import CharacterGrid from "../Componetnts/CharacterGrid";

function Home() {
  return (
    <motion.div
      className="scroll-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <div className="hero-container">

        {/* Animated Heading */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to the World of Naruto
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Discover the journey of the greatest Hokage
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Explore Now
        </motion.button>
      </div>

      {/* Characters Section */}
      <motion.div
        className="character-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <CharacterGrid />
      </motion.div>
    </motion.div>
  );
}

export default Home;
