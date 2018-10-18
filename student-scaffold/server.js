// These first two lines of code establish express and mongoose libraries
const express = require('express');
const mongoose = require('mongoose');
// This line of code establishes the port
const PORT = process.env.PORT || 3000;
// This line of code creates a variable on which express functions will run
const app = express();

// These lines
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true });


require('./routes/api-routes')(app);
require('./routes/html-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});