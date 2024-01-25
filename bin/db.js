const mongoose = require('mongoose');
const MongoDB_URI = process.env.MongoDB_URI ;

const db = () =>{
    mongoose.connect(MongoDB_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.log(err));
}
module.exports = db;