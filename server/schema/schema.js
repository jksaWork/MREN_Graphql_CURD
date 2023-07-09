import { clients, projects } from "./Sample.js";
import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const clientType = new GraphQLObjectType({
  name: "clients",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: clientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.map((client) => client.id == args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
