import React, { useState } from "react";

export default function Admin() {
    // State untuk menyimpan informasi profil admin
    const [adminProfile, setAdminProfile] = useState({
        name: "Admin Name",
        email: "admin@example.com"
    });

    // State untuk menyimpan daftar alert
    const [alerts, setAlerts] = useState([
        { id: 1, message: "Alert 1" },
        { id: 2, message: "Alert 2" },
        { id: 3, message: "Alert 3" },
        { id: 4, message: "Alert 4" },
        { id: 5, message: "Alert 5" },
        { id: 6, message: "Alert 6" }
        // ... Data alert lainnya
    ]);

    // Split alerts into two columns
    const leftAlerts = alerts.filter((_, index) => index % 2 === 0);
    const rightAlerts = alerts.filter((_, index) => index % 2 !== 0);

    return (
        <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Admin Dashboard</h1>
            <div className="mb-8 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile</h2>
                <p className="text-xl text-gray-700"><strong>Nama:</strong> {adminProfile.name}</p>
                <p className="text-xl text-gray-700"><strong>Email:</strong> {adminProfile.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Alerts - Left</h2>
                    <ul className="space-y-4">
                        {leftAlerts.map(alert => (
                            <li key={alert.id} className="p-4 bg-white border-l-4 border-pink-500 text-gray-700 rounded-lg shadow-sm">
                                {alert.message}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Alerts - Right</h2>
                    <ul className="space-y-4">
                        {rightAlerts.map(alert => (
                            <li key={alert.id} className="p-4 bg-white border-l-4 border-pink-500 text-gray-700 rounded-lg shadow-sm">
                                {alert.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
