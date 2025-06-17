import React from "react";
import { TbHomeStar } from "react-icons/tb";

const ProfileUseKost: React.FC = () => {
    return (
        <div className="w-full font-poppins px-4">
            <div className="flex flex-col border rounded-lg bg-gray-50 p-6 sm:p-10 mb-6 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-semibold text-start mb-6">Kos Saya</h2>

                <div className="min-h-80 flex flex-col items-center justify-center text-center gap-6">
                    <TbHomeStar className="text-6xl text-gray-400" />

                    <p className="text-lg font-medium">Kamu Belum Menyewa Kos</p>

                    <div className="max-w-md text-gray-600 text-sm sm:text-base">
                        Yuk, sewa di <span className="font-semibold text-[#7165E3]">KosKos</span>! Masukkan kode dari pemilik kos untuk mengaktifkan halaman ini dan mulai cara ngekos modern dengan manfaat menarik.
                    </div>

                    <button className="bg-[#7165E3] hover:bg-[#5b4fdb] text-white font-medium px-6 py-2 rounded-lg transition-all mt-2">
                        Mulai cari dan sewa kos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileUseKost;
