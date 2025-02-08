"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


const shoes = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "₹ 13,995",
    image: "/bestOAM/best1.png",
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "₹ 13,995",
    image: "/bestOAM/best2.png",
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "₹ 16,995",
    image: "/bestOAM/best3.png",
  },
  {
    id: 4,
    name: "Nike SB Force 58",
    category: "Skate Shoe",
    price: "₹ 5 995.00",
    image: "/bestOAM/best3.png",
  },
];

export default function AirMaxSlider() {
  return (
    <main className="py-6">
      <div className="container px-4 mx-auto ">
        <div className="flex justify-between items-center ">
        <h2 className="text-2xl text-left md:text-3xl font-medium mt-4 mb-4">Best of Air Max</h2>
        <h3 className="text-2xl text-left md:text-xl font-medium mt-4 mb-4">Shop</h3>
        </div>

        {/* Swiper slides */}
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 }, 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="mySwiper "
        >
   {shoes.map((shoe) => (
  <SwiperSlide key={shoe.id}>
    <div className="flex space-x-4 justify-start rounded-4xl mb-6 py-3">
        <Link href="#">
      <Image src={shoe.image} alt={shoe.name} width={441.36} height={441.36} loading="lazy" className="w-full object-cover hover:scale-105" />
      <div className="justify-start mx-2 mt-2 space-y-0">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mt-2">{shoe.name}</h3>
        <p className="text-black text-base font-medium">{shoe.price}</p>
      </div>
      
      <p className="text-[#757575] mt-2 mb-4">{shoe.category}</p> {/* Category ko yahan rakh diya hai */}
      </div>

      </Link>
    </div>

  </SwiperSlide>
))}


        </Swiper>

      </div>
    </main>
  );
}
