import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { SocialMediaAside } from "./components/SocialMediaAside"
import { TabNav } from "./components/TabNav"


// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"


function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  return (
    <div className='w-full h-screen dark:bg-neutral-800 transition-colors '>
      <div className='fixed top-0 left-1/2  transform -translate-x-1/2 flex flex-row items-center bg-slate-100 dark:bg-neutral-700 shadow-lg'>
        <TabNav isDark={isDark} setIsDark={setIsDark} />
      </div>

      <SocialMediaAside isDark={isDark} setIsDark={setIsDark} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;