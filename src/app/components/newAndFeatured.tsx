import React from "react"

import Image from "next/image"
import Link from "next/link"



export default function NewFeatured() {
    return(
        <>
        {/* Product 0 */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 justify-start rounded-4xl mb-6 mt-[-52px]">
        <Link href="#">
            <Image src="/productDetail/Rectangle.png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Force 1 Mid 07</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MPR : ₹ 13 995</h2>
            </div>
        </Link>
 
 {/* Product 1 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (1).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Court Vision Low Next Nature</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 4 995.00</h2>
            </div>
        </Link>
 </div>

{/* Product 2 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (2).png" alt="shoe" width={348} height={348}  loading="lazy"className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Force 1 PLT.AF.ORM</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product 3 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (3).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Force 1 React</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 13 295.00</h2>
            </div>
        </Link>
 </div>

{/* Product 4 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (4).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Promo Exclusion</h2>
                <h1 className="font-semibold text-base text-black">Air Jordan 1 Elevate Low</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 11 895.00</h2>
            </div>
        </Link>
 </div>

{/* Product 5 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (5).png" alt="shoe" width={348} height={348} loading="lazy"className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Standard Issue</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Basketball Jersey</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 2 895.00</h2>
            </div>
        </Link>
 </div>

{/* Product 6 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (6).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Promo Exclusion</h2>
                <h1 className="font-semibold text-base text-black">Nike Dunk Low Retro SE</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 9 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product 7 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (7).png" alt="shoe" width={348} height={348} loading="lazy"className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Sustainable Materials</h2>
                <h1 className="font-semibold text-base text-black">Nike Dri-FIT UV Hyverse</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Short-Sleeve Graphic Fitness Top</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 2 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 8 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle(8).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Court Vision Low</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 5 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product 9 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (9).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Dri-FIT Ready</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Short-Sleeve Fitness Top</h3>
                <h3 className="font-normal text-base text-[#757575]">3 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 9 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product 10 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (10).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike One Leak Protection: Period</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Mid-Rise 18cm (approx.) Biker Shorts</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 3 395.00</h2>
            </div>
        </Link>
 </div>

{/* Product 11 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (11).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Force 1 LV8 3</h1>
                <h3 className="font-normal text-base text-[#757575]">Older Kids&apos; Shoe</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 7 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 12 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (12).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Blazer Low Platform</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 195.00</h2>
            </div>
        </Link>
 </div>

{/* Product 13 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (13).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Force 1 07</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 195.00</h2>
            </div>
        </Link>
 </div>

{/* Product 14 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (14).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Pro Dri-FIT</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Tight-Fit Sleeveless Top</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 1 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product `15 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (15).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Dunk Low Retro</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product `16 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (16).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Max SC</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 5 995.00</h2>
            </div>
        </Link>
 </div>

{/* Product 17 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (17).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Dri-FIT UV Miler</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Short-Sleeve Running Top</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 1 695.00</h2>
            </div>
        </Link>
 </div>

{/* Product 18 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (18).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Air Max SYSTM</h1>
                <h3 className="font-normal text-base text-[#757575]">Older Kids&apos; Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 6 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 19 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle  (19).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Alate All U</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Light-Support Lightly Lined U-Neck Printed Sports Bra</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 2 195.00</h2>
            </div>
        </Link>
 </div>

{/* Product 20 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (20).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Court Legacy Lift</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 7 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 21 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle(211).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Swoosh</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Medium-support Padded Sports Bra Tank</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 3 095.00</h2>
            </div>
        </Link>
 </div>

{/* Product 22 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (21).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike SB Zoom Janoski OG+</h1>
                <h3 className="font-normal text-base text-[#757575]">Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 595.00</h2>
            </div>
        </Link>
 </div>

{/* Product 23 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (22).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Dri-FIT Run Division Rise 365</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Running Tank</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 3 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 24 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (23).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Dri-FIT Challenger</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens 18cm (approx.) 2-in-1 Versatile Shorts</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 2 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 25 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (24).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Jordan Sereis ES</h1>
                <h3 className="font-normal text-base text-[#757575]">Mens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 7 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 26 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (25).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Outdoor Play</h1>
                <h3 className="font-normal text-base text-[#757575]">Older Kids&apos; Oversized Woven Jacket</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 3 895.00</h2>
            </div>
        </Link>
 </div>

{/* Product 27 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (26).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Sportswear Trend</h1>
                <h3 className="font-normal text-base text-[#757575]">Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts</h3>
                <h3 className="font-normal text-base text-[#757575]">2 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 2 495.00</h2>
            </div>
        </Link>
 </div>

{/* Product 28 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (27).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike Blazer Low 77 Jumbo</h1>
                <h3 className="font-normal text-base text-[#757575]">Womens Shoes</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 8 595.00</h2>
            </div>
        </Link>
 </div>

{/* Product 29 */}
 <div className="flex space-x-4 justify-start rounded-4xl mb-6">
        <Link href="#">
            <Image src="/productDetail/Rectangle (28).png" alt="shoe" width={348} height={348} loading="lazy" className="mt-6 hover:scale-105" />
            <div className=" justify-start mx-2 mt-2 space-y-0">
                <h2 className="text-[#9E3500] font-semibold text-lg">Just In</h2>
                <h1 className="font-semibold text-base text-black">Nike SB Force 58</h1>
                <h3 className="font-normal text-base text-[#757575]">Skate Shoe</h3>
                <h3 className="font-normal text-base text-[#757575]">1 Colour</h3>
                <br />
                <h2 className="font-semibold text-base ">MRP : ₹ 5 995.00</h2>
            </div>
        </Link>
 </div>
 </div>
 </>
    )
}