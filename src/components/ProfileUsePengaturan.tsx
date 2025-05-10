import React from "react";
import { GoShield } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";

const ProfileUsePengaturan: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col border rounded-lg bg-gray-50 gap-10 p-8 mb-6">
                <span className="text-start font-medium text-2xl">Pengaturan</span>
                <div className="flex flex-row justify-between w-full items-center gap-2 text-start font-medium cursor-pointer">
                    <span className="flex flex-row items-center gap-2">
                        <GoShield className="text-2xl " /> Privasi
                    </span>
                    <RiArrowRightSLine className="text-2xl text-gray-500" />
                </div>  
            </div> 
        </div>
    );
}

export default ProfileUsePengaturan;