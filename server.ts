import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.31.0/mod.ts";
import "https://deno.land/std@0.193.0/dotenv/load.ts"

const user = Deno.env.get("USER")
const password = Deno.env.get("PASSWORD")
const dbClusterName = Deno.env.get("DB_CLUSTER_NAME")
const dbName = Deno.env.get("DB_NAME")
// const url = Deno.env.get("MONGO_URL_2");
const url = `mongodb+srv://${user}:${password}@${dbClusterName}/${dbName}?authMechanism=SCRAM-SHA-1`;

console.log(url)

const client = new MongoClient();

const run = async() => {
  try {
    await client.connect(url);
    console.log("You successfully connected to MongoDB!")
  } finally {
    await client.close();
  }
} 

run().catch(console.dir);

/*

interface UserSchema {
  _id: ObjectId;
  username: string;
  password: string;
}

const db = client.database("deno");
const users = db.collection<UserSchema>("users");

const insertId = await users.insertOne({
  username: "user1",
  password: "pass1",
});

const insertIds = await users.insertMany([
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
]);

*/
