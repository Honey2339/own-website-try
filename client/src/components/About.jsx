import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";

delete theme.styles.global;

function About() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <motion.div
        style={{}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="main-container"
      >
        <div className="under-container">
          <Navbar />
        </div>
      </motion.div>
    </ChakraProvider>
  );
}

export default About;
