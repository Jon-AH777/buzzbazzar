import BestSeller from "@/components/home/bestSeller/BestSeller";
import NewArrivals from "@/components/home/newArrivals/NewArrivals";
import Category from "@/components/home/slide/Category";
import Slider from "@/components/home/slide/Slider";

export default function Home() {
  return (
    <>
    
        <div className='w-full'>
          <Category />
          <Slider />
          <div className="max-w-container flex flex-col mx-auto gap-4 px-4 py-4">
            <NewArrivals />
            <BestSeller />
          </div>
        </div>
 

    </>
  );
}
