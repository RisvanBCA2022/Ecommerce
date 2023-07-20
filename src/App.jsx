import React, { useState } from 'react'
import { Hero } from './Components'
import { heroapi } from './data/data.js'
import { Routes,Route } from 'react-router-dom'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/Login'
import { useContext } from 'react'
import { AuthContext } from './Components/Context/AuthContext'
import Home from './Components/Pages/Home'
import { data1 } from './Components/Pages/db/data'
import Men from './Components/Pages/Men'
import Cart from './Components/Pages/Cart'
import Women from './Components/Pages/Women'
import ProductDetails from './Components/Pages/ProductDetails'
import BasicExample from './Components/Pages/Products'
import Allproucts from './Components/Pages/Allproducts'
import Nike from './Components/Pages/Nike'
import Adidas from './Components/Pages/Adidas'
import Admin from './Components/Admin/Admin'
import Userdetails from './Components/Admin/Userdetails'
import ProductsinAdmin from './Components/Admin/ProductsinAdmin'
import UpdateProducts from './Components/Admin/UpdateProducts'
import Addproduct from './Components/Admin/Addproduct'
import Buy from './Components/Pages/Buy'
import Mens from './Components/Admin/Mens'
import Womens from './Components/Admin/Womens'

const App = () => {

  const [state,setState]=useState([])
  const [login,setlogin]=useState(false)
  const [allproducts,setallproducts]=useState(data1)
  const [cartItems,setcartItems]=useState([])
  const [profile,setProfile]=useState([])
  

  const addproduct=(addedProduct)=>{
    setcartItems([...cartItems,addedProduct])
  }

  return (
    <>
    
    <AuthContext.Provider value={{state,setState,allproducts,setallproducts,cartItems,setcartItems,addproduct,login,setlogin,profile,setProfile}}> 
    {/* states and function passed through context Api Above*/}
      {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Home heroapi={heroapi} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/men' element={<Men />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/women' element={<Women />} />
      {/* Dynamic routing with id */}
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/product' element={<Allproucts />} />
      <Route path='/nike' element={<Nike />} />
      <Route path='/adidas' element={<Adidas />} />
      <Route path='/payment' element={<Buy />} />
      
      <Route path='/admin' element={ login==true? <Admin />:<Login />} />
      <Route element={<Admin />}>
      <Route path='/userdetails' element={<Userdetails />} />
      <Route path='/adminproducts' element={<ProductsinAdmin />} />
      <Route path='/updateproducts/:id' element={<UpdateProducts />} />
      <Route path='/addproducts' element={<Addproduct />} />
      <Route path='/mens' element={<Mens />} />
      <Route path='/womens' element={<Womens />} />
      </Route>
    </Routes>
    </AuthContext.Provider>
    </>
  )
}

export default App