const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const db_connection = require('./services/db');
const web_routes = require('./routes/web');


const app = express();
app.use(session({secret:'heyougu',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(cors());
dotenv.config();

//for session
app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});

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

//uncomment if you intend to export
//module.exports = app;