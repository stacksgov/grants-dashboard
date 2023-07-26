import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_DB || !MONGODB_URI) {
  throw new Error('Define MongoDB enviornment variables!')
}

export async function databaseConnect() {

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = await client.db(MONGODB_DB);
  return { client, db };
}