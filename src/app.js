const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
 
const PORT = process.env.PORT || 5000;

// Define paths for Express config

const publicDirectoryFolder = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars view engine and location

app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialsPath);

// Setup static directory

app.use(express.static(publicDirectoryFolder));

// Server Port

app.listen(PORT, () => {
  console.log('server running...')
});