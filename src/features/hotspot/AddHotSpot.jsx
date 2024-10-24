import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebase/firebaseConfig';
const firestore = getFirestore(app);

const AddHotspot = () => {
   const [geofenceid, setGeoFenceid] = useState('');
   const [latitude, setLatitude] = useState('');
   const [longitude, setLongitude] = useState('');
   const [radius, setRadius] = useState('');
   const [severity, setSeverity] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!geofenceid || !latitude || !longitude || !radius || !severity) {
         alert('All fields must be filled out!');
         return;
      }

      const result = await addDoc(collection(firestore, "Geofences"),
         {
            geofenceid, 
            latitude, 
            longitude, 
            radius, 
            severity
         })

   };

   return (
      <div className="flex justify-center items-center h-screen">
         <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Hotspot</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">GeoFence ID</label>
                  <input
                     type="text"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={geofenceid}
                     onChange={(e) => setGeoFenceid(e.target.value)}
                     placeholder="Enter GeoFence ID"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
                  <input
                     type="number"
                     step="any"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={latitude}
                     onChange={(e) => setLatitude(e.target.value)}
                     placeholder="Enter Latitude"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
                  <input
                     type="number"
                     step="any"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={longitude}
                     onChange={(e) => setLongitude(e.target.value)}
                     placeholder="Enter Longitude"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Radius (meters)</label>
                  <input
                     type="number"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={radius}
                     onChange={(e) => setRadius(e.target.value)}
                     placeholder="Enter Radius"
                     required
                  />
               </div>
               <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Severity</label>
                  <select
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={severity}
                     onChange={(e) => setSeverity(e.target.value)}
                     required
                  >
                     <option value="" disabled>Select Severity</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                  </select>
               </div>
               <div className="flex items-center justify-end">
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Add Hotspot
                  </button>
               </div>

            </form>
         </div>
      </div>
   );
};

export default AddHotspot;
