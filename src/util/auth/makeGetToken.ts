import { RefreshToken } from './makeRefreshToken';
import { TokenRepository } from './makeTokenRepository';
import { TokenUtils } from './tokenUtils';

type GetTokenProps = {
  refreshToken: RefreshToken;
  tokenRepository: TokenRepository;
  tokenUtils: TokenUtils;
};

export type GetToken = ReturnType<typeof makeGetToken>;
export type GetTokenOptions = {
  requireRefresh?: boolean;
};

export const makeGetToken = ({
  refreshToken,
  tokenRepository,
  tokenUtils,
}: GetTokenProps) => async (
  options: GetTokenOptions = { requireRefresh: false }
) => {
  const accessToken = await tokenRepository.getTokenFromCookie();

  if (!accessToken) {
    throw new Error('login_required');
  }

  if (options.requireRefresh) {
    try {
      return refreshToken();
    } catch (err) {
      throw new Error('refresh_failed');
    }
  }

  const token = await tokenRepository.getTokenFromCookie();
  const isExpired = tokenUtils.isTokenExpired(token);

  if (!isExpired) {
    return token;
  }

  try {
    return refreshToken();
  } catch (err) {
    return token;
  }
};
