

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home"
import AnimatedRoutes from "./pages/AnimatedRoutes";
import About from "./pages/About";
import CocktailAnimation from "./pages/CocktailAnimation";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<CocktailAnimation />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )}

export default App;
