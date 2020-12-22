import express = require("express");
import { graphqlHTTP } from "express-graphql";
import { getSchema } from './graphql';
import { getRestRoutes } from './rest';

const app = express();
app.use(express.json());

app.use("/rest", getRestRoutes());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: getSchema(),
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
