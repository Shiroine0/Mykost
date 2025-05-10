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
    // Fetch user data once on component mount
    axios.get("/api/user/profile", { withCredentials: true }) // withCredentials if you're using cookies
      .then((res) => {
        setUserName(res.data.name); // Adjust field name as per your backend
      })
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
            <div className="font-poppins flex flex-col p-10">
                <div className="flex flex-row justify-between rounded-lg gap-10 p-8 mb-6">
                    <div className="flex flex-col items-center gap-4 text-start font-medium">
                        <span className="text-indigo-950 font-medium text-3xl cursor-default">Welcome, {userName}</span>
                        <input
                            type="text"
                            readOnly
                            value={today}
                            className="focus:outline-none bg-gray-50 text-gray-500 cursor-default caret-transparent w-full max-w-xs"
                        />
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <label className="input border-transparent bg-white">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                required
                                placeholder="Search"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </label>
                        <button className="border border-transparent w-fit h-fit bg-white rounded-lg p-4">
                            <GoBell className="text-2xl"/>
                        </button>
                    </div>
                </div>
                <ProfileSettingsEdit />
            </div>
        </div>
    );
}

export default SettingProfile;  