import Cookies from 'js-cookie';

export type TokenRepository = ReturnType<typeof makeTokenRepository>;

export const makeTokenRepository = () => {
  const getTokenFromCookie = () => Cookies.get('auth0_token') || '';
  const setTokenInCookie = (token: string) =>
    Cookies.set('auth0_token', token, {
      expires: 14,
    });
  const removeTokenFromCookie = () => Cookies.remove('auth0_token');

  return {
    getTokenFromCookie,
    setTokenInCookie,
    removeTokenFromCookie,
  };
};
