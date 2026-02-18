import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
  }

  type Query {
    books: [Book!]!
  }
`;

const resolvers = {
  Query: {
    books: () => [
      { id: "1", title: "The Hobbit" },
      { id: "2", title: "Dune" },
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);
export const GET = handler;
export const POST = handler;
