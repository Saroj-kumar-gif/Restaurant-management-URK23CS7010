import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [menuItem, setMenuItem] = useState({ name: '', price: '' });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/order').then(res => setOrders(res.data));
  }, []);

  const handleChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/menu', menuItem).then(() => alert('Menu item added!'));
  };

  return (
    <div>
      <h3>Admin Panel</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Item Name" onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
        <button type="submit">Add Item</button>
      </form>

      <h4>Orders</h4>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.customer} ordered: {order.items}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
