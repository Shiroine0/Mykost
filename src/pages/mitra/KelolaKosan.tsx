import React, { useState } from "react";
import SidebarMitra from "../../components/SidebarMitra";
import { FiPlus } from "react-icons/fi";

const KelolaKosan: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div data-theme="light" className="min-h-screen">
      <SidebarMitra>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 font-poppins">Kelola Kosan</h1>

          {/* Tombol Tambah Kosan */}
          <button
            className="btn bg-[#7165E3] text-white font-poppins btn-sm sm:btn-md flex items-center gap-2 mb-4"
            onClick={() => setShowAddModal(true)}
          >
            <FiPlus className="text-lg" />
            <span>Tambah Kosan</span>
          </button>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table table-zebra table-md w-full font-poppins">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kos</th>
                  <th>Alamat</th>
                  <th>Jumlah Kamar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Kos Putri Mawar</td>
                  <td>Jl. Melati No.12, Surabaya</td>
                  <td>10</td>
                  <td className="space-x-1">
                    <button
                      className="btn btn-xs btn-info"
                      onClick={() => setShowDetailModal(true)}
                    >
                      Detail
                    </button>
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={() => setShowEditModal(true)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Tambah Kosan */}
        {showAddModal && (
          <Modal title="Tambah Kosan" onClose={() => setShowAddModal(false)}>
            <FormKos />
          </Modal>
        )}

        {/* Modal Detail Kosan */}
        {showDetailModal && (
          <Modal title="Detail Kosan" onClose={() => setShowDetailModal(false)}>
            <div className="space-y-2">
              <p>
                <strong>Nama Kos:</strong> Kos Putri Mawar
              </p>
              <p>
                <strong>Alamat:</strong> Jl. Melati No.12, Surabaya
              </p>
              <p>
                <strong>Jumlah Kamar:</strong> 10
              </p>
              <p>
                <strong>Fasilitas:</strong> Wifi, AC, Dapur
              </p>
              <p>
                <strong>Peraturan:</strong> Tidak boleh membawa tamu lawan jenis
              </p>
              <img
                src="https://via.placeholder.com/300"
                alt="Foto Kos"
                className="rounded mt-2"
              />
            </div>
          </Modal>
        )}

        {/* Modal Edit Kosan */}
        {showEditModal && (
          <Modal title="Edit Kosan" onClose={() => setShowEditModal(false)}>
            <FormKos editMode />
          </Modal>
        )}

        {/* Modal Hapus Kosan */}
        {showDeleteModal && (
          <Modal title="Hapus Kosan" onClose={() => setShowDeleteModal(false)}>
            <p>Apakah kamu yakin ingin menghapus kos ini?</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="btn btn-ghost"
                onClick={() => setShowDeleteModal(false)}
              >
                Batal
              </button>
              <button className="btn btn-error">Hapus</button>
            </div>
          </Modal>
        )}
      </SidebarMitra>
    </div>
  );
};

export default KelolaKosan;

/** Modal Component */
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

/** FormKos Component (digunakan di Tambah dan Edit) */
const FormKos = ({ editMode = false }: { editMode?: boolean }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="label">Nama Kos</label>
        <input
          type="text"
          defaultValue={editMode ? "Kos Putri Mawar" : ""}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Alamat</label>
        <textarea
          defaultValue={editMode ? "Jl. Melati No.12, Surabaya" : ""}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Jumlah Kamar</label>
        <input
          type="number"
          defaultValue={editMode ? "10" : ""}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Fasilitas</label>
        <textarea
          defaultValue={editMode ? "Wifi, AC, Dapur" : ""}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Peraturan Kos</label>
        <textarea
          defaultValue={editMode ? "Tidak boleh membawa tamu lawan jenis" : ""}
          className="textarea textarea-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Upload Foto</label>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          accept="image/*"
          required={!editMode}
        />
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <button type="submit" className="btn btn-primary">
          {editMode ? "Simpan Perubahan" : "Simpan"}
        </button>
      </div>
    </form>
  );
};
