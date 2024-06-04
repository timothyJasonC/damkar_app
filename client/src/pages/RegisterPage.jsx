import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    async function handleRegisterUser(ev) {
        ev.preventDefault()
        const response = await fetch('http://localhost/damkar/api/register_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });

        const res = await response.json()
        if (res.message == 'Registrasi akun berhasil') {
            alert(res.message)
            navigate('/login')
        } else {
            alert(res.message)
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-center">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" >
                    <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)} />
                    <input type="email" placeholder="your@email.com" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary" onClick={handleRegisterUser}>Register as User</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?
                        <Link className="underline text-black" to={'/login'}> Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}