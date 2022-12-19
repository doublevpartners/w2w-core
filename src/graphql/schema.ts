import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER } from "./Mutations/User";
import { GREETING } from "./Queries/Greeting";

const RootQuerySchema = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greeting: GREETING
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuerySchema,
    mutation: Mutation
})