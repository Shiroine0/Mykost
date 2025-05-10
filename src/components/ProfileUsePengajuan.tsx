import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { PiTrashSimple } from "react-icons/pi";

const ProfileUsePengajuan: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col border rounded-lg bg-gray-50 p-8 mb-6">
                <span className="text-start font-medium text-3xl">Riwayat Pengajuan Sewa</span>

                <hr className="border-t-2 border-dark rounded-lg my-5 w-full" />

                <div className="flex flex-col gap-4">
                    {/* Card 1 */}
                    <div className="font-poppins w-full font-poppins shadow-md border rounded-xl p-4 flex flex-col">
                        <div className="flex flex-row items-center">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Kosan A"
                            className="h-40 object-cover rounded-lg"
                            />
                            <div className="flex text-start flex-col w-2/3 ml-4">
                                <h2 className="text-lg font-bold">Skycraper the Shoes</h2>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                    <FaMapMarkedAlt className="mr-1" />
                                    <span className="font-medium">Jl Dipatiukur No 122</span>
                                </div>
                                <button className="w-fit px-2 py-1 my-2 text-sm font-semibold border border-black rounded">
                                    Kos Putra
                                </button>
                                <span className="text-slate-500 text-xs ">
                                    AC,Meja,Kasur,Tv,Lemari,Toilet,Shower
                                </span>
                                <span className="text-sm font-semibold mt-2">
                                    Rp.2.000.000
                                </span>
                                <div className="flex text-end items-center justify-end gap-7 mt-2">
                                    <PiTrashSimple className="text-end text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
                                    <button className="bg-[#7165E3] py-1 px-2 hover:bg-[#5b4fdb] text-white font-poppins rounded-lg">
                                        <span className="text-sm">Ajukan Sewa</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* Card 2 */}
                    <div className="font-poppins w-full font-poppins shadow-md border rounded-xl p-4 flex flex-col">
                        <div className="flex flex-row items-center">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Kosan A"
                            className="h-40 object-cover rounded-lg"
                            />
                            <div className="flex text-start flex-col w-2/3 ml-4">
                                <h2 className="text-lg font-bold">Skycraper the Shoes</h2>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                    <FaMapMarkedAlt className="mr-1" />
                                    <span className="font-medium">Jl Dipatiukur No 122</span>
                                </div>
                                <button className="w-fit px-2 py-1 my-2 text-sm font-semibold border border-black rounded">
                                    Kos Putra
                                </button>
                                <span className="text-slate-500 text-xs ">
                                    AC,Meja,Kasur,Tv,Lemari,Toilet,Shower
                                </span>
                                <span className="text-sm font-semibold mt-2">
                                    Rp.2.000.000
                                </span>
                                <div className="flex text-end items-center justify-end gap-7 mt-2">
                                    <PiTrashSimple className="text-end text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
                                    <button className="bg-[#7165E3] py-1 px-2 hover:bg-[#5b4fdb] text-white font-poppins rounded-lg">
                                        <span className="text-sm">Ajukan Sewa</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* Card 3 */}
                    <div className="font-poppins w-full font-poppins shadow-md border rounded-xl p-4 flex flex-col">
                        <div className="flex flex-row items-center">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Kosan A"
                            className="h-40 object-cover rounded-lg"
                            />
                            <div className="flex text-start flex-col w-2/3 ml-4">
                                <h2 className="text-lg font-bold">Skycraper the Shoes</h2>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                    <FaMapMarkedAlt className="mr-1" />
                                    <span className="font-medium">Jl Dipatiukur No 122</span>
                                </div>
                                <button className="w-fit px-2 py-1 my-2 text-sm font-semibold border border-black rounded">
                                    Kos Putra
                                </button>
                                <span className="text-slate-500 text-xs ">
                                    AC,Meja ,Kasur,Tv,Lemari,Toilet,Shower
                                </span>
                                <span className="text-sm font-semibold mt-2">
                                    Rp.2.000.000
                                </span>
                                <div className="flex text-end items-center justify-end gap-7 mt-2">
                                    <PiTrashSimple className="text-end text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
                                    <button className="bg-[#7165E3] py-1 px-2 hover:bg-[#5b4fdb] text-white font-poppins rounded-lg">
                                        <span className="text-sm">Ajukan Sewa</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    );
}

export default ProfileUsePengajuan;