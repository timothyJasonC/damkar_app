import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IonIcon } from '@ionic/react';
import { chatbubbleOutline } from 'ionicons/icons';

const TestimoniCarousel = () => {
  const testimoni = [
    {
      kutipan: "Menggunakan layanan damkar.net adalah perubahan besar untuk keselamatan komunitas kami.",
      nama: "John Doe",
      gambar: "./pict/logo-1-color.png"
    },
    {
      kutipan: "Waktu respons dan profesionalisme sangat luar biasa. Sangat direkomendasikan!",
      nama: "Jane Smith",
      gambar: "./pict/logo-2-color.png"
    },
    {
      kutipan: "Layanan yang andal dan efisien yang seharusnya dimiliki oleh setiap kota.",
      nama: "Carlos Rodriguez",
      gambar: "./pict/logo-3-color.png"
    },
    {
      kutipan: "Tim mereka cepat dan sangat mendukung selama keadaan darurat kami.",
      nama: "Li Wei",
      gambar: "./pict/logo-4-color.png"
    }
  ];

  return (
    <article className="">
      <section className="py-4 md:py-12 px-2 md:px-4" >
        <ResponsiveCarousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} className="testimonial-carousel">
          {testimoni.map((item, index) => (
            <div key={index} className="">
                <img src={item.gambar} alt="testimoni" loading="lazy" className='p-10 sm:max-w-96 min-w-20' />
                <h3 className="text-sm md:text-xl text-center">{item.kutipan}</h3>
                <p className="text-xs md:text-xl">{item.nama}</p>
            </div>
          ))}
        </ResponsiveCarousel>
      </section>
    </article>
  );
};

export default TestimoniCarousel;
