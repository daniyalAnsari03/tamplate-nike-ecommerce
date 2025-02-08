import Image from "next/image"
import Link from "next/link"

export default function CheakOutHeader(){
    return(
        <header>
            <div className="container mx-auto px-4 flex justify-between items-center h-14">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href='/'>
                        <Image src="/nav-img/yes.png" alt="nav-logo" width={64} height={21.75} loading="lazy" />
                    </Link>
                </div>

                
                <ul className="flex items-center text-black font-normal space-x-4 md:space-x-6 lg:space-x-11"> 
                    <li><Link href='#'>000 800 100 9538</Link></li>

                    {/* Icons */}
                    <Link href='/'>
                        <Image src="/cheakout/Auto Layout Horizontal.png" alt="nav-logo" width={20} height={20} loading="lazy" />
                    </Link>

                    <Link href='/'>
                        <Image src="/cheakout/Auto Layout Horizontal (1).png" alt="nav-logo" width={20} height={20} loading="lazy" />
                    </Link>
                </ul>
            </div>
        </header>
    )
}
