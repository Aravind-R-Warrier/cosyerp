import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Use heroicons or lucide-react for icons
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-white shadow-md">
                {/* Logo */}
                <div className="flex items-center ml-4 md:ml-28">
                    <Link to={'/'}>
                        <img
                            src="https://img.freepik.com/premium-vector/abstract-bird-pigeon-dove-letter-v-shape-logo-with-red-vibrant-gradient-color-style_272293-444.jpg?semt=ais_hybrid&w=740"
                            alt="Cosyerp Logo"
                            className="h-14 w-auto mr-2"
                        />
                        </Link>

                    <span className="text-[32px] font-bold text-red-600">Cosyerp</span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 text-gray-600 text-lg mr-8 md:mr-40">
                    <Link to={'/mobile'}>Try mobile app</Link>
                    <Link to={'/pricing'}>Pricing</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/desktop'}>Desktop</Link>
                    <Link to={'/careers'}>Careers</Link>
                    <Link to={'/partner'}>Partner</Link>
                    <Link to={'/login'}>Login</Link>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden z-50" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col p-6 text-gray-700 text-lg gap-4 mt-16">
                    <a href="#" onClick={toggleMenu}>Try mobile app</a>
                    <a href="#" onClick={toggleMenu}>Pricing</a>
                    <a href="#" onClick={toggleMenu}>About Us</a>
                    <a href="#" onClick={toggleMenu}>Desktop</a>
                    <a href="#" onClick={toggleMenu}>Careers</a>
                    <a href="#" onClick={toggleMenu}>Partner</a>
                    <a href="#" onClick={toggleMenu}>Login</a>
                </div>
            </div>

            {/* Background overlay when menu is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};

export default Navbar;
