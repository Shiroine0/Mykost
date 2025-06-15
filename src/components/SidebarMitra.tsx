import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarMitraProps {
  children: ReactNode;
}

const SidebarMitra: React.FC<SidebarMitraProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: "Dashboard", path: "/dashboardmitra" },
    { label: "Kelola Kosan", path: "/kelolakosan" },
    { label: "Calon Penghuni", path: "/calonpenghuni" },
    { label: "Penarikan Saldo", path: "/penarikansaldo" },
    { label: "Pengaturan", path: "/pengaturan" },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Konten Halaman */}
        <div className="p-4">{children}</div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <li className="mb-4">
            <Link to="/dashboardmitra" className="text-xl font-bold">
              KosKos
            </Link>
          </li>
          {menuItems.map((item) => (
            <li key={item.path}>
              {currentPath === item.path ? (
                <span className="bg-primary text-white font-semibold px-4 py-2 rounded cursor-default">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMitra;
