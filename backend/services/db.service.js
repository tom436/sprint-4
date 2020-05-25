
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url =  'mongodb+srv://Tom_T:JlQfFqWL6rT00n8x@farm-to-you-ql8dm.mongodb.net/test?retryWrites=true&w=majority'
// Database Name
const dbName = 'farm_db';

var dbConn = null;


async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(url, {useNewUrlParser: true,useUnifiedTopology: true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}


async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    // connect,
    getCollection
}