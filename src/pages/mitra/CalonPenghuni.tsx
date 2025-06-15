import React, {useState} from "react";
import SidebarMitra from "../../components/SidebarMitra";

const CalonPenghuni: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  return (
    <div data-theme="light" className="min-h-screen">
      <SidebarMitra>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 font-poppins">
            Kelola Calon Penghuni
          </h1>
          <div className="overflow-x-auto">
            <table className="table table-zebra table-md w-full font-poppins">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>No. Telepon</th>
                  <th>Nama Kos</th>
                  <th>Alamat Kos</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Ahmad Fauzi</td>
                  <td>08123456789</td>
                  <td>Kos Putri Mawar</td>
                  <td>Jl. Melati No.12, Surabaya</td>
                  <td>Menunggu</td>
                  <td className="space-x-1">
                    <button
                      className="btn btn-xs btn-success"
                      onClick={() => setShowAcceptModal(true)}
                    >
                      Terima
                    </button>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => setShowRejectModal(true)}
                    >
                      Tolak
                    </button>
                    <button
                      className="btn btn-xs btn-info"
                      onClick={() => setShowDetailModal(true)}
                    >
                      Lihat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Modal Detail */}
          {showDetailModal && (
            <Modal
              title="Detail Calon Penghuni"
              onClose={() => setShowDetailModal(false)}
            >
              <div className="space-y-2">
                <p>
                  <strong>Nama:</strong> Ahmad Fauzi
                </p>
                <p>
                  <strong>No. Telepon:</strong> 08123456789
                </p>
                <p>
                  <strong>Nama Kos:</strong> Kos Putri Mawar
                </p>
                <p>
                  <strong>Alamat:</strong> Jl. Melati No.12, Surabaya
                </p>
                <p>
                  <strong>Status:</strong> Menunggu
                </p>
              </div>
            </Modal>
          )}

          {/* Modal Terima */}
          {showAcceptModal && (
            <Modal
              title="Terima Calon Penghuni"
              onClose={() => setShowAcceptModal(false)}
            >
              <p>Apakah Anda yakin ingin menerima calon penghuni ini?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowAcceptModal(false)}
                >
                  Batal
                </button>
                <button className="btn btn-success">Terima</button>
              </div>
            </Modal>
          )}

          {/* Modal Tolak */}
          {showRejectModal && (
            <Modal
              title="Tolak Calon Penghuni"
              onClose={() => setShowRejectModal(false)}
            >
              <p>Apakah Anda yakin ingin menolak calon penghuni ini?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowRejectModal(false)}
                >
                  Batal
                </button>
                <button className="btn btn-error">Tolak</button>
              </div>
            </Modal>
          )}
        </div>
      </SidebarMitra>
    </div>
  );
};

export default CalonPenghuni;

const Modal = ({
  children,
  title,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg font-poppins relative">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
      >
        ×
      </button>
    </div>
  </div>
);


