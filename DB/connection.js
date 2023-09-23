const mongoose =require('mongoose');

const URI = "mongodb+srv://Blah84:MQGJQVNROGZdr1I8@cse341mh.lnqbnxy.mongodb.net/";

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected...!');
}

module.exports = connectDB;