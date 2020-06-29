const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    // console.log('In another middleware!',req.originalUrl);
     res.send('<h1>Express is here to help</h1>');
   });

module.exports = router;