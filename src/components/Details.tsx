import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaStar, FaBed, FaShower, FaMotorcycle,
} from "react-icons/fa";
import { TbAirConditioning, TbMoodKid } from "react-icons/tb";
import { GiCigarette, GiLovers, GiPoliceOfficerHead, GiTable } from "react-icons/gi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { LuToilet } from "react-icons/lu";
import { BiCar, BiCctv, BiNote, BiWifi } from "react-icons/bi";
import { BsClock, BsPerson } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

// Variants untuk animasi
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const Details = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [showLabel, setShowLabel] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value);
    };

    const handleajukansewa = () => {
        if (!showLabel) {
            setShowLabel(true);
        } else {
            navigate("/Sewa");
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-poppins flex flex-col hero min-h-screen px-4 py-8"
        >
            <div className="hero-content items-start flex flex-col lg:flex-row-reverse gap-10 w-full">
                {/* Gambar Utama & Preview */}
                <motion.div variants={fadeUp} className="w-full lg:w-2/3">
                    <img
                        className="rounded-2xl mb-6 object-cover w-full max-h-[400px]"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Kosan A"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {Array(4)
                            .fill("")
                            .map((_, i) => (
                                <img
                                    key={i}
                                    className="rounded-2xl w-full object-cover"
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Preview"
                                />
                            ))}
                    </div>

                    {/* Deskripsi Kos */}
                    <div className="mt-6">
                        <div className="flex flex-col sm:flex-row justify-between">
                            <h1 className="text-3xl font-bold">Skyscraper the Shoes</h1>
                            <span className="flex items-center text-lg font-medium mt-2 sm:mt-0">
                                4.5 <FaStar className="ml-2 text-yellow-500" />
                            </span>
                        </div>
                        <h2 className="text-xl font-medium mt-1">Rp.2.000.000/Bulan</h2>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="text-[#7165E3] border-[#7165E3] hover:text-white hover:bg-[#7165E3] my-3 p-2 w-fit px-4 transition border border-gray-200 rounded-lg text-sm shadow-sm hover:shadow-md"
                        >
                            Kos Putra
                        </motion.button>

                        {/* Fasilitas Kamar */}
                        <h2 className="text-2xl font-bold mt-6">Fasilitas Kamar</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 mt-4">
                            {[{ icon: <TbAirConditioning />, label: "AC" }, { icon: <GiTable />, label: "Meja" }, { icon: <RiArchiveDrawerLine />, label: "Lemari" }, { icon: <FaBed />, label: "Kasur" }, { icon: <FiTv />, label: "TV" }, { icon: <LuToilet />, label: "Toilet" }, { icon: <FaShower />, label: "Shower" }].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Fasilitas Umum */}
                        <h2 className="text-2xl font-bold mt-8">Fasilitas Umum</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 mt-4">
                            {[{ icon: <BiWifi />, label: "Wifi" }, { icon: <BiCctv />, label: "CCTV" }, { icon: <GiPoliceOfficerHead />, label: "Satpam" }, { icon: <FaMotorcycle />, label: "Parkiran Motor" }, { icon: <BiCar />, label: "Parkiran Mobil" }, {  label: "Dapur" }].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Peraturan Kos */}
                        <h2 className="text-2xl font-bold mt-8">Peraturan Kos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mt-4">
                            {[{ icon: <BsClock />, label: "Akses 24 jam" }, { icon: <FaBed />, label: "Maks. 2 orang/kamar" }, { icon: <GiCigarette />, label: "Dilarang merokok di kamar" }, { icon: <BsPerson />, label: "Tamu bebas berkunjung" }, { icon: <TbMoodKid />, label: "Dilarang membawa anak kecil" }, { icon: <GiLovers />, label: "Tidak untuk pasutri" }].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Ketentuan Sewa */}
                        <h2 className="text-2xl font-bold mt-8">Ketentuan Pengajuan Sewa</h2>
                        <div className="mt-4 space-y-3">
                            <p><span className="font-semibold">Bisa bayar DP (uang muka) dulu.</span> DP adalah 30% dari biaya.</p>
                            <div className="flex items-center gap-2"><BiNote /><span className="text-sm">Bisa langsung ngekos di hari H</span></div>
                            <div className="flex items-center gap-2"><SlCalender /><span className="text-sm">Maksimal 1 bulan setelah pengajuan</span></div>
                            <div className="flex items-center gap-2"><FaBed /><span className="text-sm">Wajib sertakan KTP</span></div>
                        </div>
                    </div>
                </motion.div>

                {/* Sidebar Form */}
                <motion.div
                    variants={fadeUp}
                    className="w-full lg:w-1/3 shadow-lg border rounded-xl p-4 flex flex-col mt-6 lg:mt-0"
                >
                    {showLabel && (
                        <label className="text-xl font-bold mb-2">Rp.2.000.000</label>
                    )}

                    <div className="w-full flex flex-col gap-2 sm:flex-row sm:gap-2">
                        <input type="date" className="input input-bordered w-full" />
                        <select
                            className="select select-bordered w-full"
                            value={selectedMonth}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Per Bulan</option>
                            <option value="Januari">Januari</option>
                            <option value="Februari">Februari</option>
                            <option value="Maret">Maret</option>
                            <option value="April">April</option>
                        </select>
                    </div>

                    {showLabel && (
                        <div className="mt-4 space-y-2">
                            <div className="text-sm">Biaya DP: <strong>Rp.500.000</strong></div>
                            <div className="text-sm">Pelunasan: <strong>Rp.1.500.000</strong></div>
                            <div className="border-t border-gray-300 my-2"></div>
                            <div className="flex justify-between font-bold">
                                <span>Total Pembayaran Pertama</span>
                                <span>Rp.2.000.000</span>
                            </div>
                        </div>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="text-[#7165E3] border-[#7165E3] hover:bg-gray-200 mt-4 w-full transition border py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md"
                    >
                        Tanya Pemilik
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleajukansewa}
                        className="hover:bg-[#5b4fdb] border-[#7165E3] bg-[#7165E3] mt-2 w-full text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md"
                    >
                        Ajukan Sewa
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Details;
