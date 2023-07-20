import React, { useContext, useState } from 'react';
import { Dropdown, Form, Button,Image } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Styles/Search.css'

const Search = () => {
  const { allproducts } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  };

  const filteredProducts=allproducts.filter((item)=>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="d-flex align-items-center">
      <Dropdown >
      

      <Form className="d-flex ">
      
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 my-2"
          value={searchTerm}
          onChange={handleSearch}
        />  
           <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent border-0 '> <Button  variant="outline-primary" style={{color:"white",background:"#03bafc"}}>Search</Button></Dropdown.Toggle> 
            </Form>
      <Dropdown.Menu align="end"  className='overflow-hidden' >
      {filteredProducts.map((item) => (
        <Dropdown.Item key={item.id} className='w-25 ' onClick={() => navigate(`/productdetails/${item.id}`)}>  <Image className='w-25' src={item.img}  /> {item.title}</Dropdown.Item>
      ))}
        
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default Search;
