import { Table } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Recommended from "./Recommended";
import Count from "../Count";

export default function Cart() {
  const { cartItems, setcartItems } = useContext(AuthContext);
  
  var total= 0
  const navigate = useNavigate();

 for (const x of cartItems) {
  total=total+x.newPrice*x.qty
 }

  return (
    <div>
      <Recommended />
      <h1 style={{ color: "blue" }}>Shopping Cart</h1>
      
      {cartItems.map((product) => {
        return (
          <Table key={product.id}>
            <tbody>
              <tr>
                <td>{product.title}</td>
                <td>
                  <img src={product.img} alt="" className="w-25 h-15" />
                </td>
                <td>
                 <Count obj={product} />
                </td>
                <td>{product.category}</td>
                <td>{product.newPrice}</td>
                <td
                  onClick={() =>
                    setcartItems((cartItems) =>
                      cartItems.filter((item) => item.id !== product.id)
                    )
                  }
                >
                  delete
                </td>
              </tr>

              <tr>
                <td colSpan="6">
                  
                </td>
              </tr>
            </tbody>
          </Table>
        );
      })}
      
      <div style={{ color: "blue" }}>Total prize: ${total}</div>
      <button
                    className="btn btn-primary"
                    onClick={()=>navigate('/payment')}
                  >
                    Continue buying
                  </button>
    </div>
  );
}
