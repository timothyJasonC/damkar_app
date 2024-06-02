import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-center items-center h-24">
                <div className="mx-5">
                    <a href="#about" className="navbar-link active bg-black text-white w-24 rounded-lg hover:bg-slate-700">About</a>
                </div>
                <div className="mx-5">
                    <a href="#resume" className="navbar-link bg-black text-white w-24 rounded-lg hover:bg-slate-700">Resume</a>
                </div>
                <div className="mx-5">
                    <a href="#gallery" className="navbar-link bg-black text-white w-24 rounded-lg hover:bg-slate-700">Gallery</a>
                </div>
                <div className="mx-5">
                    <a href="#alert" className="navbar-link bg-black text-white w-24 rounded-lg hover:bg-slate-700">Alert</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
