import ApolloClient, {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-boost';
import { makeTokenRepository } from './auth/makeTokenRepository';
import { fragmentTypes } from '../models/fragmentTypes';
import { makeConfig } from './config';

const tokenRepository = makeTokenRepository();

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: fragmentTypes,
});

const { graphql } = makeConfig();

const apolloClient = new ApolloClient({
  uri: graphql.url,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${tokenRepository.getTokenFromCookie()}`,
      },
    });
  },
  cache: new InMemoryCache({ fragmentMatcher }),
});

export { apolloClient };
