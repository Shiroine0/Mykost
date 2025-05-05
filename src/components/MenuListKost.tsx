import React, { useState } from "react";
import { FaMapMarkerAlt, FaBed, FaToilet, FaStar } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import { useSearch } from "./searchcontext";
import { Link } from "react-router-dom";

const MenuListKost: React.FC = () => {
  const [input, setInput] = useState("");
  const { setSearch } = useSearch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    setSearch(value.trim()); // Set search directly without debounce
  };

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
        <Link to="listkost">
          <button className="px-4 py-2 rounded-full border font-poppins border-gray-400 text-sm hover:bg-[#FFF8F6] transition">
            Lihat selengkapnya
          </button>
        </Link>
      </div>

      {/* Pencarian */}
      <div className="mb-8">
        <input
          type="text"
          className="input w-full max-w-xs"
          placeholder="Cari Kosan"
          value={input}
          onChange={handleInputChange}
        />
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
              <p className="font-semibold text-sm">Rp 950.000</p>
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
              <p className="font-semibold text-sm">Rp 850.000</p>
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
              <p className="font-semibold text-sm">Rp 780.000</p>
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

        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default MenuListKost;
