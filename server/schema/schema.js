import { clients, projects } from "./Sample.js";
import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import Clients from "../models/Client.js";
import Project from "../models/Projects.js";
import Client from "../models/Client.js";

const clientType = new GraphQLObjectType({
  name: "clients",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: clientType,
      resolve(parent, args) {
        //    console.log(parent, args);
        return Client.findById(parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: clientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //    console.log(parent, args);
        return Clients.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(clientType),
      resolve(parent, args) {
        return Clients.find(); //.find((client) => client.id === args.id);
      },
    },

    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //    console.log(parent, args);
        return Project.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find(); //.find((client) => client.id === args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
