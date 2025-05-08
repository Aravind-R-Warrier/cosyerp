import React from 'react';

const Header = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-40 bg-white">
            {/* Left Section */}
            <div className="max-w-4xl md:w-1/2 sm:w-[400px] ">
                <h1 className="text-[36px] md:text-[60px] font-bold text-gray-700 leading-[1.6] md:leading-[72px]">
                    GST Billing Software in <br className="hidden md:block" />
                    India for Small <br className="hidden md:block" />
                    Businesses
                </h1>

                <p className="mt-6 text-gray-600 text-base md:text-lg  leading-relaxed text-justify w-[300px]">
                    Manage your business professionally with Vyapar, India’s leading software
                    for billing, inventory, and accounting. Join 1
                     Cr+ satisfied SMEs in India who trust Vyapar.
                </p>
                <button className="mt-8  bg-[#e60023] text-white px-20 py-4 md:text-[20px] rounded-lg font-semibold hover:bg-[#cc001f] transition duration-300 shadow-md">
                    Download Vyapar Now!
                </button>
            </div>

            {/* Right Section - Image */}
            <div className="mt-3 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/new-vyapar-hero.webp"
                    alt="Vyapar App"
                    className="w-full max-w-lg"
                />
            </div>
        </section>
    );
};

export default Header;
