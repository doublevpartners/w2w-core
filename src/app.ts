import cors from "cors";
import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import morgan from "morgan";

const app: Application = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

app.get("/", (_req, res) => {
    res.send('Running lol...');
})

export default app;