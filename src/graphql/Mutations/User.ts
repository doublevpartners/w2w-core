import {GraphQLString} from "graphql"
import { User } from "../../models/User";

export const CREATE_USER = {
    type: GraphQLString,
    args: {
        name: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        
        const {name} = args;
        
        const result = await User.insert({name})
        console.log(result)
        return 'user createUser'
    }
}