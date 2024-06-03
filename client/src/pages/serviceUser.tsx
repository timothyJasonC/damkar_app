import React from "react";

export default function ServiceUser() {
  const trainingPrograms = [
    {
      title: "Teknik Dasar Pemadam Kebakaran",
      description: "Pelajari dasar-dasar pemadam kebakaran, termasuk perilaku api, jenis-jenis kebakaran, dan taktik dasar pemadaman api.",
    },
    {
      title: "Operasi Penyelamatan Lanjutan",
      description: "Pelatihan lanjutan tentang operasi penyelamatan, termasuk penanganan bahan berbahaya, penyelamatan di ruang terbatas, dan penyelamatan di ketinggian.",
    },
    {
      title: "Penggunaan Peralatan Pemadam Kebakaran",
      description: "Pelatihan komprehensif tentang penggunaan dan perawatan peralatan pemadam kebakaran seperti pemadam api, selang, dan perlengkapan pelindung.",
    }
  ];

  const consultationServices = [
    {
      title: "Penilaian Risiko Kebakaran",
      description: "Penilaian mendetail tentang potensi bahaya kebakaran di fasilitas Anda dan rekomendasi untuk mengurangi risiko.",
    },
    {
      title: "Perencanaan Tanggap Darurat",
      description: "Pengembangan rencana tanggap darurat yang disesuaikan untuk memastikan kesiapan dan tindakan efisien selama keadaan darurat kebakaran.",
    },
    {
      title: "Audit Keselamatan Kebakaran",
      description: "Audit komprehensif terhadap sistem dan protokol keselamatan kebakaran Anda untuk memastikan kepatuhan dengan peraturan dan praktik terbaik.",
    }
  ];

  return (
    <div className="p-6 md:p-12 bg-gradient-to-r from-gray-50 to-white shadow-xl rounded-2xl border border-gray-200">
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Layanan Kami</h2>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">Program Pelatihan Pemadam Kebakaran</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={`https://picsum.photos/60`} alt={`${program.title} icon`} width="60" className="rounded-full border border-gray-300 p-2 shadow-md mb-4" />
              <h4 className="text-xl md:text-2xl font-medium text-gray-900">{program.title}</h4>
              <p className="text-base md:text-lg text-gray-700 mt-2">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">Layanan Konsultasi Keselamatan Kebakaran</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={`https://picsum.photos/60`} alt={`${service.title} icon`} width="60" className="rounded-full border border-gray-300 p-2 shadow-md mb-4" />
              <h4 className="text-xl md:text-2xl font-medium text-gray-900">{service.title}</h4>
              <p className="text-base md:text-lg text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
