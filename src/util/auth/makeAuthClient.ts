import Auth0, {
  AuthorizeOptions,
  LogoutOptions,
  ChangePasswordOptions,
  ParseHashOptions,
  RenewAuthOptions,
  Auth0DecodedHash,
  Auth0Callback,
  Auth0ParseHashError,
} from 'auth0-js';
import { promisify } from 'util';

type AuthClientProps = {
  domain: string;
  clientId: string;
  scope: string;
  audience: string;
  redirectUri: string;
};

export type AuthClient = ReturnType<typeof makeAuthClient>;

export const makeAuthClient = ({
  domain,
  clientId,
  scope,
  audience,
  redirectUri,
}: AuthClientProps) => {
  const auth0 = new Auth0.WebAuth({
    clientID: clientId,
    domain,
    scope,
    audience,
    responseType: 'code token id_token',
  });

  const loginAsync = promisify(auth0.authorize).bind(auth0);
  const parseHashAsync = promisify(
    auth0.parseHash as (
      options: ParseHashOptions,
      callback: Auth0Callback<Auth0DecodedHash | null, Auth0ParseHashError>
    ) => void
  ).bind(auth0);
  const refreshTokenAsync = promisify(auth0.checkSession).bind(auth0);
  const logoutAsync = promisify(auth0.logout).bind(auth0);
  const resetPasswordAsync = promisify(auth0.changePassword).bind(auth0);

  return {
    login: (params?: AuthorizeOptions) =>
      loginAsync({ ...params }) as Promise<void>,
    parseHash: (params: ParseHashOptions) =>
      parseHashAsync(params) as Promise<Auth0DecodedHash>,
    refreshToken: (params?: RenewAuthOptions) =>
      refreshTokenAsync({
        ...params,
        clientID: clientId,
        domain,
        redirectUri,
      }) as Promise<Auth0DecodedHash>,
    logout: (params?: LogoutOptions) =>
      logoutAsync({ ...params, clientID: clientId }) as Promise<void>,
    resetPassword: (params: ChangePasswordOptions) =>
      resetPasswordAsync(params),
  };
};
