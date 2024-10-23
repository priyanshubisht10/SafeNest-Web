import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-light mb-6">Oops! The page you are looking for does not exist.</p>
      <p className="text-lg mb-8">It seems you may have taken a wrong turn...</p>
      <Link
        to="/hotspot"
        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:text-blue-700 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
