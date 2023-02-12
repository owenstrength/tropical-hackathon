import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";


function About() {
  const [isSet, setIsSet] = useState(null)
  const [data, setData] = useState(null)
  console.log(data)
  if (!isSet) {
    fetch("http://localhost:8080/api").then((response) => response.json()).then((json) => {setData(JSON.stringify(json)); setIsSet(true)});
    console.log(data)
    console.log(isSet)
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
        {data}
      </p>
    </motion.div>
  );
}

export default About;