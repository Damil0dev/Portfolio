import React, { useState } from 'react';

import sunIcon from "../assets/sun.svg"
import moonIcon from "../assets/moon.svg"

export function ThemeButton({ isDark, setIsDark }) {
    function handleClick() {
        const htmlElement = document.documentElement;

        if (isDark) {
            htmlElement.classList.remove("dark");
        } else {
            htmlElement.classList.add("dark");
        }

        setIsDark(!isDark);
    }

    return (
        <div className=' md:self-end md:justify-self-end cursor-pointer select-none' onClick={handleClick}>
            <img src={isDark ? moonIcon : sunIcon} alt="button for change between dark and light mode" width={70} height={70} className='p-4' />
        </div>
    );
}