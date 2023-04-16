import { ApolloClient, InMemoryCache } from '@apollo/client';

const SPACE_X_ENDPOINT = 'https://spacex-production.up.railway.app/';
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

export const apollo = new ApolloClient({
  uri: SPACE_X_ENDPOINT,
  cache,
});
