const SOSItem = ({ id, name, msg, imageUrl, location }) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="w-1/3">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
        <h3 className="text-m text-gray-900 mb-2">{msg}</h3>

        <p className="text-blue-500 hover:underline">
          <a href={location} target="_blank" rel="noopener noreferrer">
            View Location on Map
          </a>
        </p>
      </div>
    </div>
  );
};

export default SOSItem;
