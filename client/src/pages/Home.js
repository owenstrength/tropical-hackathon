import React from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
//import TextField from "@mui/material/TextField";
//import List from "./Components/List"
function Home() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>Cocktails, choose your ingredients</h1>
      <SearchBar />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
        Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
        perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
      </p>
    </motion.div>
  );
}

export default Home;