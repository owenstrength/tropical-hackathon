

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home"
import AnimatedRoutes from "./pages/AnimatedRoutes";
import About from "./pages/About";
import CocktailSelection from "./pages/CocktailSelection";
import CocktailAnimation from "./pages/CocktailAnimation";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/selection" element={<CocktailSelection />} />
      <Route path="/final/:drink" element={<CocktailAnimation />} />
    </Routes>
  </Router>
  )}

export default App;
