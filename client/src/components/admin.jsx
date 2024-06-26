import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import News from "../components/news";

export default function Admin({ user, setUser }) {
    const [alerts, setAlerts] = useState([])
    const [news, setNews] = useState([])
    const navigate = useNavigate()

    const getAlerts = async () => {
        const data = await fetch('http://localhost/damkar/api/get_alerts.php', {
            method: 'GET',
            credentials: 'include'
        })
        const res = await data.json()
        setAlerts(res.alerts)
    }

    const getNews = async () => {
        const data = await fetch('http://localhost/damkar/api/get_news_admin.php', {
            method: 'GET',
            credentials: 'include'
        })
        const res = await data.json()
        setNews(res.news)
    }
console.log(news);
    useEffect(() => {
        getAlerts()
        getNews()
    }, [])

    function logout() {
        fetch('http://localhost/damkar/api/logout.php', {
            credentials: 'include',
            method: 'POST',
        }).then(() => {
            setUser(null);
            navigate('/');
        });
    }

    return (
        <div className="max-w-full flex flex-col gap-8 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Admin Dashboard</h1>
            <div className="flex flex-col gap-4 justify-start sm:flex-row sm:justify-between sm:items-center bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-m">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile</h2>
                    <p className="text-3xl font-semibold text-gray-800 mb-4">Name: {user.name}</p>
                    <p className="text-xl text-gray-700">Email: {user.email}</p>
                </div>
                <button onClick={logout} className="flex bg-primary w-[5rem] items-center h-12 justify-center text-white rounded-2xl">Logout</button>
            </div>

            <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Alerts</h2>
                <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alerts.map(alert => (
                        <Link to={`/alert/` + alert.alert_id} key={alert.alert_id} className="p-4 bg-white border-l-4 border-pink-500 text-gray-700 rounded-lg shadow-sm">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 truncate">{alert.message}</h2>
                            <p className="text-xl text-gray-700">location : {alert.location}</p>
                            <p className="text-xl text-gray-700">client : {alert.client}</p>
                            <p className="text-xl text-gray-700">contact : {alert.contact}</p>
                        </Link>
                    ))}
                </ul>
            </div>

            <Link to={'/create'} className="bg-primary p-2 w-full text-center text-white rounded-2xl"> + Create News</Link>

            <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">News</h2>
                <div className="flex flex-col gap-4">
                {news.map((item, idx) => (
                    <div key={idx}>
                        <News news={item} />
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    );
}
