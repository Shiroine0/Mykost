import React, { useEffect, useRef, useState } from "react";
import { BiCamera } from "react-icons/bi";
import { BsArrowLeft, BsExclamationOctagonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import { CgCreditCard } from "react-icons/cg";
import { FaMapMarkedAlt } from "react-icons/fa";
import { CgCreditCard } from "react-icons/cg";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const Sewa: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  const [ktpFile, setKtpFile] = useState<File | null>(null);

  // State untuk menentukan apakah input dapat diubah
  const [isEditable, setIsEditable] = useState<boolean>(false);

  // Fungsi untuk toggle status input
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Ambil file yang dipilih
    if (file) {
      setKtpFile(file); // Simpan file ke state
      console.log("File yang dipilih:", file);
    }
  };

  return (
    <div className="font-poppins flex flex-col p-10 w-full min-h-screen ">
      <div className="flex flex-col bg-white overflow-hidden">
        <Link to="/DetailKost/1">
          <button className="my-4 flex w-1/3 bg-white font-normal">
            <BsArrowLeft className="text-2xl mx-4" />
            <span className="">Kembali</span>
          </button>
        </Link>
        <div className="font-poppins w-2/3">
          <h1 className="text-3xl my-10 font-bold">Skycraper the Shoes</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl mb-2 font-bold">Informasi Penyewa</h2>
            <button onClick={toggleEdit} className="underline font-bold">
              {isEditable ? "Selesai" : "Ubah"}{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-poppins w-2/3">
            <div className="grid grid-cols-2 gap-y-2 gap-x-5">
              <div className="">
                <label className="text-left">Nama</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable} // Jika isEditable false, input menjadi read-only
                />
              </div>
              <div className="">
                <label className="text-left">Jenis Kelamin</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable}
                />
              </div>
              <div className="">
                <label className="text-left">Tanggal Lahir</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable}
                />
              </div>
              <div className="">
                <label className="text-left">Pekerjaan</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable}
                />
              </div>
              <div className="">
                <label className="text-left">Asal Kerja</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable}
                />
              </div>
              <div className="">
                <label className="text-left">No Telepon</label>
                <input
                  type="text"
                  className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                  placeholder="Masukkan nama"
                  readOnly={!isEditable}
                />
              </div>
            </div>

                    <hr className="rounded-lg border border-gray-300 my-7" />

                    {/* Jumlah Orang */}
                    <h1 className="text-3xl font-bold">Jumlah Penyewa</h1>
                    <div className="flex mt-2 flex-col gap-4">
                        <div className="flex items-center flex-row">
                        <button
                            onClick={decrement}
                            className="w-8 h-8 border rounded shadow text-xl flex items-center justify-center"
                        >
                            -
                        </button>
                        <span className="font-semibold text-lg mx-4 ">{count} orang</span>
                        <button
                            onClick={increment}
                            className="w-8 h-8 border rounded shadow text-xl flex items-center justify-center"
                        >
                            +
                        </button>   
                        </div>
                        <span className="text-slate-500 "> Maksimal 2 orang</span>
                        <div className="flex flex-row rounded-lg items-center w-3/5 border border-slate-400">
                            <CiWarning className="my-2 text-3xl text-red-500 mx-2" />
                            {/* make if untuk nanti di formnya */}
                            <span className="my-2 text-sm font-bold">Pemilik kos tidak memperbolehkan membawa hewan peliharaan</span>
                        </div>
                    </div>

                    <hr className="rounded-lg border border-gray-300 my-7" />

            {/* dokumen */}
            <h1 className="text-3xl font-bold">
              Dokumen Persyaratan Masuk kos
            </h1>
            <div className="flex mt-2 flex-col gap-4">
              <span className="text-slate-500">
                Dokumen ini diperlukan pemilik kos untuk verifikasi atau melapor
                ke RT/RW setempat
              </span>
              <div className="ml-3 flex flex-col items-center justify-center rounded-lg p-4 bg-slate-200 w-40">
                <BiCamera className="text-6xl" />
                <span className="text-sm font-semibold py-2 px-4">
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
                  className="cursor-pointer text-blue-500"
                >
                  Pilih file
                </label>
                {ktpFile && (
                  <span className="mt-2 text-xs text-center text-slate-600 break-all max-w-[150px]">
                    {ktpFile.name}
                  </span>
                )}
              </div>
              <span className="ml-3 flex flex-col items-center justify-center w-40 text-sm font-bold">
                Foto KTP
              </span>
              <div className="flex flex-row rounded-lg items-center w-3/5 border border-slate-400">
                <BsExclamationOctagonFill className="my-2 text-3xl text-sky-400 mx-2" />
                <span className="my-2 text-sm font-bold">
                  Pada saat masuk kos, mohon sapkan kartu identitas asli untuk
                  verifikasi
                </span>
              </div>
            </div>

            {/* Durasi Kos */}
            <h1 className="text-3xl font-bold">Durasi Kos</h1>
            <div className="flex flex-col gap-4 mt-2">
              <span className="text-slate-500 ">
                {" "}
                Durasi sewa bisa disesuaikan dikemudian hari
              </span>
              <div className="flex items-center flex-row">
                <button
                  onClick={decrement}
                  className="w-8 h-8 border rounded shadow text-xl flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-semibold text-lg mx-4 ">
                  {count} Bulan
                </span>
                <button
                  onClick={increment}
                  className="w-8 h-8 border rounded shadow text-xl flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <hr className="rounded-lg border border-gray-300 my-7" />

            {/* Tanggal Mulai Kos */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl mb-2 font-bold">Tanggal Mulai Kos</h1>
              <span className="underline text-xl font-semibold">Ubah</span>
            </div>
            <div className="flex mt-2 flex-col gap-4">
              <span>selasa,10 januari 20219</span>
            </div>

                    <hr className="rounded-lg border border-gray-300 my-7" />

            <div className="flex items-center justify-between">
              <h1 className="text-3xl mb-2 font-bold">Metode Pembayaran</h1>
             
            </div>
            <hr className="rounded-lg border border-gray-300 my-7" />

            <button
              type="button"
              className="hover:text-[#7165E3] hover:bg-white border-[#7165E3] bg-[#7165E3] mt-1 mb-3 w-full flex items-center justify-center transition border border-gray-200 text-white  py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal"
            >
              <span>Sewa</span>
            </button>
          </div>

          {/* Rincian Pembayaran sewa */}
          <div className="h-1/4 font-poppins w-1/3 ml-4 font-poppins shadow-lg border rounded-xl p-6 flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Kosan A"
                className=" h-32 object-cover rounded-lg"
              />
              <div className="flex flex-col w-2/3 ml-4">
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
              </div>
            </div>

                    <hr className="w-full border border-gray-300 my-10 mx-auto rounded-lg" />

                    <div className="flex flex-col w-full gap-2">
                        <span className="text-md font-bold">Rincian Pembayaran </span>
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-sm">
                            Biaya sewa kos 
                            </span>
                            <span className="text-sm">Rp.2.000.000</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-sm">
                            Deposit 
                            </span>
                            <span className="text-sm">Rp.200.000</span>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-sm">
                            Biaya sewa kos 
                            </span>
                            <span className="text-sm">Rp.10.000</span>
                        </div>
                        <div className="mt-4 mb-2 font-bold flex flex-row justify-between items-center">
                            <span className="text-md">
                            Total Pembayaran Pertama  
                            </span>
                            <span className="text-md">Rp.2.210.000</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default Sewa;

