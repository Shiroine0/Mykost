import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CgCreditCard } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import { SiShopee, SiOvh } from "react-icons/si";
// GoPay icon does not exist in react-icons/si, using a generic credit card icon as a placeholder
import { FaUniversity } from "react-icons/fa";


const Sewa: React.FC = () => {
  const [personCount, setPersonCount] = useState(1); // ✅ jumlah orang
  const [durationMonth, setDurationMonth] = useState(1); // ✅ durasi kos
  const [ktpFile, setKtpFile] = useState<File | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [, setShowLabel] = useState(false);

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    { id: "bca", label: "BCA", icon: <FaUniversity className="text-blue-500" /> },
    { id: "bni", label: "BNI", icon: <FaUniversity className="text-orange-500" /> },
    { id: "bri", label: "BRI", icon: <FaUniversity className="text-indigo-500" /> },
    { id: "gopay", label: "GoPay", icon: <CgCreditCard className="text-[#00AA13]" /> },
    // { id: "gopay", label: "GoPay", icon: <SiGopay className="text-[#00AA13]" /> }, // Removed because SiGopay does not exist
    { id: "ovo", label: "OVO", icon: <SiOvh className="text-[#4E2780]" /> },
    { id: "dana", label: "Dana", icon: <CgCreditCard className="text-[#0A58CA]" /> },
    { id: "shopeepay", label: "ShopeePay", icon: <SiShopee className="text-[#F53D2D]" /> },
  ];


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setKtpFile(file);
  };

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
    setShowLabel((prev) => !prev);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="font-poppins px-4 py-10 w-full min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* FORM */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow-sm">
          <Link to="/DetailKost/1" className="flex items-center mb-6 text-sm">
            <BsArrowLeft className="mr-2" /> Kembali ke Detail Kos
          </Link>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl font-bold">Skycraper the Shoes</h1>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleEdit}
              className="underline text-sm font-medium mt-2 sm:mt-0"
            >
              {isEditable ? "Selesai" : "Ubah"}
            </motion.button>
          </div>

          {/* FORM INPUT */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {["Nama", "Jenis Kelamin", "Tanggal Lahir", "Pekerjaan", "Asal Kerja", "No Telepon"].map((label, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}>
                <label className="block text-sm mb-1">{label}</label>
                <input
                  type={label === "Tanggal Lahir" ? "date" : "text"}
                  className="w-full p-2 bg-gray-100 rounded-lg focus:outline-none"
                  placeholder={`Masukkan ${label.toLowerCase()}`}
                  readOnly={!isEditable}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* JUMLAH PENYEWA */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Jumlah Penyewa</h2>
            <div className="flex items-center mb-1">
              <button
                onClick={() => setPersonCount((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 border rounded"
              >
                -
              </button>
              <span className="mx-4">{personCount} orang</span>
              <button
                onClick={() => setPersonCount((prev) => Math.min(2, prev + 1))}
                className="w-8 h-8 border rounded"
              >
                +
              </button>
            </div>
            <span className="text-gray-500 text-sm">Maksimal 2 orang</span>
            <div className="flex flex-row rounded-lg items-center w-full sm:w-3/5 border border-slate-400 mt-3">
              <CiWarning className="my-2 text-3xl text-red-500 mx-2" />
              <span className="my-2 text-sm font-bold">
                Pemilik kos tidak memperbolehkan membawa hewan peliharaan
              </span>
            </div>
          </motion.div>

          {/* KTP */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Upload KTP</h2>
            <label className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer w-40">
              <BiCamera className="text-4xl" />
              <span className="text-sm font-medium mt-2">Pilih file</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              {ktpFile && <span className="mt-1 text-xs text-center break-all">{ktpFile.name}</span>}
            </label>
          </motion.div>

          {/* DURASI KOS */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Durasi Kos</h2>
            <div className="flex items-center">
              <button
                onClick={() => setDurationMonth((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 border rounded"
              >
                -
              </button>
              <span className="mx-4">{durationMonth} bulan</span>
              <button
                onClick={() => setDurationMonth((prev) => prev + 1)}
                className="w-8 h-8 border rounded"
              >
                +
              </button>
            </div>
          </motion.div>

          {/* TANGGAL MULAI */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tanggal Mulai Kos</h2>
            <input type="date" className="p-2 border rounded-lg w-1/2" />
          </motion.div>

          {/* PEMBAYARAN */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Metode Pembayaran</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer p-4 rounded-lg border flex flex-col items-center justify-center text-center transition-all
          ${selectedMethod === method.id
                      ? "bg-[#7165E3] text-white border-transparent"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <span className="text-sm font-semibold">{method.label}</span>
                </motion.div>
              ))}
            </div>
            {selectedMethod && (
              <p className="mt-4 text-sm text-gray-600">
                Kamu memilih metode: <span className="font-semibold">{selectedMethod.toUpperCase()}</span>
              </p>
            )}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#7165E3] w-full mt-4 text-white py-3 rounded-lg shadow hover:shadow-md"
          >
            Sewa Sekarang
          </motion.button>
        </div>

        {/* SIDEBAR */}
        <motion.div
          variants={fadeUp}
          className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-sm h-fit"
        >
          <div className="flex gap-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Kosan"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold">Skycraper the Shoes</h3>
              <div className="flex items-center text-sm text-gray-600">
                <FaMapMarkedAlt className="mr-1" /> Jl. Dipatiukur No 122
              </div>
              <span className="text-xs text-gray-400">AC, TV, Meja, dll.</span>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between"><span>Sewa</span><span>Rp.2.000.000</span></div>
            <div className="flex justify-between"><span>Deposit</span><span>Rp.200.000</span></div>
            <div className="flex justify-between"><span>Biaya Admin</span><span>Rp.10.000</span></div>
            <div className="border-t pt-2 mt-2 font-semibold flex justify-between">
              <span>Total</span><span>Rp.2.210.000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sewa;
