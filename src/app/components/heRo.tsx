import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-gray-50 ">
            {/* Title and Subtitle Section */}
            <div className="bg-gray-100 rounded-sm container mx-auto px-4 text-center">
                <div className="text-lg font-medium text-black">
                    Hello Nike App
                </div>
                <h3 className="mt-2 text-sm text-black">
                    Download the app to access everything Nike.
                    <span className="underline font-semibold">Get Your Great</span>
                </h3>
            </div>

            {/* Image Section */}
            <div className="">
                <Image
                    src="/hero/Image.png"
                    alt="shoe"
                    width={1344}
                    height={700}
                    className="mx-auto object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="container mx-auto px-4 mt-10 text-center space-y-0">
                <h3 className="text-lg font-medium text-black">First Look</h3>

                <h1 className="text-7xl font-semibold text-black">
                    NIKE AIR MAX PULSE
                </h1>
<br />
                <p className="text-base text-black max-w-2xl mx-auto">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
                    Pulse — designed to push you past your limits and help you go to the
                    max.
                </p>

                {/* Button Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <button className="px-7 py-2 mt-7 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        Notify Me
                    </button>
                    <button className="px-5 py-2 mt-7 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        Shop Air Max
                    </button>
                </div>
            </div>
        </div>
    );
}
