import React from "react";

const Carousel: React.FC = () => {
  return (
    <>
      <div className="hero bg-[#7165E3] min-h-screen text-white font-poppins">
        <div className="hero-content flex flex-col items-center">
          {/* Section Teks */}
          <div className="max-w-md text-center mb-10">
            <h1 className="text-3xl font-bold">
              Temukan Kosan di kota kota berikut
            </h1>
            <p className="mt-2">Cek kosan di kota anda!</p>
          </div>

          {/* Section Card */}
          <div className="flex justify-center gap-4">
            {["Bandung", "Surabaya", "Semarang", "Jakarta"].map((city) => (
              <div
                key={city}
                className="card bg-base-100 image-full w-80 shadow-sm"
              >
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt={city}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{city}</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
