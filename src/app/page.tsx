
import BestOfAirMax from "./components/Best";
import Categories from "./components/caTegories";
import DontMiss from "./components/dontMiss";
import Essentials from "./components/essenTial";
import Featured from "./components/feaTured";
import GearUp from "./components/gearUp";
import Header from "./components/header";
import Hero from "./components/heRo";
import Navbar from "./components/navBar";
import ProduceCards from "./products/page";


export default async function HomePage(){

  
  return(
<>

<Header />
<Navbar />
<Hero />
{/* <div className="container mx-auto ">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-20">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.productName || post._id} />
        ))}
      </section>
      </div> */}

<BestOfAirMax />
<Featured />
<GearUp />
<DontMiss />
<ProduceCards />
<Essentials />
<Categories />
</>
)

}