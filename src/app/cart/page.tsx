import Image from "next/image";
import CartHeader from "../components/cartHeader";
import CartNavbar from "../components/cartNav";
import Link from "next/link";

export default function CartPage() {
  return (
    <>
      <CartHeader />
      <CartNavbar />
      <div className="mx-auto p-4 md:p-14 max-w-screen-xl flex flex-col md:flex-row md:gap-32">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Left Section - Cart Items */}
          <div className="flex-1 col-span-2 md:col-span-2">
            {/* Free Delivery */}
            <div className="bg-gray-100 w-full border-b border-gray-300 pb-4 mb-4 p-2">
              <h2 className="text-base font-semibold">Free Delivery</h2>
              <p className="text-sm text-black font-normal">
                Applies to orders of ₹14,000 or more.
                <span className="underline cursor-pointer ml-2 md:ml-5 text-black font-medium">
                  View details
                </span>
              </p>
            </div>

            {/* Bag */}
            <h1 className="text-2xl font-medium mt-6">Bag</h1>

            {/* Item 1 */}
            <div className="mt-7 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
              <Image
                src="/cart/Frame.png"
                alt="shirt pic"
                width={120}
                height={120}
                className="w-[100px] md:w-[150px]"
              />
              <div className="flex-1 space-y-1 text-center md:text-left">
                <h3 className="text-lg font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm md:text-lg text-[#757575]">
                  Mens Short-Sleeve Running Top
                </p>
                <p className="text-sm md:text-lg text-[#757575]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm md:text-lg text-[#757575]">
                  Size L
                  <span className="ml-2 md:ml-14">Quantity 1</span>
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                  <Image src="/cart/dil.png" alt="heart" width={24} height={24} />
                  <Image src="/cart/dlt.png" alt="delete" width={24} height={24} />
                </div>
              </div>
            </div>

            <hr className="my-4" />

            {/* Item 2 */}
            <div className="mt-3 pt-4">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-1">
                <h3 className="text-lg font-semibold text-center md:text-left">
                  Nike Air Max 97 SE
                </h3>
                <p className="text-lg font-medium text-[#111111] text-center md:text-right">
                  MRP: ₹16,995.00
                </p>
              </div>
              <p className="text-sm md:text-lg text-[#757575] text-center md:text-left">
                Mens Shoes
              </p>
              <p className="text-sm md:text-lg text-[#757575] text-center md:text-left">
                Flat Pewter/Light Bone/Black/White
              </p>
              <div className="flex flex-col md:flex-row justify-between text-sm mb-2 mt-1">
                <span className="text-lg text-[#757575] text-center md:text-left">
                  Size 8
                </span>
                <span className="text-lg text-[#757575] text-center md:text-right">
                  Quantity 1
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <Image src="/cart/dil.png" alt="heart" width={24} height={24} />
                <Image src="/cart/dlt.png" alt="delete" width={24} height={24} />
              </div>
            </div>
          </div>

          {/* Right Section - Summary */}
          <div className="p-4 md:col-span-1">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
              Summary
            </h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-lg">Subtotal</span>
              <span className="text-lg">₹ 20,890.00</span>
            </div>
            <div className="flex justify-between font-normal text-sm mb-2">
              <span className="text-lg">Estimated Delivery & Handling</span>
              <span className="text-lg">Free</span>
            </div>
            <div className="flex justify-between font-normal text-sm border-t border-gray-200 pt-2">
              <span className="text-base mt-5">Total</span>
              <span className="text-base font-medium mt-5">₹20,890.00</span>
            </div>
            <hr className="my-4" />
            <Link href="checkout">
              <button className="w-full bg-black text-white py-5 mt-4 rounded-full hover:bg-gray-800">
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
