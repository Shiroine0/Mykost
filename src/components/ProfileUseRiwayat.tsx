import React from "react";
import { TbHomeStar } from "react-icons/tb";

const ProfileUseRiwayat: React.FC = () => {
    return (
        <div className="w-full font-poppins px-4 py-6">
            <div className="bg-gray-50 border rounded-lg p-8 flex flex-col gap-8">
                <h1 className="text-2xl font-semibold text-left">Kos Saya</h1>

                <div className="min-h-96 flex flex-col items-center justify-center text-center">
                    <TbHomeStar className="text-7xl text-gray-400 mb-4" />
                    <p className="text-xl font-medium mb-2">Kamu Belum Menyewa Kos</p>
                    <p className="text-sm text-gray-600 max-w-md">
                        Yuk, sewa di <strong>KosKos</strong>! Masukkan kode dari pemilik kos untuk mengaktifkan halaman ini. Coba cara ngekos modern dengan berbagai manfaat menarik.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileUseRiwayat;
