import Carausel from '../components/carausel';
import About from '../components/about';
import Resume from '../components/resume';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div className="flex flex-col gap-6">
      <section id='about'>
        <About />
      </section>
      <div id='testimonial' className="border w-full bg-gray-500 flex flex-col rounded-xl">
        <Carausel />
      </div>
      <section id='news'>
        <Resume />
      </section>
    </div>
  );
}
