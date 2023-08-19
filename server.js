import { Bson,MongoClient } from "https://deno.land/x/mongo@v0.31.2/mod.ts";
import "https://deno.land/std@0.193.0/dotenv/load.ts";

const client = new MongoClient();

try {
  await client.connect(Deno.env.get("MONGO_URL"));  
} catch(err) {
  console.log(err);
}
