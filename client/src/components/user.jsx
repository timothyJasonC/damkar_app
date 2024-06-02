import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function App({ user, setUser }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
    }
  }, []);

  useEffect(() => {
    if (location && mapInstanceRef.current) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            const latLng = [lat, lon];
            mapInstanceRef.current.setView(latLng, 13);
            if (markerRef.current) {
              markerRef.current.setLatLng(latLng);
            } else {
              markerRef.current = L.marker(latLng).addTo(mapInstanceRef.current);
            }
          }
        });
    }
  }, [location]);

  function logout() {
    fetch('http://localhost/damkar/api/logout.php', {
      credentials: 'include',
      method: 'POST',
    }).then(() => {
      setUser(null);
      navigate('/');
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data ={
      name: name,
      location: location,
      message: message
    }
    const response = await fetch('http://localhost/damkar/api/create_alert.php', {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    })
    const res = await response.json()
    if (res.message === 'Alert berhasil dibuat') {
      alert('Alert berhasil dibuat')
    } else {
      alert(res.message)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Profile</h1>
      </div>
      <div className="flex flex-col gap-4 justify-start sm:flex-row sm:justify-between sm:items-center mb-8 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-m">
        <div>
          <p className="text-3xl font-semibold text-gray-800 mb-4">Name: {user.name}</p>
          <p className="text-xl text-gray-700">email: {user.email}</p>
        </div>
        <button onClick={logout} className="flex bg-primary w-[5rem] items-center h-12 justify-center text-white rounded-2xl">Logout</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nama:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Alamat:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </label>
        </div>
      <div ref={mapRef} style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pesan:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
}

export default App;
