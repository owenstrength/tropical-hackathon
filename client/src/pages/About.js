import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate(); 
  const [isSet, setIsSet] = useState(null)
  const [data, setData] = useState(null)
  if (!isSet) {
    fetch("http://localhost:8080/api").then((response) => response.json()).then((json) => {setData(JSON.stringify(json)); setIsSet(true);});
    console.log(data)
    console.log(isSet)
  } else {
    if (data) {
      console.log(JSON.parse(data))
      let url = "/final/" + JSON.stringify(JSON.parse(data)[0].idDrink)
      navigate(url)
    }
  }
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>About Page</h1>

      <p>
      </p>
    </motion.div>
  );
}

export default About;