import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProducts = () => {
    const {allproducts,setallproducts}=useContext(AuthContext)
    const {id}=useParams()
    const pid=id
    console.log(id)
    const navigate=useNavigate()

    const filteredprdct=allproducts.filter((item)=>item.id==pid)
    console.log(filteredprdct)

    const edited=(e)=>{
        e.preventDefault()
    const id=e.target.id
    console.log(id)

   const updatedproducts=allproducts.map((product)=>{
    const Title=e.target.title.value || product.title
    const image=e.target.image.value || product.img
    const company=e.target.company.value || product.company
    const newprice=e.target.newprice.value || product.newPrice
    const oldprice=e.target.oldprice.value || product.prevPrice
    if(product.id==id){
        console.log(id)

        return {...product,title:Title,img:image,company:company,newPrice:newprice,prevPrice:oldprice}
       }
       else{
        return product
       }
   })
   setallproducts(updatedproducts)
   
 
       
    }

  return (
    <>
       
           
                
                <tr>
                    <th>product id</th>
                    <th>product name</th>
                </tr>
                
            {filteredprdct.map((product)=>
            <div>
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td><img src={product.img} alt="" /></td>
                </tr>
                  <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id={product.id}  onSubmit={edited}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter the product title"
                      
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                      Image
                    </label>
                    <input
                      type="text"
                      id="image"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter the product image URL"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter the product company"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="newprice" className="block text-gray-700 text-sm font-bold mb-2">
                      New Price
                    </label>
                    <input
                      type="text"
                      id="newprice"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter the product new price"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="oldprice" className="block text-gray-700 text-sm font-bold mb-2">
                      Old Price
                    </label>
                    <input
                      type="text"
                      id="oldprice"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter the product old price"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add
                  </button>
                </form>
                </div>
                
                )} 
                
              
                
               
                
                
      
    </>
  )
}

export default UpdateProducts