const mongoose = require('mongoose');
require('dotenv').config({
    path: '../.env'
});

exports.connect = async () => {
    
    // connect to DB
    mongoose.set('strictQuery', false);
    const mongoOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    const mongodbUri ='mongodb+srv://josphatwanjiruw:7qTmu89MAslEngJW@cluster0.0geq0sd.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(mongodbUri, mongoOptions);
    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
};