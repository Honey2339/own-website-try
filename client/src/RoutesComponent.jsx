import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import OnLoadPage from "./OnLoadPage";

function RoutesComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="Routes">
      {isLoading ? (
        <OnLoadPage />
      ) : (
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
      )}
    </div>
  );
}

export default RoutesComponent;
