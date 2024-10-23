import { useState, useEffect } from 'react';
import SOSItem from './SOSItem'; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../firebase/firebaseConfig';

const firestore = getFirestore(app);

function SOS() {
   const [sosData, setSosData] = useState([]);
   const [loading, setLoading] = useState(true); 

   useEffect(() => {
      const fetchSOSData = async () => {
         try {
            const sosCollection = collection(firestore, 'messages'); 
            const sosSnapshot = await getDocs(sosCollection);
            const sosList = sosSnapshot.docs.map(doc => ({
               id: doc.id,
               location: doc.data().locationlink, 
               name: doc.data().phonenumber,
               msg: doc.data().msg,
               imageUrl: `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`,
            }));
            console.log(sosList);
            setSosData(sosList);
         } catch (error) {
            console.error("Error fetching SOS data: ", error);
         } finally {
            setLoading(false); 
         }
      };

      fetchSOSData();
   }, []);

   return (
      <div className="bg-white rounded-lg shadow-lg p-6">
         <h2 className="text-2xl font-bold text-gray-900 mb-6">SOS Alerts</h2>

         {loading ? (
            <div className="flex justify-center items-center">
               <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
               <span className="ml-3 text-lg">Loading SOS data...</span>
            </div>
         ) : (
            <div className="space-y-4">
               {sosData.map((sos) => (
                  <SOSItem
                     key={sos.id} 
                     name={sos.name}
                     location={sos.location}
                     imageUrl={sos.imageUrl}
                     mapLink={sos.mapLink}
                     msg={sos.msg}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default SOS;
