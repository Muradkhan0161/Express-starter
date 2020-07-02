const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/addProduct',(req, res, next) => {
  res.sendFile(path.join(rootDir , 'views' , 'addProduct.html'));    
});
  
  router.post('/addProduct', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
  });

exports.routes = router;
exports.products = products;
  