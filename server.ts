import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.31.0/mod.ts";
import "https://deno.land/std@0.193.0/dotenv/load.ts"

const url = Deno.env.get("MONGO_URL_2");
console.log(url)

const client = new MongoClient();

await client.connect(url);
console.log("success!!")

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
