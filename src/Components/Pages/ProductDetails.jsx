import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Card, Button } from 'react-bootstrap';

const ProductDetails = () => {
  const { allproducts, addproduct, cartItems, login } = useContext(AuthContext);
  const { id } = useParams();

  const filtered = allproducts.filter((item) => item.id == id);

  const Sum = filtered.map((priceid) => {
    return priceid.newPrice * priceid.qty;
  });

  const navigate = useNavigate();

  const AddToCart = (product) => {
    if (login === true) {
      if (cartItems.find((item) => item.id === product.id)) {
        alert('Already in cart');
        navigate('/Cart');
      } else {
        addproduct({
          id: product.id,
          title: product.title,
          img: product.img,
          newPrice: product.newPrice,
          prevPrice: product.prevPrice,
          category: product.category,
          company: product.company,
          qty: product.qty,
        });
        navigate('/Cart');
      }
    } else {
      alert('Please login');
      navigate('/login')
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mt-5">
        {filtered.map((product) => (
          <div className="max-w-md" key={product.id}>
            <img src={product.img} alt={product.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <div className="price-container">
                <span className="line-through text-gray-500">${product.prevPrice}</span>
                <span className="text-green-600 font-semibold">${product.newPrice}</span>
              </div>
              <div className="my-4">
                {/* Add product description or details here */}
                <p className="text-gray-600">{product.text}</p>
              </div>
              <Button
                variant="primary"
                style={{ color: 'black' }}
                onClick={() => AddToCart(product)}
                className="w-full"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
