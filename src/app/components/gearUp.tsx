

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
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    category: "Men's Short-Sleeve Running Top",
    price: "₹ 3 895",
    image: "/gearUp/image.png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2 495",
    image: "/gearUp/image1.png",
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV Run Division",
    category: "Women's Long-Sleeve Running Top",
    price: "₹ 5 295",
    image: "/gearUp/image2.png",
  },
  {
    id: 4,
    name: "Nike Fast",
    category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: "₹ 3 795",
    image: "/gearUp/image3.png",
  },
];

export default function AirMaxSlider() {
  return (
    <main className="py-6">
      <div className="container px-4 mx-auto ">
        <h2 className="text-2xl text-left md:text-3xl font-medium mt-4 mb-4">Gear Up</h2>

        <div className="flex justify-center items-center gap-8 sm:gap-16 md:gap-32 lg:gap-96 py-4 text-lg font-medium">
    <p className="mr-0 sm:mr-10 md:mr-20">Shop Mens</p>
    <p className="ml-0 sm:ml-10 md:ml-20">Shop Womens</p>
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
    <div className="flex space-x-4 justify-start rounded-4xl mb-6 py-4">
        <Link href="#">
      <Image src={shoe.image} alt={shoe.name} width={441.36} height={441.36} className=" object-cover hover:scale-105" />
      <div className="justify-start mx-2 mt-2 space-y-0">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mt-2">{shoe.name}</h3>
        <p className="text-black text-base font-medium">{shoe.price}</p>
      </div>
      
      <p className="text-[#757575] mt-2 mb-4">{shoe.category}</p>
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
