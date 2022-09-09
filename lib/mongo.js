import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

let client;
let clientPromise;

if (!uri) {
    throw new Error('Please set Mongo URI')
}



    client = new MongoClient(uri, options)
    clientPromise = client.connect()


export default clientPromise