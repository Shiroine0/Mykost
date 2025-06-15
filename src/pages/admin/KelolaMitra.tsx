import React, { useState } from "react";
import SidebarMitra from "../../components/SidebarMitra";

interface Mitra {
  id: number;
  nama: string;
  email: string;
  alamat: string;
}

const KelolaMitra: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedMitra, setSelectedMitra] = useState<Mitra | null>(null);

  const [mitraData, setMitraData] = useState<Mitra[]>([
    {
      id: 1,
      nama: "Mitra A",
      email: "mitraA@example.com",
      alamat: "Jl. Mawar No.1",
    },
    {
      id: 2,
      nama: "Mitra B",
      email: "mitraB@example.com",
      alamat: "Jl. Melati No.2",
    },
    {
      id: 3,
      nama: "Mitra C",
      email: "mitraC@example.com",
      alamat: "Jl. Kenanga No.3",
    },
  ]);

  // Handler open modals and set selected mitra
  const openDetailModal = (mitra: Mitra) => {
    setSelectedMitra(mitra);
    setShowDetailModal(true);
  };
  const openEditModal = (mitra: Mitra) => {
    setSelectedMitra(mitra);
    setShowEditModal(true);
  };
  const openDeleteModal = (mitra: Mitra) => {
    setSelectedMitra(mitra);
    setShowDeleteModal(true);
  };

  // Example handler to add mitra (without backend)
  const handleAddMitra = (newMitra: Omit<Mitra, "id">) => {
    const newId =
      mitraData.length > 0 ? Math.max(...mitraData.map((m) => m.id)) + 1 : 1;
    setMitraData([...mitraData, { id: newId, ...newMitra }]);
    setShowAddModal(false);
  };

  // Example handler to update mitra
  const handleEditMitra = (updatedMitra: Mitra) => {
    setMitraData(
      mitraData.map((m) => (m.id === updatedMitra.id ? updatedMitra : m))
    );
    setShowEditModal(false);
  };

  // Example handler to delete mitra
  const handleDeleteMitra = () => {
    if (selectedMitra) {
      setMitraData(mitraData.filter((m) => m.id !== selectedMitra.id));
      setShowDeleteModal(false);
    }
  };

  return (
    <div data-theme="light" className="min-h-screen">
      <SidebarMitra>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 font-poppins">Kelola Mitra</h1>

          {/* Tombol Tambah Mitra */}
          <button
            className="btn bg-[#7165E3] text-white font-poppins btn-sm sm:btn-md flex items-center gap-2 mb-4"
            onClick={() => setShowAddModal(true)}
          >
            Tambah Mitra
          </button>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table table-zebra table-md w-full font-poppins">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat Email</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {mitraData.map((mitra, index) => (
                  <tr key={mitra.id}>
                    <th>{index + 1}</th>
                    <td>{mitra.nama}</td>
                    <td>{mitra.email}</td>
                    <td className="space-x-1">
                      <button
                        className="btn btn-xs btn-info"
                        onClick={() => openDetailModal(mitra)}
                      >
                        Detail
                      </button>
                      <button
                        className="btn btn-xs btn-warning"
                        onClick={() => openEditModal(mitra)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-xs btn-error"
                        onClick={() => openDeleteModal(mitra)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Tambah Mitra */}
        {showAddModal && (
          <Modal title="Tambah Mitra" onClose={() => setShowAddModal(false)}>
            <FormMitra onSubmit={handleAddMitra} />
          </Modal>
        )}

        {/* Modal Detail Mitra */}
        {showDetailModal && selectedMitra && (
          <Modal title="Detail Mitra" onClose={() => setShowDetailModal(false)}>
            <div className="space-y-2">
              <p>
                <strong>Nama:</strong> {selectedMitra.nama}
              </p>
              <p>
                <strong>Email:</strong> {selectedMitra.email}
              </p>
              <p>
                <strong>Alamat:</strong> {selectedMitra.alamat}
              </p>
            </div>
          </Modal>
        )}

        {/* Modal Edit Mitra */}
        {showEditModal && selectedMitra && (
          <Modal title="Edit Mitra" onClose={() => setShowEditModal(false)}>
            <FormMitra
              editMode
              initialData={selectedMitra}
              onSubmit={(data) =>
                handleEditMitra({ ...selectedMitra, ...data })
              }
            />
          </Modal>
        )}

        {/* Modal Hapus Mitra */}
        {showDeleteModal && selectedMitra && (
          <Modal title="Hapus Mitra" onClose={() => setShowDeleteModal(false)}>
            <p>
              Apakah kamu yakin ingin menghapus mitra{" "}
              <strong>{selectedMitra.nama}</strong>?
            </p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="btn btn-ghost"
                onClick={() => setShowDeleteModal(false)}
              >
                Batal
              </button>
              <button className="btn btn-error" onClick={handleDeleteMitra}>
                Hapus
              </button>
            </div>
          </Modal>
        )}
      </SidebarMitra>
    </div>
  );
};

export default KelolaMitra;

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg font-poppins relative">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        aria-label="Close modal"
      >
        ×
      </button>
    </div>
  </div>
);

interface FormMitraProps {
  editMode?: boolean;
  initialData?: Omit<Mitra, "id">;
  onSubmit: (data: Omit<Mitra, "id">) => void;
}

const FormMitra: React.FC<FormMitraProps> = ({
  editMode = false,
  initialData,
  onSubmit,
}) => {
  const [nama, setNama] = useState<string>(initialData?.nama || "");
  const [email, setEmail] = useState<string>(initialData?.email || "");
  const [alamat, setAlamat] = useState<string>(initialData?.alamat || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nama, email, alamat });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="label">Nama</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="label">Alamat</label>
        <textarea
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          className="textarea textarea-bordered w-full"
          required
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
