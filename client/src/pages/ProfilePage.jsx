import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'
import User from '../components/user'
import Admin from '../components/admin'

export default function ProfilePage() {
    const { ready, user, setUser } = useContext(UserContext)

    if (!ready) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
            </div>
        );
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>
            <div className="text-center max-w-lg mx-auto">
            </div>
            {user.isAdmin == false ? (<User setUser={setUser} user={user} />) : (<Admin setUser={setUser} user={user} />)}
        </div>
    )
}
