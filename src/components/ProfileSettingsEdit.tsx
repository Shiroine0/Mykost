import React from "react";
import { IoMdMail } from "react-icons/io";

const ProfileSettingsEdit: React.FC = () => { 
    return (
        <div className="p-2">
            <div className="flex flex-col p-10 gap-3 rounded-lg shadow-lg">
                <div>
                    <div className="flex flex-row items-center gap-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="rounded-full w-32 "/>
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl">
                                A-None Mouse
                            </span>
                            <span className="text-gray-500">
                                A-None_Mouse@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-rows-3 my-3 gap-4 gap-y-2 gap-x-5">
                <div className="">
                    <label className="text-left">Nama</label>
                    <input
                    type="text"
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                    placeholder="Masukkan nama"
                    />
                </div>
                <div className="">
                    <label className="text-left">Jenis Kelamin</label>
                    <input
                    type="text"
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                    placeholder="Masukkan nama"
                    />
                </div>
                <div>
                    <label className="text-left">Tanggal Lahir</label> <br />
                    <input 
                    type="date" 
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full" 
                    />  
                </div>
                <div className="">
                    <label className="text-left">Pekerjaan</label>
                    <input
                    type="text"
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                    placeholder="Masukkan nama"
                    />
                </div>
                <div className="">
                    <label className="text-left">Asal Kerja</label>
                    <input
                    type="text"
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                    placeholder="Masukkan nama"
                    />
                </div>
                <div className="">
                    <label className="text-left">No Telepon</label>
                    <input
                    type="text"
                    className="my-2 bg-gray-100 active:border-[#ffffff] focus:outline-none rounded-lg p-2 w-full"
                    placeholder="Masukkan nama"
                    />
                </div>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="font-semibold "> My Email Address</span>
                    <div className="flex flex-row gap-4 items-center ">
                        <div className=" border rounded-full w-fit bg-[#ecf3fe] p-3">
                            <IoMdMail className="text-xl text-[#7165e3] rounded-full" />
                        </div>
                        <div className="flex flex-col">
                            <span className="">A-None_Mouse@gmail.com</span>
                            <span className="text-gray-400"> 1 Bulan yang lalu</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className=" border rounded-lg w-fit bg-[#ecf3fe] p-2">
                            <button className="text-lg text-[#7165e3] mx-4">+ Add Email Address</button>
                        </div>
                        <div className="flex flex-row gap-8">
                            <button className="border py-2 px-7 rounded-xl border-gray-950 hover:bg-gray-200">Batal</button>
                            <button className="border py-2 px-7 rounded-xl text-white bg-[#7165e3] hover:bg-[#5b4fdb]">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSettingsEdit;