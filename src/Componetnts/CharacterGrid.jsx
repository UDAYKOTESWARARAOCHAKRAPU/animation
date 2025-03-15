import React from "react";
import { motion } from "framer-motion";
import "../Css/CharacterGrid.css";
import Naruto from '../Images/Characters/naruto.jpg';
import Sasuke from '../Images/Characters/sasuke.jpg';
import Sakura from '../Images/Characters/saukra.jpg';
import Kakashi from '../Images/Characters/kakashi.jpg';
import Itachi from '../Images/Characters/itachi.jpg';
import Gaara from '../Images/Characters/gaara.jpg';
import Hinata from '../Images/Characters/hinata.jpg';
import Madara from '../Images/Characters/madara.jpg';
import Orochinaru from '../Images/Characters/orochimaru.jpg';
import Jiraiya from '../Images/Characters/jiraiya.jpg';
import Tsunade from '../Images/Characters/tsunade.png';
import Minato from '../Images/Characters/mintao.jpg';
import Kushina from '../Images/Characters/kushina.jpg';
import Asuma from '../Images/Characters/asuma.jpg';
import Shikamaru from '../Images/Characters/shikumaru.jpg';

// Character data
const characters = [
  { name: "Naruto Uzumaki", img: Naruto },
  { name: "Sasuke Uchiha", img: Sasuke },
  { name: "Sakura Haruno", img: Sakura },
  { name: "Kakashi Hatake", img: Kakashi },
  { name: "Itachi Uchiha", img: Itachi },
  { name: "Gaara", img: Gaara },
  { name: "Hinata Hyuga", img: Hinata },
  { name: "Madara Uchiha", img: Madara },
  { name: "Orochimaru", img: Orochinaru },
  { name: "Jiraiya", img: Jiraiya },
  { name: "Tsunade Senju", img: Tsunade },
  { name: "Minato Namikaze", img: Minato },
  { name: "Kushina Uzamaki", img: Kushina },
  { name: "Asuma X Kurnyi", img: Asuma },
  { name: "Shikamaru Nara", img: Shikamaru },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const scrollEffect = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { opacity: 0, y: -100, scale: 0.7, transition: { duration: 0.5 } }
};

function CharacterGrid() {
  return (
    <section className="character-section">
      <h2 className="character-title">Meet the Legends</h2>
      <motion.div
        className="character-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {characters.map((char, index) => (
          <motion.div
            key={index}
            className="character-card"
            variants={scrollEffect}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ amount: 0.2 }}
            whileHover={{ scale: 1.1, rotateY: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={char.img}
              alt={char.name}
              className="character-img"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.p
              className="character-name"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              {char.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CharacterGrid;
