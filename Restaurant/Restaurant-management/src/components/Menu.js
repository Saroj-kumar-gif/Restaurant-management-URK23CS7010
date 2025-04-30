import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/menu').then(res => setMenu(res.data));
  }, []);

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;