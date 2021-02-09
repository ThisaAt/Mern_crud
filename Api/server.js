const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./dbs');
const businessRoutes = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('cannot connect to the db'+err)}
);
console.log(__dirname);
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/business',businessRoutes);

app.listen(PORT,function(){
    console.log('server is running on port : ', PORT);
});
