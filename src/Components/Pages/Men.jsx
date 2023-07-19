import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Recommended from './Recommended';

const Men = () => {
  const { allproducts } = useContext(AuthContext);
  const navigate = useNavigate();
  const filteredProducts = allproducts.filter((p) => p.type.toLowerCase() === 'men');

  return (
    <div>
      <Recommended />
      <br /><br /><br />
      <div className="container">
        <Row>
          {filteredProducts.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card style={{
                width: '18rem',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }} onClick={() => navigate(`/productdetails/${product.id}`)} className="card-container mb-3">
                <Card.Img variant="top" src={product.img} style={{ height: '14rem', objectFit: 'contain', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <Card.Body>
                  <Card.Title style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '0.5rem',
                  }}>{product.title}</Card.Title>
                  <div
                    className="price-container"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}
                  >
                    <span
                      className="prev-price"
                      style={{
                        color: '#888',
                        textDecoration: 'line-through',
                        fontSize: '0.9rem',
                      }}
                    >
                      ${product.prevPrice}
                    </span>
                    <span
                      className="new-price"
                      style={{
                        color: '#fca311',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      ${product.newPrice}
                    </span>
                  </div>
                  <Button variant="primary" style={{
                    color: 'white',
                    backgroundColor: 'rgb(27, 76, 224)',
                    borderRadius: '5px',
                    marginTop: '1.5rem',
                    width: '100%',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                  }}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Men;
