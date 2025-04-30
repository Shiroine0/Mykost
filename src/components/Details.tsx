import { FaStar ,FaBath ,FaBed ,FaShower, FaMotorcycle  } from "react-icons/fa";
import { TbAirConditioning, TbMoodKid } from "react-icons/tb";
import { GiCigarette, GiLovers, GiPoliceOfficerHead, GiTable }  from "react-icons/gi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { FiTv } from "react-icons/fi";
import { LuToilet } from "react-icons/lu";
import React, { useState } from "react";
import { BiCar, BiCctv, BiNote, BiWifi } from "react-icons/bi";
import { FaKitchenSet } from "react-icons/fa6";
import { BsClock, BsPerson } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const Details = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    };
    return (
        <div className="font-poppins flex flex-col hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* image kosan */}
                <div className="flex flex-col bg-white overflow-hidden ">
                    <img
                    className="rounded-2xl mb-10 object-cover"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
                    alt="Kosan A"
                    />
                    <div className="flex flex-row justify-between items-center">
                        <img
                        className="mr-4 rounded-2xl w-full object-cover"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Kosan A"
                        />
                        <img
                        className="mr-4 rounded-2xl w-full object-cover"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Kosan A"
                        />
                        <img
                        className="rounded-2xl w-full object-cover"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Kosan A"
                        />
                        <img
                        className="ml-4 rounded-2xl w-full object-cover"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Kosan A"
                        />
                    </div>
                    {/* desc */}
                    <div className="flex flex-row justify-between mt-4">
                        <div className="font-poppins w-2/3">
                            <div className="flex justify-between">
                                <h1 className="text-3xl font-bold">Skycraper the Shoes</h1>
                                <span className="text-center text-lg flex flex-row">4.5<FaStar className="mt-1 text-yellow-500 ml-2" /></span> 
                            </div>
                            <div className="flex items-center mt-1">
                                <h2 className="text-xl font-medium">Rp.2.000.000/Bulan</h2>
                            </div>
                            <button className="text-[#7165E3] border-[#7165E3] hover:text-white hover:bg-[#7165E3] my-3 p-2 flex items-center justify-center transition border border-gray-200 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal">
                                Kos Putra
                            </button>
                        </div>
                        <div className="font-poppins w-1/3 ml-4 font-poppins shadow-lg border rounded-xl p-4 flex flex-col justify-center items-center"> 
                            <div className="w-full flex flex-row justify-between items-center">
                                <input type="date" className="mr-1 input input-bordered w-full max-w-xs" />
                                <select
                                className="ml-1 select select-bordered w-full max-w-xs"
                                value={selectedMonth}
                                onChange={handleChange}
                                >
                                <option value="" disabled>
                                    Per Bulan
                                </option>
                                <option value="Januari">Januari</option>
                                <option value="Februari">Februari</option>
                                <option value="Maret">Maret</option>
                                <option value="April">April</option>
                                </select>                       
                            </div>
                            <button type="button" className="text-[#7165E3] border-[#7165E3] hover:text-white hover:bg-[#7165E3] my-3 w-full flex items-center justify-center transition border border-gray-200 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal">
                                <span>Tanya Pemilik</span>
                            </button>
                            <button type="button" className="hover:text-[#7165E3] hover:bg-white border-[#7165E3] bg-[#7165E3] mt-1 mb-3 w-full flex items-center justify-center transition border border-gray-200 text-white  py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal">
                                <span>Ajukan sewa</span>
                            </button>
                        </div>
                    </div>
                    {/* fasilitas */}
                    <div className="mt-10 w-2/3">
                        <div className="border border-[#000000] rounded-full px-6 py-4">
                            <div className="flex items-center justify-between">
                            <div className="text-left">
                                <h2 className="text-xl font-bold">Dikelola oleh A-none</h2>
                                <p className="text-sm">
                                <span className="text-gray-300">Online </span>30 Menit Lalu
                                </p>
                            </div>
                            <img
                                className="rounded-full w-16 h-16 object-cover"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt=""
                            />
                            </div>
                        </div>

                        <hr className="rounded-lg border border-[#000000] my-7" />

                        <h1 className="text-3xl font-bold my-8">Fasilitas Kamar</h1>
                        <div className="grid grid-flow-col grid-rows-3 mt-5 flex-col gap-4">
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <TbAirConditioning className="text-2xl" />
                                <span className="text-sm">AC</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <GiTable className="text-2xl" />
                                <span className="text-sm">Meja</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <RiArchiveDrawerLine className="text-2xl" />
                                <span className="text-sm">Lemari</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaBed className="text-2xl" />
                                <span className="text-sm">Kasur</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FiTv className="text-2xl" />
                                <span className="text-sm">TV</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <LuToilet className="text-2xl" />
                                <span className="text-sm">Toilet</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaShower className="text-2xl" />
                                <span className="text-sm">Shower</span>
                            </div>
                        </div>

                        <hr className="rounded-lg border border-[#000000] my-7" />

                        <h1 className="text-3xl font-bold my-8">Fasilitas Umum</h1>
                        <div className="grid grid-flow-col grid-rows-3 mt-5 flex-col gap-4">
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BiWifi className="text-2xl" />
                                <span className="text-sm">Wifi</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BiCctv className="text-2xl" />
                                <span className="text-sm">Cctv</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <GiPoliceOfficerHead className="text-2xl" />
                                <span className="text-sm">Satpam</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaMotorcycle className="text-2xl" />
                                <span className="text-sm">Parkiran Motor</span>
                            </div>
                            
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BiCar className="text-2xl" />
                                <span className="text-sm">Parkiran Mobil</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaKitchenSet className="text-2xl" />
                                <span className="text-sm">Dapur</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaShower className="text-2xl text-white" />
                                
                            </div>
                        </div>

                        <hr className="rounded-lg border border-[#000000] my-7" />

                        <h1 className="text-3xl font-bold my-8">Peraturan di Kos</h1>
                        <div className="flex flex-row mt-5 flex-col gap-4">
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BsClock className="text-2xl" />
                                <span className="text-sm">Akses 24 jam</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaBed className="text-2xl" />
                                <span className="text-sm">Maks. 2 orang/ kamar</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <GiCigarette className="text-2xl" />
                                <span className="text-sm">Dilarang merokok di kamar</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BsPerson className="text-2xl" />
                                <span className="text-sm">Tamu bebas berkunjung</span>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <div className="relative inline-block w-6 h-6">
                                    <TbMoodKid className="text-2xl" />
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45" />
                                </div>
                                <span className="text-sm">Dilarang membawa anak kecil </span>
                            </div>

                            <div className="flex my-1 mx-4 items-center gap-2">
                                <GiLovers className="text-2xl" />
                                <span className="text-sm">Tidak untuk pasutri</span>
                            </div>
                        </div>

                        <hr className="rounded-lg border border-[#000000] my-7" />

                        <h1 className="text-3xl font-bold my-8">Ketentuan Pengajuan Sewa</h1>
                        <div className="flex flex-row mt-5 flex-col gap-4">
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <p>
                                    <span className="font-semibold">Bisa bayar dp (uang muka) dulu <br /></span>
                                    Biaya Dp adalah 30% dari biaya yang dipilih 
                                </p>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <BiNote className="text-2xl" />
                                <p>
                                    <span className="text-normal">Waktu mulai ngekos terdekat :</span> <br />
                                    <span className="text-gray-400">Bisa di hari H setelah pengajuan sewa</span>  
                                </p>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <SlCalender className="text-2xl" />
                                <p>
                                    <span className="text-normal">Waktu mulai ngekos terjauh :</span> <br />
                                    <span className="text-gray-400">1 bulan setelah pengajan sewa</span>  
                                </p>
                            </div>
                            <div className="flex my-1 mx-4 items-center gap-2">
                                <FaBed className="text-white text-2xl" />
                                <span className="text-sm">Calon penyewa wajib sertakan ktp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Details;