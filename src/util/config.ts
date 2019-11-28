export const makeConfig = () => {
  return {
    auth0: {
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientDomain: process.env.AUTH0_CLIENT_DOMAIN!,
      clientRedirectUri: process.env.AUTH0_CLIENT_REDIRECT_URI!,
      logoutReturnTo: process.env.AUTH0_LOGOUT_RETURN_TO!,
    },
  };
};
