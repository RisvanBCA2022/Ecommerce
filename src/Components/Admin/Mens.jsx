import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Mens = () => {

    const {allproducts,setallproducts}=useContext(AuthContext)
    const navigate=useNavigate()

    const filteredproduct=allproducts.filter((p) => p.type.toLowerCase() === 'men');
    const update=(e)=>{
        const id=e.target.id
        navigate(`/updateproducts/${id}`)
    
      }
  return (

    <div>
      
      <div className="max-w-4xl mx-auto">
        <button className='btn btn-primary' onClick={()=>navigate('/addproducts')}>Add products</button><br />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredproduct.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img className="h-8 w-8 rounded-full" src={product.img} alt="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.newPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.prevPrice}</td>
                <td className='px-6 py-4 whitespace-nowrap'><button className='btn btn-success' id={product.id} onClick={update} >Update</button></td>
                <td className='px-6 py-4 whitespace-nowrap'><button className='btn btn-danger' onClick={()=>setallproducts(a=>a.filter((p)=>p.id!=product.id))}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mens