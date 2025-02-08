import Image from "next/image";

export default function Featured() {
    return (
        <main className="bg-white text-black py-10">
            {/* Featured Section */}
            <div className="container mx-auto px-4 space-y-6">
                {/* Heading */}
                <h2 className="text-2xl font-medium text-left md:text-3xl">
                    Featured
                </h2>

                {/* Image */}
                <div className="w-full">
                    <Image
                        src="/featured/featured.png"
                        alt="Featured Image"
                        width={1344}
                        height={700}
                        className="w-full h-auto object-cover"
                    />
                </div>

                

                {/* Text Content */}
                <div className="text-center mt-8 space-y-9">
                    <h1 className="text-3xl md:text-6xl font-semibold leading-tight mt-14">
                        STEPS INTO WHAT FEELS GOOD
                    </h1>
                    <p className="text-sm md:text-base max-w-md mx-auto text-balance">
                        Cause everyone should know the feeling of running in the perfect pair.
                    </p>

                    {/* Button */}
                    <button className="px-6 py-2 mt-4 rounded-full bg-black text-white font-medium hover:bg-gray-800">
                        Find Your Shoe
                    </button>
                </div>
            </div>
        </main>
    );
}
