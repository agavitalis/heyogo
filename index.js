var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var cors = require('cors');
var db_connection = require('./services/db');
var web_routes = require('./routes/web');


const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//db connection
//db_connection.connection_db()

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