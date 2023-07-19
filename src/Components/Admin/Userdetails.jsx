import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';


const Userdetails = () => {
    const { state } = useContext(AuthContext);
    console.log(state);
    
    return (
      <div>
        
        <h1>User details</h1>
        
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {state.map((x) => (
              <tr key={x.id}>
                <td className="px-6 py-4 whitespace-nowrap">{x.firstname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{x.email}</td>
                <td className="px-6 py-4 whitespace-nowrap"><button className='btn btn-danger'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Userdetails