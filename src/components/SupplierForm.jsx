import React, { useState } from "react";
import InputForm from "./InputForm";
import Button from "./Button";

const SupplierForm = () => {
  const initialState = {
    namaSupplier: "",
    namaPerusahaan: "",
    emailSupplier: "",
    nomorTelepon: "",
    alamatSupplier: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Supplier Tersimpan:", formData);
    alert(`Supplier "${formData.namaSupplier}" berhasil disimpan!`);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex flex-col items-center justify-center p-4">
      {/* Header Judul Halaman */}
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-600 text-white p-2.5 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800 leading-tight">
            Manajemen Supplier
          </h1>
          <p className="text-xs text-gray-500">
            Kelola data pemasok toko retail
          </p>
        </div>
      </div>

      {/* Card Form */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Card Header Biru */}
        <div className="bg-blue-600 px-6 py-4 flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <h2 className="text-base font-semibold">Tambah Supplier</h2>
        </div>

        {/* Isi Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-xs text-gray-500 mb-4">
            Lengkapi informasi supplier berikut
          </p>

          <InputForm
            label="Nama Supplier"
            type="text"
            name="namaSupplier"
            placeholder="Masukkan nama supplier"
            value={formData.namaSupplier}
            onChange={handleChange}
            required
          />

          <InputForm
            label="Nama Perusahaan"
            type="text"
            name="namaPerusahaan"
            placeholder="Masukkan nama perusahaan"
            value={formData.namaPerusahaan}
            onChange={handleChange}
            required
          />

          <InputForm
            label="Email Supplier"
            type="email"
            name="emailSupplier"
            placeholder="supplier@email.com"
            value={formData.emailSupplier}
            onChange={handleChange}
            required
          />

          <InputForm
            label="Nomor Telepon"
            type="text"
            name="nomorTelepon"
            placeholder="08xxxxxxxxxx"
            value={formData.nomorTelepon}
            onChange={handleChange}
            required
          />

          <InputForm
            label="Alamat Supplier"
            type="textarea"
            name="alamatSupplier"
            placeholder="Masukkan alamat lengkap supplier"
            value={formData.alamatSupplier}
            onChange={handleChange}
            required
          />

          {/* Dua Tombol */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <Button type="submit" variant="primary">
              Simpan Supplier
            </Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierForm;