import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [order, setOrder] = useState({ customer: '', items: '' });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/order', order).then(() => alert('Order placed!'));
  };

  return (
    <div>
      <h3>Place Order</h3>
      <form onSubmit={handleSubmit}>
        <input name="customer" placeholder="Your Name" onChange={handleChange} required />
        <input name="items" placeholder="Items" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;