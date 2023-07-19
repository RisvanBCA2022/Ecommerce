import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Recommended from './Recommended';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const { state, setState,profile,setProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const Firstname = event.target.name.value;
    const Email = event.target.email.value;
    const Password = event.target.password.value;
    setState([...state,{ firstname: Firstname, email: Email, password: Password }]);
    setProfile(Firstname)
    navigate('/login');
    
  };


  

  

  return (
    <>
      <div>
        <Recommended />
        <div className="container mx-auto mt-5">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white shadow-md rounded px-8 py-6">
                <h3 className="text-center text-xl font-semibold mb-4">Create New Account</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-input w-full border rounded-md focus:outline-none focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-input w-full border rounded-md focus:outline-none focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-input w-full border rounded-md focus:outline-none focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link to={'/login'} className="text-sm text-gray-600 underline">
                      Already registered?
                    </Link>
                    <Button
                      type="submit"
                      className="btn btn-primary ms-3"
                      style={{ color: 'black' }}
                    >
                      Register
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
