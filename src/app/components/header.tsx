'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <header className="bg-white shadow-sm">
            <div className="bg-gray-100 rounded-sm container mx-auto px-4 flex justify-between items-center h-14">

                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/nav-img/Vector.png" alt="Logo" width={24} height={24} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                > 
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Links */}
                <ul className={`md:flex md:items-center md:space-x-6 font-medium text-black absolute md:static bg-gray-100 md:bg-transparent w-full left-0 md:w-auto p-4 md:p-0  ${isOpen ? "top-14" : "hidden"}`}>
                    <li>
                        <Link href="/productDetail" className="block md:inline hover:text-gray-700 font-medium">Find a Store</Link>
                    </li>
                    <li>
                        <Link href="/contactus" className="block md:inline hover:text-gray-700 font-medium">Help</Link>
                    </li>
                    <li>
                        <Link href="/joinus" className="block md:inline hover:text-gray-700 font-medium">Join Us</Link>
                    </li>
                    <li>
                        <Link href="/login" className="block md:inline hover:text-gray-700 font-medium">Sign In</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
