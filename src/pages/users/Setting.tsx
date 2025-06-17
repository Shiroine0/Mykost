import React, { useEffect, useState } from "react";
import { useSearch } from "../../components/searchcontext";
import { GoBell } from "react-icons/go";
import axios from "axios";
import ProfileSettingsEdit from "../../components/ProfileSettingsEdit";

const SettingProfile: React.FC = () => {
    const [userName, setUserName] = useState("Loading...");
    const [input, setInput] = useState("");
    const { setSearch } = useSearch();

    const today = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Jakarta"
    });

    useEffect(() => {
        axios.get("/api/user/profile", { withCredentials: true })
            .then((res) => setUserName(res.data.name))
            .catch((err) => {
                console.error("Failed to fetch user data:", err);
                setUserName("Guest");
            });
    }, []);

    useEffect(() => {
        setSearch(input.trim());
    }, [input, setSearch]);

    return (
        <div className="w-full min-h-screen bg-gray-50" data-theme="light">
            <div className="font-poppins px-4 py-8 sm:px-8 lg:px-14">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 bg-white p-6 rounded-xl shadow-sm">
                    {/* Left Section */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-950">
                            Welcome, {userName}
                        </h1>
                        <input
                            type="text"
                            readOnly
                            value={today}
                            className="bg-transparent text-gray-500 text-sm focus:outline-none cursor-default caret-transparent"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        {/* Search */}
                        <label className="input border border-gray-300 bg-white w-full sm:w-64 flex items-center gap-2 rounded-lg px-3 py-2">
                            <svg
                                className="h-[1em] text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                placeholder="Search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-sm"
                            />
                        </label>

                        {/* Bell Button */}
                        <button className="p-3 bg-white border border-gray-300 rounded-lg hover:shadow-md transition">
                            <GoBell className="text-2xl text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Settings Form */}
                <ProfileSettingsEdit />
            </div>
        </div>
    );
};

export default SettingProfile;
