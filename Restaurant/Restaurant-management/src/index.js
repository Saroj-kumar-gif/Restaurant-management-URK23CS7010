import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// === client/src/App.js ===
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <OrderForm />
      <AdminPanel />
    </div>
  );
}

export default App;