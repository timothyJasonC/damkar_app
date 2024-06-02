import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function EditAlert() {
    const { id } = useParams()
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);

    const getAlert = async () => {
        const data = await fetch('http://localhost/damkar/api/get_alert_by_id.php', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' }
        })
        const res = await data.json()
        setName(res.alert.author)
        setLocation(res.alert.location)
        setMessage(res.alert.message)
    }

    useEffect(() => {
        getAlert()
    }, [])

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: name,
            location: location,
            message: message,
            id: id
        }
        const response = await fetch('http://localhost/damkar/api/edit_alert.php', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        const res = await response.json()
        if (res.message === 'Alert berhasil diedit') {
            alert('Alert berhasil diedit')
            navigate('/profile')
        } else {
            alert(res.message)
        }
    }
    return (
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

            <div className="m-6">
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
                    Update Alert
                </button>
            </div>
        </form>
    )
}
