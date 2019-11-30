import { GetTokenClient } from './makeGetTokenClient';
import { TokenRepository } from './makeTokenRepository';
import { LogoutOptions } from 'auth0-js';

type LogoutProps = {
  getTokenClient: GetTokenClient;
  tokenRepository: TokenRepository;
};

export const makeLogout = ({
  getTokenClient,
  tokenRepository,
}: LogoutProps) => async (opts?: LogoutOptions) => {
  const client = await getTokenClient();

  return Promise.all([
    tokenRepository.removeTokenFromCookie(),
    client.logout(opts),
  ]);
};
