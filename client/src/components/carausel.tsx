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
    <article className="testimonial-carousel-container">
      <header>
      </header>
      <section className="testimonial-carousel" style={{ marginBottom: '40px' }}>
        <ResponsiveCarousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} className="testimonial-carousel">
          {testimoni.map((item, index) => (
            <div key={index} className="testimonial-item">
              <a href="#">
                <figure className="testimonial-img">
                  <div className="testimonial-icon-box">
                    <IonIcon icon={chatbubbleOutline} />
                  </div>
                  <img src={item.gambar} alt="testimoni" loading="lazy" style={{ maxWidth: '30%', maxHeight: '30%' }} className='p-10'/>
                </figure>
                <h3 className="my-4">{item.kutipan}</h3>
                <p className="testimonial-author">{item.nama}</p>
              </a>
            </div>
          ))}
        </ResponsiveCarousel>
      </section>
    </article>
  );
};

export default TestimoniCarousel;
