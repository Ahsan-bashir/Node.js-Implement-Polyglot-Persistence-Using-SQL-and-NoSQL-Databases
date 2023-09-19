const { MongoClient } = require('mongodb')

const connectionURI = "mongodb://localhost:27017"

const client = new MongoClient(connectionURI)
client.connect().then(() => {
    console.log("Connected Successfully");
})
.catch(() => {
        console.log("Connection Failed !!!");

    })

