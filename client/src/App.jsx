import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      style={{}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main-container"
    >
      <div className="under-container">
        <Navbar />
        <div className="home-header">
          <h1 className="para">
            Hola!
            <br /> My name is{" "}
            <span className="prasoon-color">
              <a href="https://www.linkedin.com/in/prasoon-kumar-15299a260/">
                Prasoon Kumar{" "}
              </a>
            </span>
            <br />A Full Stack <span className="dev-color">Developer.</span>
          </h1>
          <img className="img" src="./images/pfp.png" alt="Profile" />
        </div>
        <div className="home-body">
          <h4>
            I'm currently studying in Panimalar engineering college and have
            interest in MERN Stack + DSA and i like to freelance also :D
          </h4>
          <button className="github-btn">
            <a href="https://github.com/Honey2339">Github Profile</a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
