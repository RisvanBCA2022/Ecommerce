import React, { useContext } from 'react';
import './Styles/Recommended.css';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Search from './Search';
import { AuthContext } from '../Context/AuthContext';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Recommended = () => {
  const navigate = useNavigate();
  const { state, setState,login,setlogin,carItems,setcartItems,profile,setProfile } = useContext(AuthContext);

  const handleNavigation = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    setlogin(a=>!a); 
    navigate('/login');
    setcartItems([])
  };
  const Gotocart=()=>{
    if(login==true){
     navigate('/Cart')
    }
    else {
      alert("please login to go to cart")
    }
  }

  function CartIcon() {
    return <FaShoppingCart size={24} />;
  }

  return (
    <>
    <Navbar expand="lg" className="bgcolor navbar-dark">
      <Container fluid >
        <Navbar.Brand style={{color:"white"}}>Shoe Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" style={{color:"white"}} >
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px',color:"white" }}
            navbarScroll
          >
            <Nav.Link style={{color:"white"}}  onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link style={{color:"white"}}   onClick={() => navigate('/product')}>Allproducts</Nav.Link>
            <Nav.Link  style={{color:"white"}}  onClick={() => navigate('/men')}>Men</Nav.Link>
            <Nav.Link  style={{color:"white"}}  onClick={() => navigate('/women')}>Women</Nav.Link>
            <Nav.Link style={{color:"white"}}  onClick={() => navigate('/nike')}>Nike</Nav.Link>
            <Nav.Link style={{color:"white"}}  onClick={() => navigate('/adidas')}>Adidas</Nav.Link> 
            <Nav.Link style={{color:"white"}}  onClick={Gotocart} ><CartIcon /></Nav.Link>
            
          </Nav>
          <Search />
          <Dropdown>
        <Dropdown.Toggle title={profile}>
        <img width="30" height="20" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male"  />
        </Dropdown.Toggle>

        <Dropdown.Menu>
         
              <Dropdown.Item >
              {login==true?
                   <div>
                      <button onClick={handleLogout} >Logout</button><br />
                      <button>{profile}</button>
                      </div> :
                   
          
              <button onClick={handleNavigation}>Signup</button>          
}
            </Dropdown.Item>
            
          
        </Dropdown.Menu>
      </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default Recommended;
