import Image from "next/image";
import Link from "next/link";

export default function CartHeader() {
    return (
        <header className="bg-white shadow-sm">

            {/* Container to hold logo and navigation */}
            <div className="bg-gray-100 rounded-sm  container mx-auto px-4 flex justify-between items-center h-14">

                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href={'/'}>
                    <Image src="/nav-img/Vector.png" alt="Logo" width={24} height={24} />
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center space-x-6 text-sm text-black">
                    <li>
                        <Link href="#" className="hover:text-gray-700 font-medium">Find a Store</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700 font-medium">Help</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-gray-700 font-medium">Hi, Rajarshi</Link>
                    </li>
                    <Image src="/cart/logo2.png" alt="logo" width={24} height={24} />
                </ul>
            </div>
        </header>
    );
}
