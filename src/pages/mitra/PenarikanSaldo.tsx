import React, { useState } from "react";
import SidebarMitra from "../../components/SidebarMitra";

const PenarikanSaldo: React.FC = () => {
  const [jumlah, setJumlah] = useState("");
  const [namaBank, setNamaBank] = useState("");
  const [noRekening, setNoRekening] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    alert(
      `Penarikan diajukan:\nJumlah: ${jumlah}\nBank: ${namaBank}\nRekening: ${noRekening}`
    );
    setJumlah("");
    setNamaBank("");
    setNoRekening("");
    setModalOpen(false);
  };

  const canSubmit = jumlah !== "" && namaBank !== "" && noRekening !== "";

  return (
    <div data-theme="light" className="min-h-screen flex flex-col">
      <SidebarMitra>
        <div className="flex-grow flex flex-col justify-center items-center p-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold font-poppins mb-4 text-center">
              Penarikan Saldo
            </h1>
            <p className="text-xl font-poppins mb-8 text-center">
              Jumlah Saldo Anda Rp.0
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (canSubmit) setModalOpen(true);
              }}
              className="space-y-4 font-poppins"
            >
              <div>
                <label htmlFor="jumlah" className="block mb-1 font-semibold">
                  Jumlah Penarikan
                </label>
                <input
                  type="number"
                  id="jumlah"
                  min={0}
                  className="input input-bordered w-full"
                  placeholder="Masukkan jumlah penarikan"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="namaBank" className="block mb-1 font-semibold">
                  Nama Bank
                </label>
                <input
                  type="text"
                  id="namaBank"
                  className="input input-bordered w-full"
                  placeholder="Masukkan nama bank"
                  value={namaBank}
                  onChange={(e) => setNamaBank(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="noRekening"
                  className="block mb-1 font-semibold"
                >
                  Nomor Rekening
                </label>
                <input
                  type="text"
                  id="noRekening"
                  className="input input-bordered w-full"
                  placeholder="Masukkan nomor rekening"
                  value={noRekening}
                  onChange={(e) => setNoRekening(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={!canSubmit}
              >
                Ajukan Penarikan
              </button>
            </form>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Penarikan</h2>
              <p className="mb-2">
                <strong>Jumlah:</strong> Rp.{jumlah}
              </p>
              <p className="mb-2">
                <strong>Bank:</strong> {namaBank}
              </p>
              <p className="mb-6">
                <strong>No. Rekening:</strong> {noRekening}
              </p>

              <div className="flex justify-end space-x-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Batal
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        )}
      </SidebarMitra>
    </div>
  );
};

export default PenarikanSaldo;
