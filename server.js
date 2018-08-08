const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
var fs = require("fs")
const mongoose = require('mongoose');
mongoose.connect('mongodb://Danny:Danny_97@ds215822.mlab.com:15822/carpool');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// API calls
app.get('/api/hello', (req, res) => {
  mongoose.connect('mongodb://Danny:Danny_97@ds215822.mlab.com:15822/carpool');
  var kits;
  Cat.find(function (err, kittens) {
    if (err) return console.error("MY ERROR");
    kits = kittens;
    res.send({express: JSON.stringify(kittens)});
  })
});



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));