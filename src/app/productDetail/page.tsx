import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Header from "../components/header";
import Navbar from "../components/navBar";

export default function ProductDetail() {
    return (
        <>
        <Header />
        <Navbar />
        <main className="p-32">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="flex justify-center items-center ml-">
                    <Image
                        src="/productDetail/Rectangle (2).png"
                        alt="product"
                        width={653}
                        height={653}
                        className="rounded-md object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col max-w-md mb-40 space-y-10 ml-20">
                    {/* Product Title */}
                    <h1 className="text-3xl md:text-6xl font-semibold text-black leading-tight">
                        Nike Air Force 1 <span>PLT.AF.ORM</span>
                    </h1>
                    

                    {/* Description */}
                    <p className="text-sm md:text-base text-black leading-6">
                        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its
                        inside out -inspired construction, including unique layering and exposed
                        foam accents, ups the ante on this timeless Jordan Brand silhouette. Details
                        like the deco stitching on the Swoosh add coveted appeal, while the
                        unexpected shading, rich mixture of materials, and aged midsole aesthetic
                        give this release an artisan finish.
                    </p>

                    {/* Price */}
                    <span className="text-3xl md:text-5xl font-semibold text-black">
                        ₹ 8,695.00
                    </span>

                    {/* Add to Cart Button */}
                    <button className="flex items-center justify-center gap-2 bg-black text-white text-sm md:text-base font-medium px-6 py-3 w-52 rounded-full hover:bg-gray-800">
                        Add To Cart
                        <CiShoppingCart className="text-2xl" />
                    </button>
                </div>
            </div>
        </main>
        </>
    );
}
