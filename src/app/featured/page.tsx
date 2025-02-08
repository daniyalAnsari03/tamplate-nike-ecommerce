import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import NewFeatured from "../components/newAndFeatured";
import Header from "../components/header";
import Navbar from "../components/navBar";


export default function Featured() {
  return (
    <>
    <Header />
    <Navbar />
    <main className=" my-20 mx-auto flex gap-x-4 lg:gap-x-20 container px-4 space-y-6">
      
      <section className="flex flex-col max-w-[200px]">
        <h1 className="font-semibold text-base  md:text-3xl">New(500)</h1>
        <div className="font-medium text-[18px] lg:text-md max-w-[150px] space-y-2 mt-6 flex flex-col">
          <Link href={""}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>
        </div>
        <div className="mt-10">
          <hr className="h- w-52" />
          <h1 className="font-semibold flex justify-between items-center text-lg mt-1">
            Gender
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-6 space-y-2 text-[9px] lg:text-sm">

          <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Men</span>
            </label>


          <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Women</span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Unisex</span>
            </label>

            
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between text-lg items-center mt-1">
            Kids
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-6 space-y-2 text-[9px] lg:text-sm">


          <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Boys</span>
            </label>


            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Girls</span>
            </label>







            
          </div>
        </div>


        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex text-[9px] lg:text-[18px] justify-between items-center mt-4">
            Shop By Price
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-6 space-y-2 text-[9px] lg:text-sm">

          <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">Under ₹ 2 500.00</span>
            </label>


            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-5 w-5" />
              <span className="text-base">₹ 2 501.00 - ₹ 7 500.00</span>
            </label>
            
            </div>
        </div>
      </section>


      
      <section className="container px-4 space-y-6 mx-auto overflow-clip">
      <div className="w-full h-12 flex items-center justify-end gap-4 ">
  <h1 className="text-lg font-medium flex items-center justify-center gap-2 mt-[-30px]">
    Hide Filters
    <span>
      <FiFilter size={15} />
    </span>
  </h1>
  <h2 className="text-lg font-medium flex items-center justify-end gap-2 mt-[-30px]">
    Sort By
    <span>
      <RiArrowDropDownLine size={25} />
    </span>
  </h2>
</div>


        <div className="grid sm:grid-cols-1   mb-20">
          <NewFeatured />

        </div>
        <hr />
        <section className="my-10">
          <h1 className="font-semibold text-xl">Related Categories</h1>
          <div className="space-x-2 space-y-2 ">
            <br />
            <button className="bg-white px-7 py-2 text-black rounded-full border-[1px] border-[#cccccc] font-normal shadow-none hover:scale-105">
              Best Selling Products
            </button>
            <button className="bg-white border-[#cccccc] font-normal px-7 py-2 text-black rounded-full border-[1px] shadow-none hover:scale-105">
              Best Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[#cccccc] font-normal border-[1px] shadow-none hover:scale-105">
              New Basketball Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[1px] shadow-none border-[#cccccc] font-normal hover:scale-105">
              New Football Shoes
            </button>
            <button className="bg-white border-[#cccccc] font-normal px-7 py-2 text-black rounded-full border-[1px] shadow-none hover:scale-105">
              New Men&apos;s Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[#cccccc] font-normal border-[1px] shadow-none hover:scale-105">
              New Running Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[1px] shadow-none border-[#cccccc] font-normal hover:scale-105">
              Best Men&apos;s Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[1px] shadow-none hover:scale-105 border-[#cccccc] font-normal">
              New Jordan Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black border-[#cccccc] font-normal rounded-full border-[1px] shadow-none hover:scale-105">
              Best Women&apos;s Shoes
            </button>
            <button className="bg-white px-7 py-2 text-black rounded-full border-[1px] border-[#cccccc] font-normal shadow-none hover:scale-105">
              Best Training & Gym
            </button>
          </div>
        </section>
      </section>
    </main>
    </>
  );
}
