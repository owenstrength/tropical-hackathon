import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>Contact us</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
        in minima architecto odit sunt enim quidem blanditiis voluptates,
        provident veritatis labore. Natus pariatur eos at nemo, officia
        voluptatibus accusamus.
      </p>
    </motion.div>
  );
}

export default Contact;
