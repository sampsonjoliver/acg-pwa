import { GetToken, GetTokenOptions } from './makeGetToken';

let getTokenPromise: ReturnType<GetToken> | null = null;

type MemoizedGetTokenProps = {
  getToken: GetToken;
};

export const makeMemoizedGetToken = ({ getToken }: MemoizedGetTokenProps) => (
  options?: GetTokenOptions
) => {
  if (!getTokenPromise) {
    getTokenPromise = getToken(options);
  }

  return getTokenPromise
    .then(data => {
      getTokenPromise = null;
      return data;
    })
    .catch(err => {
      getTokenPromise = null;
      throw err;
    });
};
