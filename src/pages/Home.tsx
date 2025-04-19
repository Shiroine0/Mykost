import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MenuListKost from "../components/MenuListKost";
import BottomCarousel from "../components/BottomCarousel";

const Home = () => {
  return (
    <>
      <html data-theme="light">
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
      </html>
    </>
  );
};

export default Home;
