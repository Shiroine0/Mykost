import React from "react";

const ProfileUseKost: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col border rounded-lg bg-gray-50 gap-10 p-8 mb-6">
                <span className="text-start font-medium text-3xl">Kos Saya</span>
                <div className="min-h-96 grid grid-flow-row place-content-center p-14">
                    <span className="font-medium text-xl text-start"> Kamu Belum Menyewa Kos</span>
                    <div className="flex flex-col text-start ">
                        <span className="text-md">Yuk, sewa di Mamikos masukkan kode dari pemilik kos untuk aktifkan halaman ini coba cara ngekos modern dengan manfaat berikut ini</span>
                        <button className="bg-[#7165E3] p-2 mt-4 hover:bg-[#5b4fdb]">
                            <span className="text-white ">Mulai cari dan sewa kos</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileUseKost;