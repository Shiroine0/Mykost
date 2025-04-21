import Navbar from "../components/Navbar";
import { useSearch } from "../components/searchcontext";
import Carousel from "../components/Carousel";
import MenuListKost from "../components/MenuListKost";
import BottomCarousel from "../components/BottomCarousel";
import Footer from "../components/Footer";

const Home = () => {
  const { search } = useSearch();

  return (
    <div data-theme="light" className="min-h-screen">
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-lg text-start">
              <h1 className="text-4xl font-bold text-start font-poppins">
                <span className="text-[#7165E3]">Kosan mu,</span>{" "}
                <span className="text-neutral-800">Prioritas ku.</span>
              </h1>
              <p className="text font-poppins">
                Temukan kosan terbaik mulai dari Rp 700.000 per Bulan.
              </p>
              <div className="flex items-center gap-3 flex-wrap h-36">
                <span className="font-poppins text-sm">
                  Paling Banyak Dicari
                </span>
                <button className="btn btn-sm text-[#414141]">Minimalis</button>
                <button className="btn btn-sm text-[#414141]">
                  Kamar Mandi Dalam
                </button>
                <button className="btn btn-sm text-[#414141]">Wifi</button>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
        <MenuListKost/>
        <BottomCarousel/>
        <Footer />
    </div>
  );
};

export default Home;
