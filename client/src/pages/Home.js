
import React from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
//import TextField from "@mui/material/TextField";
//import List from "./Components/List"
import { useNavigate } from "react-router-dom";

import './Home.css'
export const Home = () => {

  let navigate = useNavigate(); 

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div c>
        <h1 style={{fontFamily: "Ragile", fontSize: 60, color: "#323232"}}>Tropi-Cocktails</h1>
      </div>
      {/*<SearchBar />*/}
      <p style={{fontFamily: "Ragile", fontSize: 30, color: "#424242"}}>
        it taste yummy. i like yummy things. you should too
      </p>
    </motion.div>

    <div className="buttonContainer">

    <button className="buttonL" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={() => navigate('/about', { replace: true })}>Select Ingredients</button>
    <button className="buttonR" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={() => navigate('/about', { replace: true })}>Random</button>


    </div>




    {/* ocean */}
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
      </div>
    </motion.div>
    </>
      
  );
}

export default Home;
