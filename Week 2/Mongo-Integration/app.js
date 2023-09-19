const { MongoClient } = require("mongodb")

const connectionURI = "mongodb://127.0.0.1:27017"

const client = new MongoClient(connectionURI)
client.connect().then(() => {

    console.log("Connected Successfully");
})
.catch((err) => {
        console.log("Connection Failed !!!",err);

    })

