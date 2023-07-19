import React, { useContext, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Styles/Search.css'

const Search = () => {
  const { allproducts } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="d-flex align-items-center">
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Form>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle variant="outline-primary" style={{color:"white",background:"#03bafc"}}>
          Search
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {allproducts
            .filter((val) => {
              if (searchTerm === '') {
                return allproducts;
              } else {
                return val.title.toLowerCase().includes(searchTerm.toLowerCase());
              }
            })
            .map((val) => (
              <Dropdown.Item
              key={val.id}
              onClick={() => navigate(`/productdetails/${val.id}`)}
            >
              <div className="template">
                <img src={val.img} alt="" className="small-image" />
                <div className="small-info">
                  <h3 className="small-title">{val.title}</h3>
                  <p className="small-price">${val.newPrice}</p>
                </div>
              </div>
            </Dropdown.Item>
            
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Search;
