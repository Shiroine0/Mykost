import React from "react";
import { Link } from "react-router-dom"; 

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className=" hover:bg-transparent hover:border-transparent hover:shadow-none btn btn-ghost text-xl">
          KosKos
        </Link>
        <label className="input">
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
          <input type="search" required placeholder="Masukkan Nama Lokasi" />
        </label>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-ghost">Pusat Bantuan</button>
        <button className="btn btn-ghost bg-[#7165E3] text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
