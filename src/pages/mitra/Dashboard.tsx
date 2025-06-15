import React from "react";
import SidebarMitra from "../../components/SidebarMitra";

const DashboardMitra: React.FC = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <SidebarMitra>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Dashboard Mitra
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Total Kos</h2>
                <p>0</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Total Kamar</h2>
                <p>0</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Total Penghuni</h2>
                <p>0</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Pengajuan</h2>
                <p>15</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Saldo Tersedia</h2>
                <p>Rp.0</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h2 className="card-title">Saldo Penarikan</h2>
                <p>Rp.0</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarMitra>
    </div>
  );
};

export default DashboardMitra;
