const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise
//Mongoose Connect
mongoose.connect('mongodb://princetonevans:princetonevans@ds233208.mlab.com:33208/pusherpoll')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
