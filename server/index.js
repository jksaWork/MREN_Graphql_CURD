import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import { connectToDB } from "./config/db.js";
dotenv.config();

const app = express();
// conect to database Code
await connectToDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("App Is Runing On " + port));
