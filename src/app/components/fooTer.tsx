import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


export default function Footer() {
    return(
        <footer className="bg-black text-white py-8 px-6">
            <div className="flex justify-between items-center flex-wrap gap-10">
                <div className="flex justify-start gap-10 flex-wrap">

                    {/* Name -1 */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">FIND A STORE</h3>
                        <ul className="space-y-2 text-sm">

                            <li><Link href="#" className="hover:underline"></Link>BECOME A MEMBER</li>
                            <li><Link href="#" className="hover:underline"></Link>SIGN UP FOR EMAIN</li>
                            <li><Link href="#" className="hover:underline"></Link>Send Us Feedback</li>
                            <li><Link href="#" className="hover:underline"></Link>STUDENTS DISCOUNTS</li>
                        </ul>
                    </div>

                    {/* NAme -2 */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">GET HELP</h3>
                        <ul className="space-y-2 text-sm text-[#7E7E7E]">

                            <li><Link href="#" className="hover:underline"></Link>Order Status</li>
                            <li><Link href="#" className="hover:underline"></Link>Delivery</li>
                            <li><Link href="#" className="hover:underline"></Link>Returns</li>
                            <li><Link href="#" className="hover:underline"></Link>Payment Options</li>
                            <li><Link href="#" className="hover:underline"></Link>Contact Us On Nike.com Inquiries</li>
                            <li><Link href="#" className="hover:underline"></Link>Contact Us On All Other Inquiries</li>
                        </ul>
                    </div>
                    </div>

                    {/* Name -3 */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">ABOUT NIKE</h3>
                        <ul className="space-y-2 text-sm text-[#7E7E7E]">
                            
                            <li><Link href="#" className="hover:underline"></Link>News</li>
                            <li><Link href="#" className="hover:underline"></Link>Careers</li>
                            <li><Link href="#" className="hover:underline"></Link>Investors</li>
                            <li><Link href="#" className="hover:underline"></Link>Sustainability</li>
                        </ul>
                    </div>

                    {/* Icons */}
                    <div className="flex justify-start lg:justify-end items-start gap-4 ">
                    <FiTwitter className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
                    </div>     
            </div>

            {/* Section b */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-sm">
                <div className="flex mb-4 md:mb-0 gap-6">
                <IoLocation />
                <p>India</p>
                <p className="text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Link className="hover:underline" href="#" >Guides</Link>
                    <Link className="hover:underline" href="#" >Terms of Sale</Link>
                    <Link className="hover:underline" href="#" >Terms of Use</Link>
                    <Link className="hover:underline" href="#" >Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}