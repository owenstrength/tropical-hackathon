import React from "react";
import { motion } from "framer-motion";
import Glass from '../assets/images/glass_cup.svg'
import DrinkingGlass from '../assets/images/drinking_glass.svg'
import './CocktailAnimation.css'
function CocktailAnimation() {
  return (
    <>
    <div className="container">
        <motion.div
        
        className="motion-div-1"
        animate={{
            scale: [1, 1, 1, 1],
            rotate: [0, 0, 100, 0],
            position: 'fixed',
            opacity: [1, 1, 1, 1, 0]

          }}
          transition={{
            duration: 5,
            ease: "backInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
    > 
      <div className="container-shot">
        <img src={Glass} className="glass"/>
        <div className="pouring-liquid">
        </div>
      </div>
    </motion.div>
          <div className="liquid">
            <img src={DrinkingGlass} className='drinking-glass'/>
          </div>
    </div>
    </>

  );
}

export default CocktailAnimation;