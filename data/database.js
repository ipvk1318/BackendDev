const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;


let database;

async function connect(){
    // it establishes a connection by returning a so-called
    // promise
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('blog');
}


function getDb(){
    if(!database){
        throw {message: 'Database connection not established'};
    }

    return database;
}

module.exports = {
    connectToDatabase: connect,
    getDb: getDb
}




