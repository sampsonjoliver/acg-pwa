export type Config = ReturnType<typeof makeConfig>;

export const makeConfig = () => {
  return {
    auth0: {
      clientId: process.env.REACT_APP_AUTH0_CLIENT_ID!,
      clientDomain: process.env.REACT_APP_AUTH0_CLIENT_DOMAIN!,
      clientRedirectUri: `${window.location.protocol}//${
        window.location.host
      }/${process.env.REACT_APP_AUTH0_CLIENT_REDIRECT_URI!}`,
      logoutReturnTo: `${window.location.protocol}//${
        window.location.host
      }/${process.env.REACT_APP_AUTH0_LOGOUT_RETURN_TO!}`,
    },
    graphql: {
      url: `${process.env.REACT_APP_GRAPHQL_URL}`,
    },
    cloudinary: {
      url: `${process.env.REACT_APP_CLOUDINARY_URL}`,
      cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
    },
  };
};
