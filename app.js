const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
  console.log('This will always runs first');
  next();
});

app.use('/addProduct',(req, res, next) => {
  console.log('Hey!');
  res.send('<h1>This is "Add product page"</h1>');
});

app.use('/',(req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Express is here to help</h1>');
});

app.listen(3000);