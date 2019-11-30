import { GetTokenClient } from './makeGetTokenClient';
import { TokenRepository } from './makeTokenRepository';

export const makeHandleLoginResult = ({
  getTokenClient,
  tokenRepository,
}: {
  getTokenClient: GetTokenClient;
  tokenRepository: TokenRepository;
}) => async () => {
  const client = await getTokenClient();
  const result = await client.parseHash({ hash: window.location.hash });

  const accessToken =
    result.accessToken ||
    (await client.refreshToken().then(it => it.accessToken));

  if (!accessToken) {
    throw new Error('Failed to get accessToken from login callback');
  }

  tokenRepository.setTokenInCookie(accessToken);
  return {
    accessToken,
    state: result.state,
  };
};
