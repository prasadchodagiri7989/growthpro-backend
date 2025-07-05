// app.js
const express = require('express');
const cors = require('cors');
const businessRoutes = require('./routes/businessRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/', businessRoutes);

module.exports = app;
