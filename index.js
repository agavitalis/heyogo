var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session')
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var cors = require('cors');
var db_connection = require('./services/db');
var web_routes = require('./routes/web');


const app = express();
app.use(session({secret:'heyougu',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(cors({credentials:true,origin:'http://localhost:5000'}));
dotenv.config();

//db connection
db_connection.connection_db()

//static files
app.use(express.static('public'))

//Routes imported here
app.use(web_routes);

//view engine here
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    // extname: 'html'
}));
app.set('view engine', 'handlebars');

//Now tisten to this port 

if (app.listen(process.env.PORT || 5000)) {
    console.log("Server is listening to Port " + process.env.PORT);
}
else{
    console.log("An error occured");
}

//uncomment if you intend to write unit tests
//module.exports = app;