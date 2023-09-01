import { ApolloServer } from '@apollo/server';
const { startStandaloneServer } = require('@apollo/server/standalone');
import { buildSubgraphSchema } from '@apollo/subgraph';
const { readFileSync } = require('fs');
const gql = require('graphql-tag');

const typeDefs = gql(
  readFileSync(__dirname.concat('/schema.graphql'), { encoding: 'utf-8' }),
);

import { resolvers } from './resolvers';

const startApolloServer = async () => {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  const port = 4002;
  const subgraphName = 'users';

  try {
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        return {};
      },
      listen: { port },
    });

    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  } catch (err) {
    console.error(err);
  }
};

startApolloServer();
