import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext';

export default function AlertPage() {
    const { id } = useParams()
    const [alert, setAlert] = useState([])
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    if (user?.isAdmin == false || user === null) {
        navigate('/')
    }

    const getAlert = async () => {
        const data = await fetch('http://localhost/damkar/api/get_alert_by_id.php', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-Type': 'application/json' }
        })
        const res = await data.json()
        setAlert(res.alert)
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
        if (alert.location && mapInstanceRef.current) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${alert.location}`)
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
    }, [alert.location]);

    const deleteAlert = () => {
        setShowConfirmationDialog(true);
    };

    const confirmDelete = async(e) => {
        e.preventDefault()
        
        // Lakukan aksi penghapusan di sini
        setShowConfirmationDialog(false);
    };

    const cancelDelete = () => {
        setShowConfirmationDialog(false);
        window.location.reload()
    };

    return (
        <section className="mx-auto flex flex-col gap-4 w-full p-6 bg-white shadow-lg rounded-lg my-10">
            {showConfirmationDialog ? (
                <div className='opacity-0' ref={mapRef} style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>
            ) : (
                <div ref={mapRef} style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>
            )}
            <div className='flex justify-end gap-6 px-12'>
                <Link to={'/edit/' + id} className="text-white w-10 bg-black bg-opacity-20 rounded-2xl p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </Link>
                <button onClick={deleteAlert} className="text-red-500  w-10 bg-black bg-opacity-20 rounded-2xl p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Location : {alert.location}
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Client : {alert.client}
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Author : {alert.author}
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message : {alert.message}
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Contact : {alert.contact}
                </label>
            </div>


            {showConfirmationDialog && (
                <div className="fixed -top-10 z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Delete Alert
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete this alert? This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={confirmDelete} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Delete
                                </button>
                                <button onClick={cancelDelete} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
