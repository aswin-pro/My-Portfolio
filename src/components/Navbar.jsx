import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="shadow-lg border-b-black fixed top-0 w-full bg-white z-10">
            <div className="flex justify-between items-center p-3 mx-3 md:p-4 ">
                <h1 className="text-3xl font-medium">As<span className='text-orange-600'>win</span></h1>
                {/* Menu icon for mobile view */}
                <button  className="md:hidden text-2xl "  onClick={toggleMenu} >
                    {isMenuOpen ? 'X' : '☰'}
                </button>
                {/* Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex gap-9 ">
                    <a href="#" className="hover-link">Home</a>
                    <a href="#aboutme" className="hover-link">About</a>
                    <a href="#skills" className="hover-link">Skills</a>
                    <a href="#projects" className="hover-link">Projects</a>
                    <a href="#contact" className="hover-link">Contact</a>
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
