const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Enable Cors
app.use(cors());

const port = 3000;

// Start server
app.listen(port, () => console.log( 'Server running on port  ' + port))
