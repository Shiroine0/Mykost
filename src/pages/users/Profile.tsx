import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { RiArrowRightSLine, RiHome2Line } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { TbHomeStar } from "react-icons/tb";
import { PiGear, PiHandCoins } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import ProfileUseKost from "../../components/ProfileUseKost";
import ProfileUsePengajuan from "../../components/ProfileUsePengajuan";
import ProfileUseRiwayat from "../../components/ProfileUseRiwayat";
import ProfileUsePengembalian from "../../components/ProfileUsePengembalian";
import ProfileUsePengaturan from "../../components/ProfileUsePengaturan";
import { Link } from "react-router-dom";

const UserProfile: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const toggleSection = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const confirmLogout = () => {
        setShowLogoutConfirm(false);
        console.log("Logout berhasil");
        // Tambahkan logika redirect atau clear session di sini
    };

    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        }
    };

    const sections = [
        {
            id: "kost",
            icon: <RiHome2Line className="text-3xl md:text-4xl ml-2" />,
            title: "Kos Saya",
            component: <ProfileUseKost />
        },
        {
            id: "pengajuan",
            icon: <CgNotes className="text-3xl md:text-4xl ml-2" />,
            title: "Riwayat Pengajuan Sewa",
            component: <ProfileUsePengajuan />
        },
        {
            id: "riwayat",
            icon: <TbHomeStar className="text-3xl md:text-4xl ml-2" />,
            title: "Riwayat Kos",
            component: <ProfileUseRiwayat />
        },
        {
            id: "pengembalian",
            icon: <PiHandCoins className="text-3xl md:text-4xl ml-2" />,
            title: "Pengembalian Dana",
            component: <ProfileUsePengembalian />
        },
        {
            id: "pengaturan",
            icon: <PiGear className="text-3xl md:text-4xl ml-2" />,
            title: "Pengaturan",
            component: <ProfileUsePengaturan />
        }
    ];

    return (
        <div data-theme="light" className="min-h-screen bg-white">
            <Navbar />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="font-poppins w-full p-4 md:p-8 lg:p-14 max-w-screen-xl mx-auto"
            >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Sidebar */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-[40%]"
                    >
                        <Link to="/setting">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-between border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer gap-4"
                            >
                                <span className="flex flex-col sm:flex-row items-center gap-4 font-bold text-xl md:text-2xl">
                                    <motion.img
                                        whileHover={{ rotate: 5 }}
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="avatar"
                                        className="rounded-full w-16 sm:w-14"
                                    />
                                    A-None Mouse
                                </span>
                                <RiArrowRightSLine className="text-3xl md:text-4xl text-gray-500" />
                            </motion.div>
                        </Link>

                        {/* Menu Section */}
                        <motion.div
                            variants={containerVariants}
                            className="mt-6 md:mt-10 flex flex-col items-start gap-2"
                        >
                            {sections.map((section, index) => (
                                <React.Fragment key={section.id}>
                                    <motion.button
                                        variants={itemVariants}
                                        onClick={() => toggleSection(index)}
                                        className={`flex items-center w-full rounded-lg px-4 py-2 gap-3 transition text-left ${activeIndex === index
                                                ? "text-dark bg-gray-100"
                                                : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        {section.icon}
                                        <span className="font-medium text-base md:text-lg">{section.title}</span>
                                    </motion.button>

                                    <motion.hr
                                        variants={itemVariants}
                                        className="border-t border-gray-200 w-full"
                                    />
                                </React.Fragment>
                            ))}

                            {/* Logout Button */}
                            <motion.button
                                variants={itemVariants}
                                onClick={handleLogoutClick}
                                className="flex items-center gap-3 w-full rounded-lg px-4 py-2 transition text-red-400 hover:text-red-600 hover:bg-red-50"
                            >
                                <FiLogOut className="text-3xl md:text-4xl ml-2" />
                                <span className="font-medium text-base md:text-lg">Log Out</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Konten */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-[60%] max-h-[80vh] overflow-y-auto"
                    >
                        <AnimatePresence mode="wait">
                            {sections.map(
                                (section, index) =>
                                    activeIndex === index && (
                                        <motion.div
                                            key={section.id}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={contentVariants}
                                            className="h-full"
                                        >
                                            {section.component}
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>

            {/* Modal Logout Confirmation */}
            <AnimatePresence>
                {showLogoutConfirm && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm text-center font-poppins"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <h2 className="text-lg font-semibold mb-2">Yakin ingin logout?</h2>
                            <p className="text-sm text-gray-600 mb-4">Aksi ini akan mengakhiri sesi kamu.</p>
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={cancelLogout}
                                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={confirmLogout}
                                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserProfile;
