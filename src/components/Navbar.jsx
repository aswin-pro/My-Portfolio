import { useEffect, useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle"

function Navbar() {
    //for links
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // //for darkmode
    // const darkModePreference = localStorage.getItem('darkMode');

    // const initialDarkmode = darkModePreference === 'true';

    // const [isDarkMode, setIsDarkMode] = useState(initialDarkmode)

    // useEffect(()=>{
    //     if(isDarkMode){
    //         document.documentElement.classList.add('dark')
    //         localStorage.setItem('darkMode','true')
    //     }
    //     else
    //     {
    //         document.documentElement.classList.remove('dark')
    //         localStorage.setItem('darkMode','false')
    //     }
    // })

    return (
        <nav className="shadow-lg border-b-black fixed top-0 w-full bg-white  z-10 dark:bg-gray-950 ">
            <div className="flex justify-between items-center p-3 mx-3 md:p-4 dark:border-b-[1px] ">
                <h1 className="text-3xl font-medium dark:text-white">As<span className='text-[#ff8488] '>win</span></h1>
                <div className='flex items-center gap-2'>
                    {/* Menu icon for mobile view */}
                    <button className="md:hidden text-2xl dark:text-white mt-1" onClick={toggleMenu} >
                        {isMenuOpen ? 'X' : '☰'}
                    </button>
                    {/* dark mode toggle */}
                    {/* <div className='md:hidden flex items-center '>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={50}
                        />
                    </div> */}
                </div>
                {/* Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex gap-9 items-center pt-2 dark:text-white">
                    <a href="#" className="hover-link">Home</a>
                    <a href="#aboutme" className="hover-link">About</a>
                    <a href="#skills" className="hover-link">Skills</a>
                    <a href="#projects" className="hover-link">Projects</a>
                    <a href="#contact" className="hover-link">Contact</a>
                    {/* <div className='flex items-center'>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={60}
                        />
                    </div> */}
                </div>

            </div>
            {/* Navigation links for mobile view */}
            {isMenuOpen ?
                <div className="md:hidden fixed right-5  top-20 bg-black text-white border shadow-lg w-36 mr-5 p-7 pl-7 flex flex-col gap-4 ">
                    <a href="#" className="hover:text-[#ff8484]" onClick={closeMenu}>Home</a>
                    <a href="#aboutme" className="hover:text-[#ff8484]" onClick={closeMenu}>About</a>
                    <a href="#skills" className="hover:text-[#ff8484]" onClick={closeMenu}>Skills</a>
                    <a href="#projects" className="hover:text-[#ff8484]" onClick={closeMenu}>Projects</a>
                    <a href="#contact" className="hover:text-[#ff8484]" onClick={closeMenu}>Contact</a>
                </div> : ""
            }
        </nav>
    );
}

export default Navbar;
