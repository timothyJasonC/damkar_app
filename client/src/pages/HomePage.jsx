import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Carausel from '../components/carausel';
import About from '../components/about';
import Gmaps from '../components/gmaps';

export default function HomePage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="flex flex-col h-screen">
      <div className="border w-full h-full bg-red-700 flex flex-col rounded-xl mb-4">
        <About />
      </div>
      <div className="border w-full bg-blue-800 flex flex-col rounded-xl">
        <Carausel />
      </div>
      <Gmaps/>
    </div>
  );
}
