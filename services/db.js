import mongoose from 'mongoose';

function connection_db (){
    
    mongoose.connect(`${process.env.DBSERVER}/${process.env.DBNAME}`,{ useNewUrlParser: true, useUnifiedTopology: true  });
    
    //lets check if the connection was not successful
    mongoose.connection.on('error',function(){
        console.error.bind(console, 'connection error')
    })

    //if the connection was successful
    mongoose.connection.once('open', function () {
        console.log('Database connection was successful')
    })

}

exports.connection_db = connection_db;
