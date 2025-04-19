import React from "react";

const MenuListKost: React.FC = () => {
  return (
    <div className="w-full px-8 py-12 bg-white">
      {/* Bagian Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Rekomendasi kosan</h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button className="px-4 py-2 rounded-full border border-gray-400 text-sm hover:bg-[#FFF8F6] transition">
          Lihat selengkapnya
        </button>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan A<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Fasilitas lengkap, lokasi strategis.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Putri</div>
              <div className="badge badge-outline">AC</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan B<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Kosan nyaman dan bersih.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Putra</div>
              <div className="badge badge-outline">Wifi</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan C<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Dekat kampus dan pusat kota.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Campur</div>
              <div className="badge badge-outline">Parkir</div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan D<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Kosan tenang dan asri.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Putra</div>
              <div className="badge badge-outline">Kamar Mandi Dalam</div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 5"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan E<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Harga terjangkau dengan fasilitas lengkap.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Putri</div>
              <div className="badge badge-outline">Dapur</div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan 6"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kosan F<div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Kosan eksklusif dengan keamanan 24 jam.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Putra</div>
              <div className="badge badge-outline">Keamanan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuListKost;
