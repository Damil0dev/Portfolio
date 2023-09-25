import { Routes, Route } from "react-router-dom";

import { SocialMediaAside } from "./components/SocialMediaaside"
import { TabNav } from "./components/TabNav"

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <>
      <div className="absolute top-0 left-1/2  transform -translate-x-1/2">
        <TabNav />
      </div>

      <div className='absolute top-1/2 left-0 transform -translate-y-1/2'>
              <SocialMediaAside />
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;