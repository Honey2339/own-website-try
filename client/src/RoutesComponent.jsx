import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";

function RoutesComponent() {
  return (
    <div className="Routes">
      <div className="routes-container">
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default RoutesComponent;
