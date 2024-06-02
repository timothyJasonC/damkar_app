import React from 'react';
import { IonIcon } from '@ionic/react';
import { callOutline } from 'ionicons/icons';

const About = () => {
  const handleCallAlert = () => {
    alert("Panggilan ke nomor darurat sedang diproses...");
  };

  return (
    <article className="about active w-full h-full p-8 bg-white shadow-2xl rounded-lg border border-gray-200" data-page="about">
      <header className="mb-6">
        <h2 className="h2 article-title text-3xl font-bold text-gray-800">About Damkar</h2>
      </header>
      <section className="about-text mb-8">
        <p className="text-gray-600 mb-4">
          Layanan Damkar.net adalah platform yang berdedikasi untuk memberikan informasi terkini dan solusi terbaik dalam bidang pemadam kebakaran dan keselamatan publik. Kami berkomitmen untuk membantu masyarakat dalam memahami pentingnya kesiapsiagaan dan tindakan cepat dalam menghadapi situasi darurat kebakaran.
        </p>
        <p className="text-gray-600">
          Dengan berbagai layanan dan informasi yang kami tawarkan, Damkar.net bertujuan untuk menjadi sumber daya utama bagi individu, komunitas, dan profesional dalam upaya mereka untuk meningkatkan keselamatan dan mengurangi risiko kebakaran.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title text-2xl font-semibold text-gray-700 mb-4">Services</h3>
        <div className="service-list space-y-6">
          <div className="service-item flex items-start">
            <div className="service-icon-box mr-4">
              <img src="./pict/icon-design.svg" alt="design icon" width="40" className="rounded-full border border-gray-300 p-2 shadow-md" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title text-xl font-medium text-gray-800">Pelatihan Pemadam Kebakaran</h4>
              <p className="service-item-text text-gray-600">
                Kami menyediakan program pelatihan yang komprehensif untuk pemadam kebakaran, yang mencakup teknik pemadaman api, penyelamatan, dan penggunaan alat pemadam kebakaran.
              </p>
            </div>
          </div>
          <div className="service-item flex items-start">
            <div className="service-icon-box mr-4">
              <img src="./pict/icon-photo.svg" alt="camera icon" width="40" className="rounded-full border border-gray-300 p-2 shadow-md" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title text-xl font-medium text-gray-800">Konsultasi Keamanan Kebakaran</h4>
              <p className="service-item-text text-gray-600">
                Layanan konsultasi kami membantu bisnis dan komunitas dalam menilai risiko kebakaran dan mengembangkan rencana keselamatan kebakaran yang efektif.
              </p>
            </div>
          </div>
          <div className="service-item flex items-start">
            <div className="service-icon-box mr-4">
              <IonIcon icon={callOutline} size="large" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title text-xl font-medium text-gray-800">Panggilan Darurat</h4>
              <p className="service-item-text text-gray-600">
                Membutuhkan bantuan darurat? Klik tombol di bawah ini untuk memanggil bantuan segera.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4" onClick={handleCallAlert}>Panggil Darurat</button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
