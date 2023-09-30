const mongoose = require('mongoose');

//not sure if I ever used this? or if it was code from a test.
const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
});

module.exports = User = mongoose.model('user', user);