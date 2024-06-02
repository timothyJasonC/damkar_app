import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'
import User from '../components/user'
import Admin from '../components/admin'

export default function ProfilePage() {
    const { ready, user, setUser } = useContext(UserContext)
    const [admin, setAdmin] = useState(true)
    const [redirect, setRedirect] = useState(false)

    function logout() {
        fetch('http://localhost/damkar/api/logout.php', {
            credentials: "include",
            method: "POST"
        }).then(() => {
            setUser(null)
            setRedirect(true)
        })
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    if (!ready) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
            </div>
        );
    }

    // if (ready && !user) {
    //     return <Navigate to={'/login'} />
    // }

    return (
        <div>
            <div className="text-center max-w-lg mx-auto">
                {/* Logged in as {user.name} ({user.email}) <br /> */}
                <button onClick={logout} className="bg-primary py-2 px-4 rounded-md max-w-sm mt-2">Logout</button>
            </div>
            {!admin ? ( 
                <User />
            ) : (
                <Admin />
            )}
        </div>
    )
}
