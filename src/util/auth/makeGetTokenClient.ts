import { AuthClient } from './makeAuthClient';
import { TokenRepository } from './makeTokenRepository';
import { TokenUtils } from './tokenUtils';

type GetClientProps = {
  tokenRepository: TokenRepository;
  tokenUtils: TokenUtils;
  auth0PrimaryDomainClient: AuthClient;
  auth0SecondaryDomainClient: AuthClient;
};

export type GetTokenClient = ReturnType<typeof makeGetTokenClient>;

export const makeGetTokenClient = ({
  tokenRepository,
  tokenUtils,
  auth0PrimaryDomainClient,
  auth0SecondaryDomainClient,
}: GetClientProps) => async () => {
  const token = await tokenRepository.getTokenFromCookie();
  const domain = tokenUtils.getTokenIssuer(token);

  if (domain === 'secondary') {
    return auth0SecondaryDomainClient;
  } else {
    return auth0PrimaryDomainClient;
  }
};
