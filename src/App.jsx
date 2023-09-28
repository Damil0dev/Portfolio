import { Routes, Route } from "react-router-dom";

import { SocialMediaAside } from "./components/SocialMediaAside"
import { TabNav } from "./components/TabNav"
import { ThemeButton } from "./components/ThemeButton";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"

function App() {
  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 left-1/2  transform -translate-x-1/2">
        <TabNav />
        <ThemeButton />
      </div>

      <div>
        <SocialMediaAside />
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;