import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { login } from '../api';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {data, setData} = useData();

  // const history = useHistory();
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await login({ email, password });
      const response = await axios.post('http://localhost:9000/auth/login',{
        "email":"nav92@gmail.com",
        "password":"1234"
    })
    console.log(response.data)
      localStorage.setItem('token', response.data.token); // Save token for authentication
   
    setData({type:"USER", user: response.data.user})
    navigate('/Home')
     //history.push('/inventory'); // Redirect to inventory on successful login
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          

          {/* <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

         
          

          {/* Display error if passwords don't match */}
          {/* {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>} */}

          <div>
            <Link>
            <button
              type="submit"
             onClick={(e) => handleSubmit(e)}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button> </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
