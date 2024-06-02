import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Carausel from '../components/carausel';
import About from '../components/about';
import Gmaps from '../components/gmaps';

export default function HomePage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="flex flex-col gap-6">
        <About />
      <div className="border w-full bg-gray-500 flex flex-col rounded-xl">
        <Carausel />
      </div>
      {/* <Gmaps/> */}
    </div>
  );
}
