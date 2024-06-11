const { MongoClient } = require('mongodb'); // Correctly import MongoClient
const client = new MongoClient("mongodb://localhost:27017/hbs");
async function connect() {
    try {
        await client.connect();
        console.log("Connected to database!");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}
connect();