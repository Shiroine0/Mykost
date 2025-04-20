import React from "react";
import { FaMapMarkerAlt, FaBed, FaToilet, FaStar } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";

const MenuListKost: React.FC = () => {
  return (
    <div className="w-full px-8 py-12 bg-white">
      {/* Bagian Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Rekomendasi kosan</h1>
          <p className="text-sm text-gray-600">
            Temukan kosan terbaik untukmu dengan fasilitas lengkap dan lokasi
            strategis.
          </p>
        </div>
        <button className="px-4 py-2 rounded-full border font-poppins border-gray-400 text-sm hover:bg-[#FFF8F6] transition">
          Lihat selengkapnya
        </button>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan A"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan A</h2>
              <p className="font-semibold text-sm text-rose-500">Rp 950.000</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Merdeka No.12
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Fasilitas lengkap, lokasi strategis.
            </p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>3x4m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>4.9</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan B"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan B</h2>
              <p className="font-semibold text-sm text-rose-500">Rp 850.000</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Sudirman No.10
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Kosan nyaman dan bersih.
            </p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>4x5m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>4.7</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan C"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan C</h2>
              <p className="font-semibold text-sm text-rose-500">Rp 780.000</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Diponegoro No.5
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Dekat kampus dan pusat kota.
            </p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>3x4m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>4.8</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan D"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan D</h2>
              <p className="font-semibold text-sm text-rose-500">Rp 820.000</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Melati No.2
            </div>

            <p className="text-sm text-gray-600 mt-2">Kosan tenang dan asri.</p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>3x4m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>4.6</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan E"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan E</h2>
              <p className="font-semibold text-sm text-rose-500">Rp 700.000</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Cemara No.3
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Harga terjangkau dengan fasilitas lengkap.
            </p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>3x3m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>4.5</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img
            className="w-full h-48 object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kosan F"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Kosan F</h2>
              <p className="font-semibold text-sm text-rose-500">
                Rp 1.000.000
              </p>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="mr-1" />
              Jl. Anggrek No.9
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Kosan eksklusif dengan keamanan 24 jam.
            </p>

            <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
              <div className="flex items-center space-x-1">
                <FaBed /> <span>Kasur</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaToilet /> <span>Toilet</span>
              </div>
              <div className="flex items-center space-x-1">
                <LuExpand /> <span>5x6m</span>
              </div>
              <div className="flex items-center font-semibold">
                <span>5.0</span> <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuListKost;
