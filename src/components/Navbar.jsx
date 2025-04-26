import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';
// import backgroundImage from '../assets/images/backgroundp.png';
import Sun from '../assets/images/sun.png';
import Moon from '../assets/images/moon.png';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* <div className="fixed top-0 right-0 -z-10">
                <img src={backgroundImage} alt="Background" className="w-full absolute opacity-50 bg-cover bg-no-repeat" />
            </div> */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white shadow-md dark:bg-darkTheme dark:shadow-white/20' : 'bg-transparent'}`}>
                <a href="#top" className="w-28 cursor-pointer mr-14 font-lovers font-bold text-4xl md:text-6xl">Ugboizu.</a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a href="#top" className="font-ovo">Home</a></li>
                    <li><a href="#about" className="font-ovo">About Me</a></li>
                    <li><a href="#services" className="font-ovo">Services</a></li>
                    <li><a href="#work" className="font-ovo">My Work</a></li>
                    <li><a href="#contact" className="font-ovo">Contact Me</a></li>
                </ul>
                <div className="flex items-center gap-4">
                    <button onClick={()=> setIsDarkMode(prev => !prev)} >
                        <img src={isDarkMode ? Sun : Moon} className="w-6" />
                    </button>
                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-12 py-3 border border-gray-500 rounded-full ml-4 font-ovo">
                        Contact <ArrowUpRight />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <List size={32} className="w-6" />
                    </button>
                </div>
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-52 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <X size={32} className="w-5 cursor-pointer font-extrabold" />
                    </div>
                    <li><a href="#top" className="font-ovo" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="font-ovo" onClick={closeMenu}>About Me</a></li>
                    <li><a href="#services" className="font-ovo" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" className="font-ovo" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" className="font-ovo" onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;