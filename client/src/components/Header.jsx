import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
    const { user } = useContext(UserContext)
   
    return (
        <header className='p-4 flex items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                <span className='font-bold text-xl'>Damkar</span>
            </Link>
           <div>
            <Link to={"/"} className="mx-4 bg-black text-white px-6 rounded-lg">About</Link>
            <Link to={"/"} className="mx-4 bg-black text-white px-6 rounded-lg">Create</Link>
            <Link to={"/"} className="mx-4 bg-black text-white px-6 rounded-lg">News</Link>
            <Link to={"/"} className="mx-4 bg-black text-white px-6 rounded-lg">Testimonials</Link>
           </div>
            <Link to={user != null ? '/profile' : '/login'} className='flex items-center gap-2 border border-black rounded-full py-2 px-4'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 relative top-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </Link>
        </header>
    )
}