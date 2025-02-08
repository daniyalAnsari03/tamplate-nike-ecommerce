import Link from "next/link";

export default function Categories() {
    return (
        <main className="py-24">
            <div className="container mx-auto px-6 md:px-72">
                <div className="grid grid-cols-1 md:grid-cols-4 text-center md:text-left gap-8">
                    {/* Icons */}
                    <div>
                        <h3 className="text-lg font-bold mb-8">Icons</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Air Force 1
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Huarache
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Air Max 90
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Air Max 95
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shoes */}
                    <div>
                        <h3 className="text-base font-bold mb-8">Shoes</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    All Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Custom Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Jordan Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Running Shoes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Clothing */}
                    <div>
                        <h3 className="text-base font-bold mb-8">Clothing</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    All Clothing
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Modest Wear
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Hoodies & Pullovers
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Shirts & Tops
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kids */}
                    <div>
                        <h3 className="text-base font-bold mb-8">Kids</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Infant & Toddler Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Kids Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Kids Jordan Shoes
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-base font-semibold text-gray-500 hover:text-black">
                                    Kids Basketball Shoes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
