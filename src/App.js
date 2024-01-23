import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/comNavBar/Home"
import About from "./components/comNavBar/About"
import Blog from "./components/comNavBar/Blog"
import Contact from "./components/comNavBar/Contact"
import Portfolio from "./components/comNavBar/Portfolio"
import Pricing from "./components/comNavBar/Pricing"
import Services from "./components/comNavBar/Services"
import FooterC from "./components/FooterC";

function App() {
  return (
    <>
      <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/blog" element={<Blog/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/portfolio" element={<Portfolio/>}/>
             <Route path="/pricing" element={<Pricing/>}/>
             <Route path="/Services" element={<Services/>}/>
         </Routes>
         <FooterC/>
      </BrowserRouter>
    </>
  );
}

export default App;
