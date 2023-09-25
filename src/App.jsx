import { Routes, Route } from "react-router-dom";

import { SocialMediaAside } from "./components/SocialMediaaside"
import { TabNav } from "./components/TabNav"

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact"


function App() {
  return (
    <>
      <TabNav />
      <SocialMediaAside />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;