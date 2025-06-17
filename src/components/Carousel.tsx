import React from "react";

const Carousel: React.FC = () => {
  const cities = ["Bandung", "Surabaya", "Semarang", "Jakarta"];

  return (
    <div className="hero bg-[#7165E3] min-h-screen text-white font-poppins px-4 py-12">
      <div className="hero-content flex flex-col items-center w-full max-w-7xl">
        {/* Section Teks */}
        <div className="text-center mb-10 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            Temukan Kosan di Kota-Kota Berikut
          </h1>
          <p className="mt-3 text-sm sm:text-base">
            Cek kosan di kota anda dan temukan tempat tinggal idealmu!
          </p>
        </div>

        {/* Section Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cities.map((city) => (
            <div
              key={city}
              className="card bg-base-100 image-full shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt={city}
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{city}</h2>
                <p className="text-sm text-white/90">
                  Telusuri berbagai pilihan kosan yang nyaman dan strategis di {city}.
                </p>
                <div className="card-actions justify-end mt-auto">
                  <button className="btn btn-sm btn-secondary">Lihat Kos</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
