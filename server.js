const express = require('express');
const bodyParser =require('body-parser');
//const as mongo db instead of connectDB
const mongodb = require('./DB/connection')
const port = process.env.port;
const app = express();

app
    .use(bodyParser.json())
    .use((req,res,next) => {
        res.setHeader('access-controll-allow-origin','*');
        next();
})
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) =>{
    if (err){
        console.log(err);
    }else{
        app.listen(port);
        console.log(`connected to db and listening on ${port}`);
        console.log('you got this!');
        console.log('just a little more testing!')
    }
});


//depricated from week1
/*const connectDB = require('./DB/connection')
connectDB();
app.use(express.json({extended:false}));
app.use('/api/user',require('./API/user'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});*/