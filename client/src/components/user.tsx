import React, { useState } from 'react';

function App() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [pesanSubmitted, setPesanSubmitted] = useState(false);

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePesanChange = (event) => {
    setPesan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data pesan yang telah disubmit
    console.log("Data Pesan: ", { nama, email, pesan });
    setPesanSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Profile</h1>
      </div>
      <div className="text-center mb-8 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
        <p className="text-3xl font-semibold text-gray-800 mb-4">John Doe</p>
        <p className="text-xl text-gray-700">johndoe@example.com</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nama:
            <input
              type="text"
              value={nama}
              onChange={handleNamaChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Alamat:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pesan:
            <textarea
              value={pesan}
              onChange={handlePesanChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-pink-600 transition duration-200"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
      {pesanSubmitted && (
        <div className="mt-8 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pesan telah terkirim!</h2>
          <p className="text-xl text-gray-700 mb-2"><strong>Nama:</strong> {nama}</p>
          <p className="text-xl text-gray-700 mb-2"><strong>Alamat:</strong> {email}</p>
          <p className="text-xl text-gray-700"><strong>Pesan:</strong> {pesan}</p>
        </div>
      )}
    </div>
  );
}

export default App;
