import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

export default function ProfilePage() {
    const { ready, user, setUser } = useContext(UserContext)

    

    function logout() {
        fetch('http://localhost/damkar/api/logout.php', {
            credentials: "include",
            method: "POST"
        })
        setUser(null)
        return <Navigate to={'/'} />
    }

    if (!ready) {
        return <div>Loading...</div>
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }
    return (
        <div>
            <div className="text-center max-w-lg mx-auto">
                Logged in as {user.name} ({user.email}) <br />
                <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
            </div>
        </div>
    )
}
