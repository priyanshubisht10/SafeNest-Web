import AddHotspot from '../features/hotspot/AddHotSpot'; 
import SOS from '../features/sos/SOS'; 

const Home = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100 p-8">
      <div className="w-3/5 p-4 h-full sticky top-0">
        <AddHotspot />
      </div>
      
      <div className="w-2/5 p-4 h-full overflow-y-scroll">
        <SOS />
      </div>
    </div>
  );
};

export default Home;
