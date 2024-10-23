import AddHotspot from '../features/hotspot/AddHotSpot'; 
import SOS from '../features/sos/SOS'; 

const Home = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100 p-8">
      <div className="w-1/2 p-4">
        <AddHotspot />
      </div>
      
      <div className="w-1/2 p-4">
        <SOS />
      </div>
    </div>
  );
};

export default Home;
