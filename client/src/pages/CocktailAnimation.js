import {React, useState, useEffect} from "react";
import { motion } from "framer-motion";
import Glass from '../assets/images/glass_cup.svg'
import DrinkingGlass from '../assets/images/drinking_glass.svg'
import { useParams } from "react-router-dom";
import './CocktailAnimation.css'

function CocktailAnimation() {
  let params= useParams();


  const [drinkId, setId] = useState(null)
  const [isSet, setIsSet] = useState(false)
  const [data, setData] = useState(null)

  useEffect(()=>{
		setId(JSON.parse(params.drink))
	}, [])


  if (drinkId) {
    if (!isSet) {
        fetch("http://localhost:8080/api/name/"+drinkId).then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
    }
}

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
    <div className="drink"> {JSON.stringify(data)}</div>

    </>

  );
}

export default CocktailAnimation;