import Carausel from '../components/carausel';
import About from '../components/about';
import Resume from '../components/resume';


export default function HomePage() {
 
  return (
    <div className="flex flex-col gap-6">
        <About />
      <div className="border w-full bg-gray-500 flex flex-col rounded-xl">
        <Carausel />
      </div>
      <Resume/>
    </div>
  );
}
