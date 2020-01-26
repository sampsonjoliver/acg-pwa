import ApolloClient from 'apollo-boost';
import { makeTokenRepository } from './auth/makeTokenRepository';

const tokenRepository = makeTokenRepository();

const apolloClient = new ApolloClient({
  uri: 'https://prod-api.acloud.guru/bff/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${tokenRepository.getTokenFromCookie()}`,
      },
    });
  },
});

export { apolloClient };
