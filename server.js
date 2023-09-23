const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

connectDB();

const port = 3000;
app.use(express.json({extended:false}));
app.use('/api/user',require('./API/user'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});