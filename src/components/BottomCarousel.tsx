import React from "react";

const BottomCarousel: React.FC = () => {
  return (
    <>
      <div className="hero bg-[#7165E3] min-h-screen text-white font-poppins">
        <div className="hero-content flex flex-col items-center">
          <div className="max-w-md text-center mb-36">
            <h1 className="text-3xl font-bold">
              Gimana Caranya? Cari Kosan yang Pas Buat Kamu
            </h1>
            <p className="mt-2">
              Temukan kosan sesuai kebutuhanmu dalam 3 langkah sederhana.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="mt-2 text-md font-poppins text-white">
                Temukan Kosan
              </p>
              <p className="mt-2 text-sm font-poppins text-white">
                Cari lokasi dan tipe kosan sesuai kebutuhanmu.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="mt-2 text-md font-poppins text-white">
                Hubungi Pemilik
              </p>
              <p className="mt-2 text-sm font-poppins text-white">
                Langsung ngobrol atau chat dengan pemilik kosan
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="mt-2 text-md font-poppins text-white">
                Lansung Huni
              </p>
              <p className="mt-2 text-sm font-poppins text-white">
                Booking sekarang, masuk kosan kapan aja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomCarousel;
