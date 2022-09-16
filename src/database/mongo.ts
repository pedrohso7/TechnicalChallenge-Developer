import dotenv from 'dotenv'
dotenv.config();

const mongoose = require('mongoose');

const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true };

try{
    mongoose.connect(process.env.DATABASE_URL, connectionParams);
} catch (error){
    throw "Não foi possível conectar ao banco de dados";
}

mongoose.Promise = global.Promise;

module.exports = mongoose;