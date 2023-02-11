import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home"
import AnimatedRoutes from "./pages/AnimatedRoutes";
function App() {
  return (
  <Router>
    <AnimatedRoutes />
  </Router>
  )}

export default App;
