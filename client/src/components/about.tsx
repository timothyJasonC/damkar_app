import React from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <article className="w-full h-full flex flex-col p-4 md:p-8 items-center bg-white shadow-2xl rounded-lg border border-gray-200">
      <header className="md:mb-6">
        <h2 className="text-lg md:text-3xl font-bold text-gray-800">About Damkar</h2>
      </header>
      <section className="mb-8">
        <p className="text-sm md:text-xl text-gray-600 mb-4">
          Layanan Damkar.net adalah platform yang berdedikasi untuk memberikan informasi terkini dan solusi terbaik dalam bidang pemadam kebakaran dan keselamatan publik. Kami berkomitmen untuk membantu masyarakat dalam memahami pentingnya kesiapsiagaan dan tindakan cepat dalam menghadapi situasi darurat kebakaran.
        </p>
        <p className="text-sm md:text-xl text-gray-600">
          Dengan berbagai layanan dan informasi yang kami tawarkan, Damkar.net bertujuan untuk menjadi sumber daya utama bagi individu, komunitas, dan profesional dalam upaya mereka untuk meningkatkan keselamatan dan mengurangi risiko kebakaran.
        </p>
      </section>
      <section className="">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4">Services</h3>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="mr-4">
              <img src="./pict/icon-design.svg" alt="design icon" width="40" className="rounded-full border border-gray-300 md:p-2 shadow-md" />
            </div>
            <div className="">
              <h4 className="text-lg md:text-2xl font-medium text-gray-800">Pelatihan Pemadam Kebakaran</h4>
              <p className="text-sm md:text-xl text-gray-600">
                Kami menyediakan program pelatihan yang komprehensif untuk pemadam kebakaran, yang mencakup teknik pemadaman api, penyelamatan, dan penggunaan alat pemadam kebakaran.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <img src="./pict/icon-photo.svg" alt="camera icon" width="40" className="rounded-full border border-gray-300 md:p-2 shadow-md" />
            </div>
            <div className="">
              <h4 className="text-lg md:text-2xl font-medium text-gray-800">Konsultasi Keamanan Kebakaran</h4>
              <p className="text-sm md:text-xl text-gray-600">
                Layanan konsultasi kami membantu bisnis dan komunitas dalam menilai risiko kebakaran dan mengembangkan rencana keselamatan kebakaran yang efektif.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <IonIcon icon={callOutline} />
            </div>
            <div className="">
              <h4 className="text-lg md:text-2xl font-medium text-gray-800">Panggilan Darurat</h4>
              <p className="text-sm md:text-xl text-gray-600">
                Membutuhkan bantuan darurat? Klik tombol di bawah ini untuk memanggil bantuan segera.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Link to={'profile'} className="bg-red-500 hover:bg-red-600 max-w-sm text-white text-sm md:text-xl font-semibold py-2 px-4 rounded mt-4">Panggil Darurat</Link>
    </article>
  );
};

export default About;
