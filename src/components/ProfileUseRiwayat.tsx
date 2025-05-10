import React from "react";
import { TbHomeStar } from "react-icons/tb";

const ProfileUseRiwayat: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col border rounded-lg bg-gray-50 gap-10 p-8 text-center mb-6">
                <span className="text-start font-medium text-2xl">Kos Saya</span>
                <div className="min-h-96 flex flex-col justify-center items-center text-center text-center place-content-center ">
                    <TbHomeStar className="text-9xl" />
                    <span className="font-medium text-xl flex"> Kamu Belum Menyewa Kos</span>
                    <div className="flex flex-col text-start mx-9 w-full">
                        <span className="text-md">Yuk, sewa di Mamikos masukkan kode dari pemilik kos untuk aktifkan halaman ini coba cara ngekos modern dengan manfaat berikut ini</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileUseRiwayat;