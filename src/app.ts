import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import morgan from "morgan";

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

export default app;