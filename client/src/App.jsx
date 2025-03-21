import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";


function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
