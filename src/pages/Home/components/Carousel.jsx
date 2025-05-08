// CarouselComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react';


const slides = [
  {
    title: "Freelance Professionals",
    image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp",
    description: `Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.`,
  },
  {
    title: "Freelance Professionals",
    image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp",
    description: `Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.`,
  },
  {
    title: "Freelance Professionals",
    image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp",
    description: `Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.`,
  },
  {
    title: "Freelance Professionals",
    image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp",
    description: `Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.`,
  },
  {
    title: "Freelance Professionals",
    image: "https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/home-page-revamp/Supermarket.webp",
    description: `Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.`,
  },
];

export default function CarouselComponent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-5xl  font-extrabold text-center text-gray-700 mb-6">
        Built for your Industry
      </h2>
      <p className="text-center text-justify text-gray-600 max-w-3xl mx-auto mb-10">
        Vyapar GST billing software and accounting tools have numerous features. Collectively, they help businesses across industries. Vyapar app is built to serve every industry. It is customisable to meet the requirement of your business as per your unique business requirements. Some of the most popular industries use the Vyapar GST accounting software. It helps manage all of their business requirements.
      </p>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-16">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full md:w-1/4 "
              />
              <div className="w-full md:w-1/2 text-left p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{slide.title}</h3>
                <p className="text-gray-700 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
