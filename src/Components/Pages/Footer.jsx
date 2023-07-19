import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAmazon, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Styles/Footer.css'



const Footer = () => {
  const navigate=useNavigate()

  return (
    <footer className='backg text-center text-lg-start text-muted'>
      <section className=''>
        <Container className='text-white text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className=' text-uppercase fw-bold mb-4'>
                Shoe.exe
              </h6>
              <p>
              Welcome to Shoe.exe, your one-stop online shoe e-commerce website! Step into the world of trendy footwear and elevate your style with our premium collection of shoes for men, women, and kids. At Shoe.exe, we believe that the perfect pair of shoes can make all the difference, enhancing not only your appearance but also your comfort and confidence.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecorationLine:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Brands</h6>
              <p>
                <a onClick={()=>navigate('/adidas')} className='text-reset'>
                  Adidas
                </a>
              </p>
              <p>
                <a onClick={()=>navigate('/nike')} className='text-reset'>
                  Nike

                </a>
              </p>
             
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    
      </div>
    </footer>
  );
}
export default Footer