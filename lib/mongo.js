import { MongoClient, ServerApiVersion } from 'mongodb';

//const uri = "mongodb+srv://<user>:<pass>>@cluster0.bkl5ysq.mongodb.net/?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    const database = client.db("grants-dashboard");
    const grants = database.collection("grants");
    const query = { _id: 100 };
    const grant = await grants.findOne(query);
    console.log(grant);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
