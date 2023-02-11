import logo from './logo.svg';
import { motion } from "framer-motion";
import './App.css';


// test 
function App() {
  return (
    <motion.div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </motion.div >
  );
}

export default App;
