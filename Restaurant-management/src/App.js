// client/src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Menu />
        <hr />
        <OrderForm />
        <hr />
        <AdminPanel />
      </div>
    </div>
  );
}

export default App;
