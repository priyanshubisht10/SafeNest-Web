import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "police@gmail.com" && password === "1234567890") {
         console.log("Login successful!");
         navigate('/home');
      } else {
         alert('Login Credentials are incorrect!');
      }
   };

   return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
            <div className="flex items-center justify-center w-1/3 bg-gray-200 p-4 rounded-l-lg">
               <img
                  src="src/assets/logo.png"
                  alt="App Logo"
                  className="object-contain"
               />
            </div>

            <div className="w-2/3 p-8">
               <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter email"
                        required
                     />
                  </div>
                  <div className="mb-6">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter password"
                        required
                     />
                  </div>
                  <div className="flex items-center justify-end">
                     <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     >
                        Log In
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
