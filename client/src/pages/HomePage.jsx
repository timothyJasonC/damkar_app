import React from 'react';
import Gmaps from '../components/gmaps';
import Carausel from '../components/carausel';
import Navbar from '../components/navbar';
import Resume from '../components/resume';
import About from '../components/about';

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        {/* <Navbar/> */}
      </div>
      <div className="flex-1 flex justify-between relative">
        <div className="border w-1/2">
          <img src="/pict/test.jpg" alt="pict" />
        </div>
        <div className="border w-1/2 h-[106vh] bg-red-700 relative flex flex-col">
          <About/>
          <div className="flex-grow"></div> {/* Ini untuk mengisi ruang kosong */}
          <div className="h-[45vh] border-t-4 border-b-4 bg-blue-800">
            <Carausel/>
          </div>
        </div>
      </div>
            {/* <Resume/> */}
      <Gmaps />
    </div>
  );
}
