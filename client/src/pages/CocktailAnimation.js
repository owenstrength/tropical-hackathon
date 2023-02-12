import React from "react";
import { motion } from "framer-motion";
import Glass from '../assets/images/glass_cup.svg'
import './CocktailAnimation.css'
function CocktailAnimation() {
  return (
    <motion.div
        className="container text-center  bg-black"
        animate={{
            scale: [1, 1, 1, 1],
            rotate: [0, 0, 100, 0],
            borderRadius: ["0%", "0%", "50%", "50%"],
            position: 'fixed'

          }}
          transition={{
            duration: 5,
            ease: "backInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
    >   
        <img src={Glass} />
      {/*<SearchBar />*/}

    </motion.div>
  );
}

export default CocktailAnimation;