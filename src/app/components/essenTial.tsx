import Image from "next/image";

export default function Essentials() {
    return (
        <section className="bg-gray-50 py-">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-medium text-black mb-6">
                    The Essentials
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Men */}
                    <div className="flex justify-center">
                        <Image
                            src="/essential/men.png"
                            alt="Men Essentials"
                            width={440}
                            height={540}
                            className="w-full  object-cover"
                        />
                    </div>

                    {/* Women */}
                    <div className="flex justify-center">
                        <Image
                            src="/essential/women.png"
                            alt="Women Essentials"
                            width={440}
                            height={540}
                            className="w-full max-w- object-cover"
                        />
                    </div>

                    {/* Kids */}
                    <div className="flex justify-center">
                        <Image
                            src="/essential/kid.png"
                            alt="Kids Essentials"
                            width={440}
                            height={540}
                            className="w-full max-w- object-cover "
                        />
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="justify-center text-center mt-[-95px] mr-60">
            <button className="px-6 py-2 bg-white text-black font-semibold text-sm md:text-base rounded-full hover:bg-gray-800">
                        Womens
                    </button>

                    
                    </div>
        </section>
    );
}
