import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";

const ProfileUsePengembalian: React.FC = () => {
    const [fileBukti, setFileBukti] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileBukti(file);
            console.log("File yang dipilih:", file);
        }
    };

    return (
        <div className="w-full font-poppins p-6">
            <div className="bg-gray-50 border rounded-lg p-6">
                <h1 className="text-3xl font-semibold mb-4">Pengembalian Dana</h1>
                <hr className="border-t border-gray-300 my-4" />

                {/* Card Kos */}
                <div className="bg-white border rounded-xl shadow p-4 mb-8">
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Kosan A"
                            className="w-full max-w-xs lg:w-40 h-40 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                            <h2 className="text-lg font-bold">Skycraper the Shoes</h2>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                <FaMapMarkedAlt className="mr-1" />
                                <span className="font-medium">Jl. Dipatiukur No. 122</span>
                            </div>
                            <button className="mt-2 px-3 py-1 text-sm font-medium border border-gray-600 rounded">
                                Kos Putra
                            </button>
                            <p className="text-xs text-gray-500 mt-1">
                                AC, Meja, Kasur, TV, Lemari, Toilet, Shower
                            </p>
                            <p className="text-sm font-semibold mt-2 text-[#333]">
                                Rp. 2.000.000
                            </p>
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-6" />

                    {/* Form Pengembalian */}
                    <div className="space-y-6 text-sm">
                        <div>
                            <p className="font-semibold">Dokumen Persyaratan</p>
                            <p className="text-gray-500">
                                Dokumen ini diperlukan pemilik kos untuk verifikasi pengembalian dana.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="font-semibold">Catatan</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                                placeholder="Catatan..."
                            />
                        </div>

                        <div>
                            <label className="font-semibold block mb-2">Bukti Upload</label>
                            <div className="bg-slate-100 rounded-lg p-4 w-fit flex flex-col items-center">
                                <BiCamera className="text-4xl mb-2" />
                                <span className="text-xs font-semibold mb-1">Upload di sini</span>
                                <input
                                    type="file"
                                    id="uploadFile"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="uploadFile"
                                    className="text-xs text-blue-500 cursor-pointer"
                                >
                                    Pilih file
                                </label>
                                {fileBukti && (
                                    <span className="mt-1 text-xs text-center text-slate-600 break-all max-w-[150px]">
                                        {fileBukti.name}
                                    </span>
                                )}
                            </div>
                            <span className="mt-2 block text-xs font-bold text-center">
                                Bukti Terkait
                            </span>
                        </div>

                        <div className="flex items-start gap-3 border border-slate-400 rounded-lg p-3 w-fit mt-2">
                            <BsExclamationOctagonFill className="text-sky-400 text-xl" />
                            <span className="text-xs font-semibold">
                                Tolong upload bukti yang valid dan jelas
                            </span>
                        </div>

                        <div className="pt-4">
                            <button className="bg-[#7165E3] hover:bg-[#5b4fdb] text-white w-full py-2 rounded-lg font-medium">
                                Ajukan Pengembalian Dana
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUsePengembalian;
