const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();

app.set('view engine','ejs');
app.set('views' , 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname , 'public')));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle:'Tumi ke bhai', path: 'Eror'})
});

app.listen(3000);