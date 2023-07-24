import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
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
        <div>
          <img className="donut" src="./images/donut.png"></img>
          <img className="sphere" src="./images/sphere.png"></img>
          <img className="pills" src="./images/pills.png"></img>
          <img className="square" src="./images/square.png"></img>
          <p className="info">
            This is not 100% built plus the website is not compatible for mobile
            and yet to be completed. For more info you can click on my name to
            redirect to my Linkedin profile
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
