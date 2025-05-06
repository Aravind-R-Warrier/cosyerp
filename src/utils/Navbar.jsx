import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6  bg-white">
            {/* Logo */}
            <div className="flex items-center  ml-28 ">
                <img src="https://img.freepik.com/premium-vector/abstract-bird-pigeon-dove-letter-v-shape-logo-with-red-vibrant-gradient-color-style_272293-444.jpg?semt=ais_hybrid&w=740" alt="Vyapar Logo" className="h-18 w-auto" />
                <span className="text-[42px] font-bold text-red-600">Cosyerp</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-6 text-gray-500 text-[20px]  mr-40">
                <a href="#" className="hover:text-blue-400">Try mobile app</a>
                <a href="#" className="hover:text-blue-400">Pricing</a>
                <a href="#" className="hover:text-blue-400">About Us</a>
                <a href="#" className="hover:text-blue-400">Desktop</a>
                <a href="#" className="hover:text-blue-400">Careers</a>
                <a href="#" className="hover:text-blue-400">Partner with us</a>
                <a href="#" className="hover:text-blue-400">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
