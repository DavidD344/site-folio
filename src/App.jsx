

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/about/about";
import Home from './pages/home/home';
import Contato from "./pages/contato";
 
function App() {
  return (
  <>
  
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contato/>}/>
    </Routes>
  </Router>

  </>
  );
}
 
export default App;

