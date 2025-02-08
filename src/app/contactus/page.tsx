import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navBar";

export default function ContactUS() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-screen-xl mx-auto p-6">
        {/* First Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium">GET HELP</h1>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="mt-4 w-full max-w-md p-4 placeholder:text-[#757575] border border-[#757575] rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-">
            <h2 className="text-3xl font-medium mt-3">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <br />

            <p className="text-lg mb-5">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>

            <p className="ml-8 text-lg mb-5">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </p>

            <p className="ml-8 text-lg mb-5">
              If you enter your PAN information at checkout, youll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>

            <p className="ml-8 text-lg mb-5">Apple Pay</p>

            <p className="text-lg mb-5">
              <span className="text-lg underline font-medium">
                Nike Members
              </span>{" "}
              can store multiple debit or credit cards in their profile for
              faster checkout. If youre not already a Member,{" "}
              <span className="text-lg underline font-medium">join us</span>{" "}
              today.
            </p>

            <div className="flex gap-4 mt-4">
              <button className="px-6 py-2 text-xl bg-black text-white hover:bg-gray-800 rounded-full">
                JOIN US
              </button>
              <button className="px-6 py-2 text-xl bg-black text-white hover:bg-gray-800 rounded-full">
                SHOP NIKE
              </button>
            </div>

            {/* FAQs */}
            <h3 className="text-2xl font-medium mt-6">FAQs</h3>
            <p>
              <strong className="text-lg">
                Does my card need international purchases enabled?
              </strong>
            </p>
            <p className="text-lg mb-6">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>

            <p className="text-lg mb-6">
              Please note, some banks may charge{" "}
              <span className="text-lg underline font-medium">
                a small transaction fee
              </span>{" "}
              for international orders.
            </p>

            <p>
              <strong className="text-lg">
                Can I pay for my order with multiple methods?
              </strong>
            </p>
            <p className="text-lg mb-6">
              No, payment for Nike orders cant be split between multiple
              payment methods.
            </p>

            <p>
              <strong className="text-lg">
                What payment method is accepted for SNKRS orders?
              </strong>
            </p>
            <p className="text-lg mb-6">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>

            <p>
              <strong className="text-lg">
                Why dont I see Apple Pay as an option?
              </strong>
            </p>
            <p className="text-lg mb-6">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              youll need to use a compatible Apple device running the latest
              OS, be signed in to your iCloud account and have a supported card
              in your Wallet. Additionally, youll need to use Safari to use
              Apple Pay on Nike.com.
            </p>

            <p className="text-lg font-normal">Was this answer helpful?</p>

            {/* Feedback Icons */}
            <div className="flex mb-3">
              <Image
                src="/contactus/Frame.png"
                alt="thumbs up"
                width={30}
                height={30}
              />
              <Image
                src="/contactus/Frame (1).png"
                alt="thumbs down"
                width={30}
                height={30}
              />
            </div>

            <h3 className="text-xl font-medium text-[#757575] mb-5">RELATED</h3>
            <p className="font-medium underline text-lg mb-3 ml-10">
              WHAT ARE NIKES DELIVERY OPTIONS?
            </p>
            <p className="font-medium underline text-lg ml-10 mb-8">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </p>
          </div>

          {/* Right Section */}
          <div className="w- p-4 flex flex-col items-center text-center gap-6">
            <h2 className="text-4xl font-medium text-center mb-10">
              CONTACT US
            </h2>

            {/* Image 1 with Text */}
            <div className="flex flex-col items-center text-lg">
              <Image
                src="/contactus/Image.png"
                alt="Call"
                width={64}
                height={64}
                className="mb-10"
              />
              <p className="font-medium">000 800 919 0566</p>
              <p className="font-normal">Products & Orders: 24 hours a day,</p>
              <p className="font-normal">7 days a week</p>
              <p className="font-normal">Company Info & Enquiries: 07:30 -</p>
              <p className="font-normal">16:30, Monday - Friday</p>
            </div>
            <br />
            {/* Image 2 with Text */}
            <div className="flex flex-col items-center text-lg">
              <Image
                src="/contactus/Image (1).png"
                alt="Clock"
                width={64}
                height={64}
                className="mb-8"
              />
              <p className="font-medium">24 hours a day</p>
              <p className="font-normal">7 days a week</p>
            </div>
            <br />
            {/* Image 3 with Text */}
            <div className="flex flex-col items-center text-lg">
              <Image
                src="/contactus/Image (2).png"
                alt="Email"
                width={64}
                height={64}
                className="mb-8"
              />
              <p className="font-medium">Well reply within</p>
              <p className="font-normal">five business days</p>
            </div>
            <br />
            {/* Image 4 with Text */}
            <div className="flex flex-col items-center text-lg">
              <Image
                src="/contactus/Image (3).png"
                alt="Store"
                width={64}
                height={64}
                className="mb-8"
              />
              <p className="font-medium">STORE LOCATOR</p>
              <p className="font-normal">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
