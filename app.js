const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/addProduct',(req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button>add product</button></form>')
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

app.use('/',(req, res, next) => {
 // console.log('In another middleware!',req.originalUrl);
  res.send('<h1>Express is here to help</h1>');
});


app.listen(3000);