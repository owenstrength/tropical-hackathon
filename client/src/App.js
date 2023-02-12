

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home"
import CocktailAnimation from "./pages/CocktailAnimation";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
  <Router>
    <CocktailAnimation />
  </Router>
  )}

export default App;
