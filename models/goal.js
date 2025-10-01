const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://FriendsData:DATABASE@frienddata.loqx1.mongodb.net/?retryWrites=true&w=majority&appName=FriendData');


const goalschema = new mongoose.Schema({
    goal:String,
    amount:Number,
    
})
module.exports = mongoose.model("goal",goalschema); 