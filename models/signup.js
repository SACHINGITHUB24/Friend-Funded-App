    const mongoose = require('mongoose');

    mongoose.connect('mongodb+srv://FriendsData:DATABASE@frienddata.loqx1.mongodb.net/?retryWrites=true&w=majority&appName=FriendData');


    const SchemaData = new mongoose.Schema({
        username: String,
        email: String,
        password: String
    });

    module.exports = mongoose.model('user',SchemaData);












    //Username
    //FriendsData
    //Pass
    //DATABASE
