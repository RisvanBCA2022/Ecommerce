import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Admin = () => {
  const {setlogin}=useContext(AuthContext)
  const navigate = useNavigate();

  const logout=()=>{
    setlogin(false)
    navigate('/login')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 p-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
          <button onClick={()=>navigate("/")} className='text-white btn-primary'>Home</button>
            <button className="text-white btn-primary" onClick={() => navigate('/userdetails')}>
              UserDetails
            </button>
            <button className="text-white btn-secondary" onClick={() => navigate('/adminproducts')}>
              Product
            </button>
            <button className="text-white btn-primary" onClick={() => navigate('/mens')}>
              Mens
            </button>
            <button className="text-white btn-primary" onClick={() => navigate('/womens')}>
              womens
            </button>
          </div>
          <button className="text-white btn-red"  onClick={logout}>
            Logout
          </button>
        </div>
        
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Hello Admin</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
