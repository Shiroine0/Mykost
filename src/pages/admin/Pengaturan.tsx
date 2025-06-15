import React from "react";
import SidebarMitra from "../../components/SidebarMitra";

const Pengaturan: React.FC = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <SidebarMitra>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard Mitra</h1>
          <p>Selamat datang di halaman Pengaturan Mitra!</p>
          {/* Kamu bisa tambahkan komponen dashboard lainnya di sini */}
        </div>
      </SidebarMitra>
    </div>
  );
};

export default Pengaturan;
