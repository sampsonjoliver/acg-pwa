import { makeAuthClient } from './makeAuthClient';
import { makeDecodeToken } from './makeDecodeToken';
import { makeGetTokenClient, GetTokenClient } from './makeGetTokenClient';
import { makeRefreshToken } from './makeRefreshToken';
import { makeGetToken } from './makeGetToken';
import { makeMemoizedGetToken } from './makeMemoizedGetToken';
import { makeTokenRepository } from './makeTokenRepository';
import { makeTokenUtils } from './tokenUtils';
import { makeLogout } from './makeLogout';
import { makeGetActiveUser } from './makeGetActiveUser';
import { makeAuthorise } from './makeAuthorise';
import { AuthorizeOptions } from 'auth0-js';
import { makeHandleLoginResult } from './makeHandleLoginResult';

export type DEFAULT_DOMAIN = 'primary' | 'secondary';

export type Auth0Error = {
  name:
    | 'a0.session.user_cancelled'
    | 'a0.response.invalid'
    | 'a0.state.invalid'
    | 'a0.session.failed_load'
    | string;
  message: string;
  json: {
    error: 'access_denied' | 'unauthorized' | string;
    error_description: string;
    state: string;
  };
};

type AuthServiceProps = {
  AUTH0_PRIMARY_DOMAIN?: string;
  AUTH0_SECONDARY_DOMAIN?: string;
  AUTH0_API_AUDIENCE?: string;
  AUTH0_CLIENT_ID: string;
  AUTH0_SCOPE?: string;
  DEFAULT_DOMAIN: DEFAULT_DOMAIN;
};

export type AuthService = ReturnType<typeof makeAuthService>;

export const makeAuthService = ({
  AUTH0_PRIMARY_DOMAIN = 'acloudguru.auth0.com',
  AUTH0_SECONDARY_DOMAIN = 'auth.acloud.guru',
  AUTH0_API_AUDIENCE = 'https://acloudguru-dev-samo.au.auth0.com/api/v2/',
  AUTH0_CLIENT_ID,
  AUTH0_SCOPE = 'openid profile offline_access',
  DEFAULT_DOMAIN,
}: AuthServiceProps) => {
  const auth0PrimaryDomainClient = makeAuthClient({
    domain: AUTH0_PRIMARY_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    scope: AUTH0_SCOPE,
    audience: AUTH0_API_AUDIENCE,
  });

  const auth0SecondaryDomainClient = makeAuthClient({
    domain: AUTH0_SECONDARY_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    scope: AUTH0_SCOPE,
    audience: AUTH0_API_AUDIENCE,
  });

  const decodeToken = makeDecodeToken();

  const tokenUtils = makeTokenUtils({
    AUTH0_PRIMARY_DOMAIN,
    AUTH0_SECONDARY_DOMAIN,
    DEFAULT_DOMAIN,
    decodeToken,
  });

  const tokenRepository = makeTokenRepository();

  const getTokenClient = makeGetTokenClient({
    tokenRepository,
    tokenUtils,
    auth0PrimaryDomainClient,
    auth0SecondaryDomainClient,
  });

  const refreshToken = makeRefreshToken({
    getTokenClient,
    tokenRepository,
  });

  const getToken = makeGetToken({
    refreshToken,
    tokenRepository,
    tokenUtils,
  });

  const memoizedGetToken = makeMemoizedGetToken({
    getToken,
  });

  const makeLogin = ({
    getTokenClient,
  }: {
    getTokenClient: GetTokenClient;
  }) => async (options: AuthorizeOptions) => {
    const client = await getTokenClient();
    return client.login(options);
  };

  return {
    login: makeLogin({ getTokenClient }),
    logout: makeLogout({ tokenRepository, getTokenClient }),
    getToken: memoizedGetToken,
    authorise: makeAuthorise({
      getToken: memoizedGetToken,
      decodeToken,
      tokenUtils,
    }),
    getActiveUser: makeGetActiveUser({
      getToken: memoizedGetToken,
      decodeToken,
    }),
    isAuthenticated: async () => !!(await memoizedGetToken()),
    handleLoginResult: makeHandleLoginResult({
      getTokenClient,
      tokenRepository,
    }),
  };
};
