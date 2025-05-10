import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { TbHomeStar } from "react-icons/tb";
import { PiGear, PiHandCoins } from "react-icons/pi";
import ProfileUseKost from "../../components/ProfileUseKost";
import ProfileUsePengajuan from "../../components/ProfileUsePengajuan";
import ProfileUseRiwayat from "../../components/ProfileUseRiwayat";
import ProfileUsePengembalian from "../../components/ProfileUsePengembalian";
import ProfileUsePengaturan from "../../components/ProfileUsePengaturan";
import { Link } from "react-router-dom";

const UserProfile: React.FC = () => {
    const [OpenKost, setOpenKost] = useState(false);
    const [OpenPengajuan, setOpenPengajuan] = useState(false);
    const [OpenRiwayat, setOpenRiwayat] = useState(false);
    const [OpenPengembalian, setOpenPengembalian] = useState(false);
    const [OpenPengaturan, setOpenPengaturan] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleKost = () => {
    const newState = !OpenKost;
    setOpenKost(newState);
    setOpenPengajuan(false);
    setOpenRiwayat(false);
    setOpenPengembalian(false);
    setOpenPengaturan(false);
    setActiveIndex(newState ? 0 : null);
    };

    const togglePengajuan = () => {
    const newState = !OpenPengajuan;
    setOpenPengajuan(newState);
    setOpenKost(false);
    setOpenRiwayat(false);
    setOpenPengembalian(false);
    setOpenPengaturan(false);
    setActiveIndex(newState ? 1 : null);
    };

    const toggleRiwayat = () => {
    const newState = !OpenRiwayat;
    setOpenRiwayat(newState);
    setOpenKost(false);
    setOpenPengajuan(false);
    setOpenPengembalian(false);
    setOpenPengaturan(false);
    setActiveIndex(newState ? 2 : null);
    };

    const togglePengembalian = () => {
    const newState = !OpenPengembalian;
    setOpenPengembalian(newState);
    setOpenKost(false);
    setOpenPengajuan(false);
    setOpenRiwayat(false);
    setOpenPengaturan(false);
    setActiveIndex(newState ? 3 : null);
    };

    const togglePengaturan = () => {
    const newState = !OpenPengaturan;
    setOpenPengaturan(newState);
    setOpenKost(false);
    setOpenPengajuan(false);
    setOpenRiwayat(false);
    setOpenPengembalian(false);
    setActiveIndex(newState ? 4 : null);
    };

    const toggleLogOut = () => {
        
    }

    return (
        <div data-theme="light" className="min-h-screen">
            <Navbar />
            <div className="font-poppins w-full p-14">
                <div className="flex flex-row gap-10 text-center mb-6">
                    <div className="w-1/2 text-start">
                        <Link to="/setting">
                            <div className="grid grid-flow-col items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer">
                                <span className="flex flex-row items-center gap-10 font-bold text-2xl justify-self-start">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="rounded-full w-16 "/>
                                    A-None Mouse
                                </span>
                                <RiArrowRightSLine className="text-5xl text-gray-500" />
                            </div>
                        </Link>
                        <div className="ml-4 mt-10 gap-1 flex flex-col items-start">
                            <button onClick={toggleKost}
                                className={`flex flex-row gap-2 items-center w-full rounded-lg transition
                                ${activeIndex === 0 ? 'text-dark' : 'text-gray-400 hover:text-gray-950'}`}>
                                <RiHome2Line className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Kos Saya</span>
                            </button>

                            <hr className="my-4 border-t-2 border-gray-300 rounded-lg w-full" />
                            
                            <button onClick={togglePengajuan} 
                                className={`flex flex-row gap-2 items-center w-full rounded-lg transition
                                ${activeIndex === 1 ? 'text-dark' : 'text-gray-400 hover:text-gray-950'}`}>
                                <CgNotes className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Riwayat Pengajuan Sewa</span>
                            </button>

                            <hr className="my-4 border-t-2 border-gray-300 rounded-lg w-full" />

                            <button onClick={toggleRiwayat} 
                                className={`flex flex-row gap-2 items-center w-full rounded-lg transition
                                ${activeIndex === 2 ? 'text-dark' : 'text-gray-400 hover:text-gray-950'}`}>
                                <TbHomeStar className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Riwayat Kos</span>
                            </button>

                            <hr className="my-4 border-t-2 border-gray-300 rounded-lg w-full" />

                            <button onClick={togglePengembalian} 
                                className={`flex flex-row gap-2 items-center w-full rounded-lg transition
                                ${activeIndex === 3 ? 'text-dark' : 'text-gray-400 hover:text-gray-950'}`}>
                                <PiHandCoins className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Pengembalian Dana</span>
                            </button>

                            <hr className="my-4 border-t-2 border-gray-300 rounded-lg w-full" />

                            <button onClick={togglePengaturan} 
                                className={`flex flex-row gap-2 items-center w-full rounded-lg transition
                                ${activeIndex === 4 ? 'text-dark' : 'text-gray-400 hover:text-gray-950'}`}>
                                <PiGear className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Pengaturan</span>
                            </button>

                            <hr className="my-4 border-t-2 border-gray-300 rounded-lg w-full" />

                            <button onClick={togglePengaturan} 
                                className="flex flex-row gap-2 items-center w-full rounded-lg transition text-red-300 hover:text-red-600">
                                <PiGear className="text-4xl ml-2" />
                                <span className="font-medium text-xl">Log Out</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        {OpenKost && (
                            <ProfileUseKost />
                        )}
                        {OpenPengajuan && (
                            <ProfileUsePengajuan />
                        )}
                        {OpenRiwayat && (
                            <ProfileUseRiwayat />
                        )}
                        {OpenPengembalian && (
                            <ProfileUsePengembalian />
                        )}
                        {OpenPengaturan && (
                            <ProfileUsePengaturan />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;