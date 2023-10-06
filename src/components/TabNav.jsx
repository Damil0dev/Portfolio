import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import menuIcon from "../assets/menu.png";
import menuIcon_dark from "../assets/menu (1).png";
import { ThemeButton } from "../components/ThemeButton";

export function TabNav({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={`w-screen md:flex md:flex-row md:justify-between md:items-center ${
        isOpen ? "bg-slate-100 dark:bg-neutral-700 shadow-lg" : "bg-transparent"
      } md:bg-transparent md:shadow-none`}
    >
      <div className={`w-full md:w-fit flex flex-row items-center p-3`}>
        <div className='w-9 h-9 flex items-center justify-center md:hidden'>
          <img
            src={isDark ? menuIcon_dark : menuIcon}
            alt='menu button'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className='md:hidden'
          />
        </div>

        <div className='w-9 flex items-center justify-center ml-auto md:ml-0'>
          <ThemeButton isDark={isDark} setIsDark={setIsDark} />
        </div>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:gap-5`}
      >
        <Tab title='Home' path='/' />
        <Tab title='About' path='/about' />
        <Tab title='Skills' path='/skills' />
        <Tab title='Projects' path='/projects' />
        <Tab title='Contact' path='/contact' />
      </ul>

      <div className='hidden md:inline-block'>
        <div className={`p-3`}>
          <div className='w-9'></div>

          <div className='w-9'></div>
        </div>
      </div>
    </nav>
  );
}

function Tab({ title, path }) {
  const location = useLocation();
  const isActive = path === location.pathname;

  const activeClasses =
    "text-2xl md:text-lg font-bold text-blue-800 border-blue-800 border-b-4";
  const inactiveClasses =
    "text-2xl md:text-lg font-bold border-b-4 border-transparent hover:text-blue-800 hover:border-blue-800 dark:text-neutral-200";

  return (
    <li
      className={`flex items-center justify-center transition-all ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Link to={path} className='w-full md:w-fit p-3 text-center'>
        {title}
      </Link>
    </li>
  );
}
