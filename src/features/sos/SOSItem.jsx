import { MdDeleteOutline } from "react-icons/md";
const SOSItem = ({ id, name, msg, imageUrl, location, onDelete }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mb-4 p-4">
      <div className="w-1/3 flex justify-center my-auto">
        <img src={imageUrl} alt={name} className="object-cover h-[150px] w-[150px]" />
      </div>

      <div className="w-2/3 p-2">
        <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
        <h3 className="text-m text-gray-900 mb-2 text-justify">{msg}</h3>

        <p className="text-blue-500 hover:underline">
          <a href={location} target="_blank" rel="noopener noreferrer">
            View Location on Map
          </a>
        </p>
      </div>
      <div className="p-2">
        <button className="text-2xl hover:text-red-500" onClick={() => onDelete(id)}> <MdDeleteOutline/> </button>
      </div>
    </div>
  );
};

export default SOSItem;
