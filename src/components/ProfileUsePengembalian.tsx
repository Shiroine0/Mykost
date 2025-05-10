import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";

const ProfileUsePengembalian: React.FC = () => {
    const [FileBukti, setFileBukti] = useState<File | null>(null);
      
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Ambil file yang dipilih
        if (file) {
          setFileBukti(file); // Simpan file ke state
          console.log("File yang dipilih:", file);
        }
      };
    return (
        <div className="w-full font-poppins">
            <div className="flex flex-col border rounded-lg bg-gray-50 p-8 mb-6">
                <span className="text-start font-medium text-3xl">Pengembalian Dana</span>

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
                            </div>
                        </div>

                        <hr className="border-t-2 border-dark rounded-lg my-5 w-full" />

                        <div className="ml-3 flex flex-col w-2/3 gap-2 text-start mt-2">
                            <span className="text-sm font-bold">Dokumen persyaratan pengembalian dana</span>
                            <span className="text-gray-400 text-sm">Dokumen ini diperlukan pemilik kos untuk verifikasi pengembalian dana</span>
                            <div className="flex flex-col gap-2 mt-7">
                                <span className="text-sm font-bold">Dokumen persyaratan pengembalian dana</span>
                                <span className="text-gray-400 text-sm">Dokumen ini diperlukan pemilik kos untuk verifikasi pengembalian dana</span>
                                <input type="text" className="border border-gray-300 rounded-lg focus:outline-none p-4" placeholder="Catatan...."/>
                            </div>
                            <span className="font-bold text-sm mt-5">Bukti</span>
                            <div className="flex flex-col items-center justify-center rounded-lg p-4 bg-slate-200 w-32">
                                <BiCamera className="text-5xl" />
                                <span className="text-xs font-semibold py-2">
                                    Upload Disini
                                </span>
                                {/* Input file */}
                                <input
                                    type="file"
                                    id="ktpFile"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="ktpFile"
                                    className="text-xs cursor-pointer text-blue-500"
                                >
                                    Pilih file
                                </label>
                                {FileBukti && (
                                    <span className="mt-2 text-xs text-center text-slate-600 break-all max-w-[150px]">
                                    {FileBukti.name}
                                    </span>
                                )}
                            </div>
                            <span className="ml-1 px-4 text-sm font-bold w-32">Bukti Terkait</span>
                            <div className="flex flex-row rounded-lg items-center w-fit border border-slate-400">
                                <BsExclamationOctagonFill className="my-2 text-3xl text-sky-400 mx-2" />
                                <span className="my-2 text-xs font-bold mr-2">
                                    Tolong upload bukti yang valid dan jelas
                                </span>
                            </div>
                        </div>
                        <button className="bg-[#7165E3] p-2 mt-4 hover:bg-[#5b4fdb] mx-14 text-white font-poppins"> 
                            Ajukan Pengembalian Dana
                        </button>
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default ProfileUsePengembalian;