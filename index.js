import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors  from 'cors';
import db_connection from './services/db';
import web_routes from  './routes/web';

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//db connection
db_connection.connection_db()

//static files
app.use(express.static('public'))

//Routes imported here
app.use(web_routes);

//view engine here
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Now tisten to this port 
if (app.listen(process.env.PORT)) {
    console.log("Server is listening to Port " + process.env.PORT);
}
else{
    console.log("An error occured");
}

//uncomment if you intend to write unit tests
//module.exports = app;