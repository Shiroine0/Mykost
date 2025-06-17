import React from "react";
import { FaMapMarkerAlt, FaBed, FaToilet, FaStar } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Variants untuk container grid (staggering)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants untuk setiap card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ListKost: React.FC = () => {
  const kostList = [
    {
      id: 1,
      name: "Kosan A",
      price: "Rp 950.000",
      address: "Jl. Merdeka No.12",
      desc: "Fasilitas lengkap, lokasi strategis.",
      size: "3x4m",
      rating: 4.9,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      to: "/detailkost/1",
    },
    {
      id: 2,
      name: "Kosan B",
      price: "Rp 850.000",
      address: "Jl. Sudirman No.10",
      desc: "Kosan nyaman dan bersih.",
      size: "4x5m",
      rating: 4.7,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 3,
      name: "Kosan C",
      price: "Rp 780.000",
      address: "Jl. Diponegoro No.5",
      desc: "Dekat kampus dan pusat kota.",
      size: "3x4m",
      rating: 4.8,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 4,
      name: "Kosan D",
      price: "Rp 820.000",
      address: "Jl. Melati No.2",
      desc: "Kosan tenang dan asri.",
      size: "3x4m",
      rating: 4.6,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 5,
      name: "Kosan E",
      price: "Rp 700.000",
      address: "Jl. Cemara No.3",
      desc: "Harga terjangkau dengan fasilitas lengkap.",
      size: "3x3m",
      rating: 4.5,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 6,
      name: "Kosan F",
      price: "Rp 1.000.000",
      address: "Jl. Anggrek No.9",
      desc: "Kosan eksklusif dengan keamanan 24 jam.",
      size: "5x6m",
      rating: 5.0,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full px-8 py-12 bg-white">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {kostList.map((kost) => {
          const KostCard = (
            <motion.div
              key={kost.id}
              className="font-poppins bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              variants={cardVariants}
            >
              <img className="w-full h-48 object-cover" src={kost.image} alt={kost.name} />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{kost.name}</h2>
                  <p className="font-semibold text-sm">{kost.price}</p>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1" />
                  {kost.address}
                </div>

                <p className="text-sm text-gray-600 mt-2">{kost.desc}</p>

                <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
                  <div className="flex items-center space-x-1">
                    <FaBed /> <span>Kasur</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaToilet /> <span>Toilet</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <LuExpand /> <span>{kost.size}</span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span>{kost.rating}</span> <FaStar className="text-yellow-500 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          );

          return kost.to ? (
            <Link key={kost.id} to={kost.to}>
              {KostCard}
            </Link>
          ) : (
            KostCard
          );
        })}
      </motion.div>
    </div>
  );
};

export default ListKost;
