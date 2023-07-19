import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Buy = () => {
const {total}=useParams()

const Total=total

const navigate=useNavigate()
  return (
    <div>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Billing details</h5>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="form1" className="form-label">
                    First name
                  </label>
                  <input
                    id="form1"
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="col">
                  <label htmlFor="form2" className="form-label">
                    Last name
                  </label>
                  <input
                    id="form2"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="form3" className="form-label">
                  Address
                </label>
                <input
                  id="form3"
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="form4" className="form-label">
                  Email
                </label>
                <input
                  id="form4"
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="form5" className="form-label">
                  Phone
                </label>
                <input
                  id="form5"
                  type="number"
                  className="form-control"
                />
              </div>

              <hr className="my-4" />

              <div className="form-check mb-4">
                <input
                  name="flexCheck"
                  value=""
                  id="checkoutForm1"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="checkoutForm1" className="form-check-label">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  name="flexCheck"
                  value=""
                  id="checkoutForm2"
                  type="checkbox"
                  className="form-check-input"
                  defaultChecked
                />
                <label htmlFor="checkoutForm2" className="form-check-label">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h5 className="mb-4">Payment</h5>

              <div className="form-check mb-4">
                <input
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  type="radio"
                  className="form-check-input"
                  checked
                />
                <label htmlFor="flexRadioDefault1" className="form-check-label">
                  Credit card
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  type="radio"
                  className="form-check-input"
                />
                <label htmlFor="flexRadioDefault2" className="form-check-label">
                  Debit card
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  type="radio"
                  className="form-check-input"
                />
                <label htmlFor="flexRadioDefault3" className="form-check-label">
                  Paypal
                </label>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="form6" className="form-label">
                    Name on card
                  </label>
                  <input
                    id="form6"
                    type="text"
                    className="form-control mb-4"
                  />
                </div>
                <div className="col">
                  <label htmlFor="form7" className="form-label">
                    Name on card
                  </label>
                  <input
                    id="form7"
                    type="text"
                    className="form-control mb-4"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="form8" className="form-label">
                    Expiration
                  </label>
                  <input
                    id="form8"
                    type="text"
                    className="form-control mb-4"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="form9" className="form-label">
                    CVV
                  </label>
                  <input
                    id="form9"
                    type="text"
                    className="form-control mb-4"
                  />
                </div>
              </div>

              <button type="button" className="btn btn-lg btn-block" onClick={()=>navigate('/')}>
                Continue to checkout
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <hr className="my-2" />
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>{Total}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default Buy