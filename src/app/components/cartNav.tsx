import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaRegHeart } from "react-icons/fa";

export default function CartNavbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image src="/nav-img/yes.png" alt="Logo" width={58} height={58} />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center space-x-6 text-lg font-semibold ml-48 text-black">
                    <li>
                        <Link href="/featured" className="hover:text-gray-700">
                            New & Featured
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700">
                            Men
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700">
                            Women
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700">
                            Kids
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700">
                            Sale
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700">
                            SNKRS
                        </Link>
                    </li>
                </ul>

                {/* Search, Wishlist, and Cart */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-1">
                        <FaSearch className="text-black font-normal size-5" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 text-base pl-2 outline-none h-10 w-full md:w-auto"
                        />
                    </div>

                    {/* Wishlist Icon */}
                    <FaRegHeart className="text-black text-lg hover:text-gray-900 w-6 h-6" />

                    {/* Cart Icon */}
                    <Image
                        src="/cart/logo.png"
                        alt="Cart"
                        width={36}
                        height={36}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <ul className="flex flex-col items-center space-y-2 mt-4 text-sm text-black">
                    <li>
                        <Link href="#" className="hover:text-gray-800">
                            New & Featured
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-800">
                            Men
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-800">
                            Women
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-900">
                            Kids
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-800">
                            Sale
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-800">
                            SNKRS
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
