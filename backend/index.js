const express = require("express");
const Connection = require('./database/db.js')
const Routes = require('./routes/routes.js') ;
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express() ;

dotenv.config() ;

app.use(bodyParser.json({extended : true})) ;
app.use(bodyParser.urlencoded({extended:true})) ; 
app.use(cors())

app.use('/', Routes ) ;

const PORT = 8000 ;


const username = process.env.DB_USERNAME ;
const password = process.env.DB_PASSWORD ;


Connection(username,password) ;

app.listen(PORT, ()=> console.log('Server is running successfully')) ;  