import { GetTokenClient } from './makeGetTokenClient';
import { TokenRepository } from './makeTokenRepository';

type RefreshTokenProps = {
  getTokenClient: GetTokenClient;
  tokenRepository: TokenRepository;
};

export type RefreshToken = ReturnType<typeof makeRefreshToken>;

export const makeRefreshToken = ({
  getTokenClient,
  tokenRepository,
}: RefreshTokenProps) => async () => {
  const client = await getTokenClient();

  try {
    const res = await client.refreshToken({});

    const newToken = res.accessToken || '';
    tokenRepository.setTokenInCookie(newToken);

    return newToken;
  } catch (err) {
    console.log('Failed to refresh token. Reason:', { err });
    throw err;
  }
};
