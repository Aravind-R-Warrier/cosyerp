import React, { useState } from 'react';

const features = [
    {
        icon: "https://vyaparapp.in/v/z/wp-content/uploads/2023/05/happy_customer-1.webp",
        title: "1 Crore+",
        description: "Happy costomers",
    },
    {
        icon: "https://vyaparapp.in/v/z/wp-content/uploads/2023/05/phone_icon-1.webp",
        title: "Free",
        description: "Android Mobile App",
    },
    {
        icon: "https://vyaparapp.in/v/z/wp-content/uploads/2023/05/gplay_store-2.webp",
        title: "Rated 4.7/5",
        description: "On Google Play Store",
    },
    {
        icon: "https://vyaparapp.in/v/z/wp-content/uploads/2023/05/multi_device-1.webp",
        title: "Multi-Device",
        description: "Use together on Mobile/Desktop",
    },
    {
        icon: "https://vyaparapp.in/v/z/wp-content/uploads/2023/05/multi_user-1.webp",
        title: "Multi-User",
        description: "User Management Feature",
    },
];

const Features = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);

    return (
        <section className="py-10 bg-gray-50 px-6 md:px-60">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img src={feature.icon} alt={feature.title} className="w-13 h-13 mb-4" />
                        <h3 className="text-3xl font- text-gray-800">{feature.title}</h3>
                        <p className="mt-2 text-gray-600 text-lg">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Section 1 */}
            <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-40 bg-white">
                <div className="w-full flex justify-center md:justify-start">
                    <img
                        src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/make_gst_bills_and_share_with_your_customers.webp"
                        alt="Vyapar GST Billing"
                        className="w-[600px] max-w-md"
                    />
                </div>
                <div className="w-[800px] mt-8 md:mt-0 ml-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                        Create GST Bills for customers and share them online
                    </h2>
                    <div className="text-gray-600 text-lg space-y-4">
                        <p>Vyapar billing software allows you to generate GST invoices for clients and share them digitally. This tool aids in establishing a</p>
                        {showMore1 && (
                            <>
                                <p>professional brand image with its essential GST billing functionalities...</p>
                                <p>You can utilize the Vyapar accounting and billing app to draft invoices...</p>
                                <p>Using our user-friendly invoicing software to comply with GST norms...</p>
                                <p>Unlike most accounting softwares, Vyapar enables you to create invoices...</p>
                                <p>Vyapar is the free invoicing software. It comes with various useful...</p>
                                <p>Numerous useful features are available in Windows desktop software...</p>
                            </>
                        )}
                        <button
                            onClick={() => setShowMore1(!showMore1)}
                            className="text-red-600 font-semibold mt-2 hover:underline"
                        >
                            {showMore1 ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-0 bg-white">
                <div className="w-full md:w-[800px] md:pr-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                        Manage Inventory Seamlessly
                    </h2>
                    <div className="text-gray-600 text-lg space-y-4">
                        <p>Vyapar brings the finest inventory management software with incredibly effective features...</p>
                        {showMore2 && (
                            <>
                                <p>performance. Using the Vyapar app features like business reports...</p>
                                <p>Tracking is accomplished through batch numbers, expiration dates...</p>
                                <p>Using the free billing software by Vyapar, you can check the live status...</p>
                                <p>Vyapar empowers your employees to take care of your inventory...</p>
                                <p>Using the best billing app, you need not do tasks manually...</p>
                                <p>Another benefit of using Vyapar software is that it gives you statistics...</p>
                            </>
                        )}
                        <button
                            onClick={() => setShowMore2(!showMore2)}
                            className="text-red-600 font-semibold mt-2 hover:underline"
                        >
                            {showMore2 ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[600px] flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/check_inventory_instantly.webp"
                        alt="Manage Inventory"
                        className="w-full max-w-md"
                    />
                </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-40 bg-white">
                <div className="w-full flex justify-center md:justify-start">
                    <img
                        src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/remind_to_recover_payments.webp"
                        alt="Vyapar GST Billing"
                        className="w-[600px] max-w-md"
                    />
                </div>
                <div className="w-[800px] mt-8 md:mt-0 ml-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                        Send Payment Reminders to Recover Dues
                    </h2>
                    <div className="text-gray-600 text-lg space-y-4">
                        <p>Vyapar’s accounting and billing software assists small and medium-sized enterprises (SMEs)...</p>
                        {showMore3 && (
                            <>
                                <p>Vyapar’s accounting and billing software assists SMEs in securing prompt payments...</p>
                                <p>... and managing their cash flow effectively. The platform enables users to monitor all outstanding payments.</p>
                            </>
                        )}
                        <button
                            onClick={() => setShowMore3(!showMore3)}
                            className="text-red-600 font-semibold mt-2 hover:underline"
                        >
                            {showMore3 ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
            </section>
            {/* Section 4 */}
            <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-0 bg-white">
                <div className="w-full md:w-[800px] md:pr-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                    GST filing made simpler and faster
                    </h2>
                    <div className="text-gray-600 text-lg space-y-4">
                        <p>Vyapar brings the finest inventory management software with incredibly effective features...</p>
                        {showMore2 && (
                            <>
                                <p>performance. Using the Vyapar app features like business reports...</p>
                                <p>Tracking is accomplished through batch numbers, expiration dates...</p>
                                <p>Using the free billing software by Vyapar, you can check the live status...</p>
                                <p>Vyapar empowers your employees to take care of your inventory...</p>
                                <p>Using the best billing app, you need not do tasks manually...</p>
                                <p>Another benefit of using Vyapar software is that it gives you statistics...</p>
                            </>
                        )}
                        <button
                            onClick={() => setShowMore2(!showMore2)}
                            className="text-red-600 font-semibold mt-2 hover:underline"
                        >
                            {showMore2 ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[600px] flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/gst_filing_made_simplerAndFaster.webp"
                        alt="Manage Inventory"
                        className="w-full max-w-md"
                    />
                </div>
            </section>
        </section>
    );
};

export default Features;
