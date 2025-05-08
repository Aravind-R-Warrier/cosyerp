import React, { useState } from "react";

const features = [
    {
        id: 1,
        title: "Send Estimate and Quotations",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Send%20Estimate.webp?v=0.1", // Replace with actual icon URL
        content: `Send Estimate and Quotations
Using our free billing software, you can easily create useful documents. It includes quotations, estimates, and accurate GST invoices. Inbuilt features in the GST billing app allow you to send quotes/estimates to customers anytime. You can send them directly through WhatsApp, email, SMS, or by printing.
Vyapar billing software provides professional outlook with instant estimates and quotes. The Vyapar app helps automate most processes. It makes the quotes and estimates error-free. Additionally, you can set up a due date for tracking invoices seamlessly.
Further, you can convert your estimates and quotations into sale invoices anytime. All you need is the Vyapar software for billing and its done in a few clicks. Vyapar free billing software offers the business a complete option for quickly saving more time getting instant quotes. Using the accounting software, you can manage your business with higher productivity.
The billing app brings a professionalism for your valued customers to attract them back. Choosing advanced Software for GST billing is one of the best investments for your business. Our Billing Software helps simplifies estimates and quotations...`,
    },
    {
        id: 2,
        title: "Track Orders",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Track%20order.webp?v=0.1", // Replace with actual icon URL
        content: `Stay on top of your sales with our order tracking features. Get real-time updates, delivery schedules, and inventory
        loremsync...`,
    },
    {
        id: 3,
        title: "Choose Themes",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Choose%20theme.webp?v=0.1", // Replace with actual icon URL
        content: `Easily switch between modern and professional themes to match your brand. Personalize fonts, layout, and colors...`,
    },
    {
        id: 4,
        title: "Record Expenses",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Record%20expenses.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
    {
        id: 5,
        title: "Receivables and Payables",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Receivable%20and%20payable.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
    {
        id: 6,
        title: "Delivery Challan",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Delivery%20Challan.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
    {
        id: 7,
        title: "Bank Accounts",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Bank%20Account.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
    {
        id: 8,
        title: "Bussiness Reports",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/Business%20Reports.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
    {
        id: 9,
        title: "GST Invoicing / Billing",
        image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/features/GST%20Invoicing.webp?v=0.1", // Replace with actual icon URL
        content: `Create GST-compliant invoices that are ready to be sent to customers or used for tax filing. The invoice templates are...`,
    },
];

export default function Scrollable() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <>
            <div className="flex flex-col justify-center md:flex-row px-6 md:px-20 py-12 bg-white gap-6">
                {/* Left Side - Scrollable Feature List */}
                <div className="w-full md:w-1/3 max-h-[600px] overflow-y-auto space-y-4 ">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            onClick={() => setSelectedId(feature.id)}
                            className={`flex items-center p-10 border rounded-lg cursor-pointer transition shadow-sm ${selectedId === feature.id
                                ? "bg-blue-100 border-blue-500"
                                : "bg-white hover:bg-gray-50"
                                }`}
                        >
                            <img src={feature.image} alt="icon" className="w-10 h-10 mr-4" />
                            <span className="text-2xl font-bold text-gray-800">
                                {feature.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Side - Feature Content */}
                <div className="w-full md:w-[800px] p-10  bg-gray-50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {features.find((f) => f.id === selectedId).title}
                    </h2>
                    <p className="text-gray-700 text-[18px] font-medium leading-relaxed text-justify">
                        {features.find((f) => f.id === selectedId).content}
                    </p>
                </div>
            </div>


            {/* new section */}

            <section className="px-4 md:px-40 py-16 bg-white">
                <h1 className="text-center text-5xl font-bold text-gray-600 p-2 mb-10">Benefits of GST Billing Software</h1>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Column */}
                    <div className="flex flex-col gap-12 w-full lg:w-1/3">
                        {/* Card 1 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Track your business status</h3>
                            </div>
                            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                                Vyapar business dashboard makes the entire management process seamless. You can check business cash flow, inventory status, open orders, and payment updates in one place.
                            </p>
                            <p className="mt-1 text-red-500 text-sm font-semibold">+ Read more</p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Manage cashflow seamlessly</h3>
                            </div>
                            <p className="mt-2 text-xl text-gray-600 text-sm leading-relaxed">
                                GST billing & accounting software allows businesses to record transactions. It helps track payments. Over 1 crore businesses have tried out our free billing software features...
                            </p>
                            <p className="mt-1 text-red-500 text-sm font-semibold">+ Read more</p>
                        </div>

                        {/* Card 3 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Online/Offline billing</h3>
                            </div>
                            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                                Using our billing tool, you need not stop business operations due to weak internet connectivity. You can use the offline billing...
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src="https://vyaparapp.in/v/z/wp-content/uploads/2024/05/benefits_of_gst_billing_and_invoicing_software.webp"
                            alt="Vyapar App"
                            className="w-[90%] max-w-sm md:max-w-md"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-12 w-full lg:w-1/3">
                        {/* Card 1 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Keep data safe with backups</h3>
                            </div>
                            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                                Using our free GST software for billing in India, you can set up an automatic data backup, allowing you to safeguard the data stored in the app...
                            </p>
                            <p className="mt-1 text-red-500 text-sm font-semibold">+ Read more</p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Build a positive brand image</h3>
                            </div>
                            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                                Providing professional quotes and estimates during negotiation builds a positive brand image. Further, you can provide complete disclosure...
                            </p>
                            <p className="mt-1 text-red-500 text-sm font-semibold">+ Read more</p>
                        </div>

                        {/* Card 3 */}
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="https://img.favpng.com/14/10/5/bullet-google-docs-clip-art-png-favpng-0sW0QEHfCfhtKTwJxdpAdQQ2h.jpg" alt="icon" className="w-5 h-5" />
                                <h3 className="font-bold text-2xl text-gray-800">Plan your inventory space</h3>
                            </div>
                            <p className="mt-2 text-gray-600 text-xl leading-relaxed">
                                Using our GST billing software, you can keep track of available items in your store. It can help you set up low inventory alerts...
                            </p>
                            <p className="mt-1 text-red-500 text-sm font-semibold">+ Read more</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
