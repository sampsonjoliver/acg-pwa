import { DecodeToken } from './makeDecodeToken';
import { GetToken } from './makeGetToken';
import { TokenUtils, RequestedRoles } from './tokenUtils';

type AuthoriseProps = {
  decodeToken: DecodeToken;
  getToken: GetToken;
  tokenUtils: TokenUtils;
};

export const makeAuthorise = ({
  getToken,
  decodeToken,
  tokenUtils,
}: AuthoriseProps) => async (requestedRoles: RequestedRoles[]) => {
  const token = await getToken();
  const decodedToken = decodeToken({ token });

  if (decodedToken) {
    return tokenUtils.hasPermission({ decoded: decodedToken, requestedRoles });
  }

  return false;
};
