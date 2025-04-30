const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));