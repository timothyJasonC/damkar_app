import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetch('http://localhost/damkar/api/keep_login.php', {
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setUser(data.user);
            }
            setReady(true);
        })
        .catch(err => {
            console.error('Failed to fetch keep login status', err);
            setReady(true);
        });
    }, []);

    if (!ready) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <UserContext.Provider value={{ ready, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
