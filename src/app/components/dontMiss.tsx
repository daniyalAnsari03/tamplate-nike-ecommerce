import Image from "next/image";

export default function DontMiss() {
    return (
        <section className="bg-gray-50 py-10">
            {/* Dont's Miss Section */}
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">
                    Dont Miss
                </h2>

                {/* Image Section */}
                <div className="mb-8">
                    <Image
                        src="/dontmiss/dontmiss.png"
                        alt="Don't Miss"
                        width={1344}
                        height={700}
                        className="w-full object-cover "
                    />
                </div>

                {/* Content Section */}
                <div className="text-center space-y-8">
                    {/* Title */}
                    <h1 className="text-2xl md:text-6xl font-semibold mt-14 text-black">
                        FLIGHT ESSENTIALS
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-base text-black max-w-2xl mx-auto">
                        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                    </p>

                    {/* Button */}
                    <button className="px-6 py-2 bg-black text-white text-sm md:text-base rounded-full hover:bg-gray-800">
                        Shop
                    </button>
                </div>
            </div>
        </section>
    );
}
