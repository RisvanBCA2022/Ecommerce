import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {

    const {allproducts,setallproducts}=useContext(AuthContext)
    const navigate=useNavigate()

    const handlesubmit=(event)=>{
        event.preventDefault()
        const Title=event.target.title.value
        const Id=event .target.id.value
        const image=event.target.image.value
        const company=event.target.company.value
        const newprice=event.target.newprice.value
        const oldprice=event.target.oldprice.value
        

        setallproducts([...allproducts,{title:Title,id:Date.now(),img:image,company:company,newPrice:newprice,prevPrice:oldprice}])
       alert('product added successfully')
       navigate('/')
    }
    console.log(allproducts)
  return (
    <div className='max-w-md mx-auto'>
        <button onClick={()=>navigate('/')}>home</button>
        <h1>Add Product Page</h1>
        <form action="" onSubmit={handlesubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            id
          </label>
          <input
            type="text"
            id="id"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            image
          </label>
          <input
            type="text"
            id="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            company
          </label>
          <input
            type="text"
            id="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
           New Price
          </label>
          <input
            type="text"
            id="newprice"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />
           <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            old
          </label>
          <input
            type="text"
            id="oldprice"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the product title"
            required
          />

          <button className='btn btn-primary'>Add</button>

            </div>

        </form>
        
    </div>
  )
}

export default Addproduct