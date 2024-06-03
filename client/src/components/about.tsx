import React from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <article className="w-full h-full flex flex-col p-6 md:p-12 items-center bg-gradient-to-r from-gray-50 to-white shadow-xl rounded-2xl border border-gray-200">
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">About Damkar</h2>
      </header>
      <section className="mb-12 text-center">
        <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed">
          Layanan Damkar.net adalah platform yang berdedikasi untuk memberikan informasi terkini dan solusi terbaik dalam bidang pemadam kebakaran dan keselamatan publik. Kami berkomitmen untuk membantu masyarakat dalam memahami pentingnya kesiapsiagaan dan tindakan cepat dalam menghadapi situasi darurat kebakaran.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
          Dengan berbagai layanan dan informasi yang kami tawarkan, Damkar.net bertujuan untuk menjadi sumber daya utama bagi individu, komunitas, dan profesional dalam upaya mereka untuk meningkatkan keselamatan dan mengurangi risiko kebakaran.
        </p>
      </section>
      <section className="w-full max-w-6xl">
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="./pict/icon-design.svg" alt="design icon" width="60" className="rounded-full border border-gray-300 p-2 shadow-md mb-4" />
            <h4 className="text-xl md:text-2xl font-medium text-gray-900">Pelatihan Pemadam Kebakaran</h4>
            <p className="text-base md:text-lg text-gray-700 mt-2">
              Kami menyediakan program pelatihan yang komprehensif untuk pemadam kebakaran, yang mencakup teknik pemadaman api, penyelamatan, dan penggunaan alat pemadam kebakaran.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src="./pict/icon-photo.svg" alt="camera icon" width="60" className="rounded-full border border-gray-300 p-2 shadow-md mb-4" />
            <h4 className="text-xl md:text-2xl font-medium text-gray-900">Konsultasi Keamanan Kebakaran</h4>
            <p className="text-base md:text-lg text-gray-700 mt-2">
              Layanan konsultasi kami membantu bisnis dan komunitas dalam menilai risiko kebakaran dan mengembangkan rencana keselamatan kebakaran yang efektif.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <IonIcon icon={callOutline} style={{ fontSize: '60px', color: '#f56565' }} className="mb-4" />
            <h4 className="text-xl md:text-2xl font-medium text-gray-900">Panggilan Darurat</h4>
            <p className="text-base md:text-lg text-gray-700 mt-2">
              Membutuhkan bantuan darurat? Klik tombol di bawah ini untuk memanggil bantuan segera.
            </p>
            <a
              href="tel:+6281234567890"
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-full mt-4 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Panggil Darurat
            </a>
          </div>
        </div>
      </section>
      <Link to={'/layanan'} className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 max-w-sm text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-full mt-12 transition duration-300 transform hover:scale-105 shadow-lg">
        Lihat Layanan Lainnya
      </Link>
    </article>
  );
};

export default About;
