import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './App.css';

const App = () => {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const amount = 1000000;
  const [info, setInfo] =  useState({
    email: "",
    name: "",
    phone: ""
  })
 const updateName = (e) => {
    setInfo({ ...info, name: e.target.value });
 };
const updateEmail = (e) => {
  setInfo({ ...info, email: e.target.value });
};
const updatePhone = (e) => {
  setInfo({ ...info, phone: e.target.value });
};

  const resetForm = () => {
    setInfo( { email: "",name: "",phone: ""});
  }
  const componentProps = {
    info.email,
    amount,
    metadata: {
     info.name,
      info.phone,
    },
    publicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Coconut Oil</p>
            <p className="item-details__amount">NGN {amount / 100}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={info.name}
                onChange={updateName}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={info.email}
                onChange={updateEmail}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={info.phone}
                onChange={updatePhone}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
