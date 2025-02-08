import Image from "next/image";
import CheakOutHeader from "../components/cheakOutHeader";

export default function Checkout() {
  return (
    <>
    <CheakOutHeader />
    <main className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row md:gap-32">
      
      {/* Left Section */}
      <div className="flex-1">
        {/* Heading */}
        <h1 className="text-3xl font-medium">How would you like to get your order?</h1>

        {/* Information Box */}
        <div className="text-[#757575] text-lg my-3 mb-10">
          <p>Customs regulation for India require a copy of the recipients
          KYC. The address on the KYC needs to match the shipping
            address. Our courier will contact you via SMS/email to obtain
            a copy of your KYC. The KYC will be stored securely and
            used solely for the purpose of clearing customs (including
              sharing it with customs officials) for all orders and returns. If
              your KYC does not match your shipping address, please click 
              the link for more information. <span className="underline underline-offset-2">Learn More</span></p>
        </div>

        {/* Delivery Input */}
        <div className="flex items-center border border-black rounded-lg p-5 my-4 mb-10">
          <input
            type="text"
            placeholder="Deliver It"
            className="w-full p-2 outline-none placeholder:text-black placeholder:text-lg placeholder:font-medium"
          />
          <Image src="/cheakout/Group.png" alt="Icon" width={24} height={24} />
        </div>

        {/* Name & Address Section */}
        <h2 className="text-2xl font-medium mb-6">Enter your name and address:</h2>

        <div className="space-y- mt-4">
          <input type="text" placeholder="First Name" className="w-full mb-8 p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg rounded" />
          <input type="text" placeholder="Last Name" className="w-full mb-8 p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg rounded" />
          <input type="text" placeholder="Address Line 1" className="w-full p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg rounded" />

          <p className="text-sm text-[#757575] ml-5 mb-4">We do not ship to P.O. boxes</p>

          <input type="text" placeholder="Address Line 2" className="w-full mb-8 p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg rounded" />
          <input type="text" placeholder="Address Line 3" className="w-full p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg rounded" />
        </div>

        {/* State & Country */}
        <div className="flex gap-3 mt-8">
          <button className="w-1/2 p-3 text-[#8D8D8D] text-lg border border-[#CCCCCC] rounded">State/Territory</button>
          <button className="w-1/2 p-3 text-[#000000] text-lg border border-[#CCCCCC] rounded">India</button>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-8 mt-8 text-lg">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Save this address to my profile</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>Make this my preferred address</span>
          </label>
        </div>

        {/* Contact Information */}
        <h3 className="text-2xl font-medium mt-11">Whats your contact information?</h3>
        <div className="space-y- mt-8">
          <input type="email" placeholder="Email" className="w-full p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg  rounded" />

          <p className="text-sm text-[#757575] mb-4 ml-4">A confirmation email will be sent after checkout.</p>
          <input type="number" placeholder="Phone Number" className="w-full p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg  rounded" />
          <p className="text-sm text-[#757575] ml-4">A carrier might contact you to confirm delivery.</p>
        </div>

        {/* PAN Section */}
        <h3 className="text-2xl font-medium mt-10 mb-5">Whats your PAN?</h3>
        <input type="number" placeholder="PAN Number" className="w-full p-4 border border-[#CCCCCC] placeholder:text-[#000000] placeholder:font-normal placeholder:text-lg  rounded mt-3" />

        <p className="text-sm text-[#757575] ml-4">Enter your PAN to enable payment with UPI, Net Banking, or local card methods.</p>

        {/* Checkboxes for PAN */}
        <div className="flex flex-col gap-2 mt-4">
          <label className="flex items-center gap-2 text-[#757575]">
            <input type="checkbox" className="w-4 h-4" />
            <span>Save PAN details to my profile</span>
          </label>
          <label className="flex items-center gap-2 text-[#8D8D8D] mt-16">
            <input type="checkbox" className="w-5 h-5 mb-12" />
            <span>
              I have read and consent to eShopWorld processing my information in accordance with the <span className="underline underline-offset-2">Privacy Statement</span> and <span className="underline underline-offset-2">Cookie Policy</span>. eShopWorld is a trusted Nike partner.
            </span>
          </label>
        </div>

        {/* Continue Button */}
        <button className="w-full p-7 mt-6 text-lg bg-[#F5F5F5] text-[#757575] font-medium rounded-full">Continue</button>

        <hr className="my-7" />

        {/* Steps */}
        <div className=" space-y-">
          <p className="font-medium text-2xl mt-[-12] mb-10">Delivery</p>
          <hr />
          <p className="font-medium text-2xl mt-4 mb-10 text-[#757575]">Shipping</p>
          <hr />
          <p className="font-medium text-2xl mt-4 mb-10 text-[#757575]">Billing</p>
          <hr />
          <p className="font-medium text-2xl mt-4 mb-10 text-[#757575]">Payment</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 md:w-80 space-y-">
        {/* Order Summary Heading */}
        <h1 className="text-3xl font-medium mb-4">Order Summary</h1>

        {/* Price Details */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between text-lg text-[#8D8D8D] mb-4">
            <span>Subtotal</span> 
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between text-lg text-[#8D8D8D] mb-4">
            <span>Delivery/Shipping</span> 
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg ">
            <span>Total</span> 
            <span>₹ 20,890.00</span>
          </div>
          
        </div>

        {/* Price Note */}
        <p className="text-xs text-black mb-10">
          (The total reflects the price of your order, including all duties and taxes)
        </p>

        <h2 className="text-xl font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</h2>

        {/* Product List */}
        <div className="space-y-6 mt-4">
          {/* Product 1 */}
          <div className="flex gap-4 items-center">
            <Image src="/cheakout/Frame.png" alt="Product 1" width={208} height={208} className=""/>
            <div className="text-base">
              <p className="font-medium">Nike Dri-FIT</p> 
              <p>  ADV TechKnit</p> 
              <p>  Ultra Mens</p>
              <p className=""> Short-Sleeve</p>
              <p>Running Top</p>
              <p className="text-[#8D8D8D]">Qty: 1</p>
              <p className="text-[#8D8D8D]">Size L</p>
              <p className="text-[#8D8D8D]">₹ 3,895.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex gap-4 items-center">
            <Image src="/cheakout/Frame (1).png" alt="Product 2" width={208} height={208} className="rounded-md"/>
            <div className="text-base">
              <p className="font-medium">Nike Air Max</p>
              <p>97 SE Mens</p>
              <p className="">Shoes</p>
              <p className="text-[#8D8D8D]">Qty: 1</p>
              <p className="text-[#8D8D8D]">Size: UK 8</p>
              <p className="text-[#8D8D8D]">₹ 16,995.00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
