import React, { useState } from 'react';

import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon.svg"

export function ThemeButton() {
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

    function handleClick() {
        const htmlElement = document.documentElement;  // Esto asume que quieres cambiar la clase en el elemento <html>

        if (isDark) {
            htmlElement.classList.remove("dark");
        } else {
            htmlElement.classList.add("dark");
        }

        setIsDark(!isDark);
    }

    return (
        <div className=' md:self-end md:justify-self-end cursor-pointer select-none' onClick={handleClick}>
            <img src={isDark ? moonIcon : sunIcon} alt="button for change between dark and light mode" width={70} height={70} />
        </div>
    );
}