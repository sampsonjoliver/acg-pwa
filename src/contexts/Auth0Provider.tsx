import React, { useState, useEffect, useContext } from 'react';
import { useConfig } from './ConfigProvider';
import { AuthService, makeAuthService } from '../util/auth/makeAuthService';
import { GetActiveUser } from '../util/auth/makeGetActiveUser';

const DEFAULT_REDIRECT_CALLBACK = (appState: any) =>
  window.history.replaceState({}, document.title, window.location.pathname);

const Auth0Context = React.createContext<Auth0ContextClient>(
  (undefined as any) as Auth0ContextClient
);

export const useAuth0 = () => useContext(Auth0Context);

type Auth0ProviderProps = {
  onRedirectCallback: (stateToPPreserve: any) => void;
};

export const Auth0Provider: React.FC<Auth0ProviderProps> = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
}) => {
  const config = useConfig();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<GetActiveUser>(null);
  const [loading, setLoading] = useState(true);

  const auth0Client = makeAuthService({
    AUTH0_PRIMARY_DOMAIN: config.auth0.clientDomain,
    AUTH0_SECONDARY_DOMAIN: config.auth0.clientDomain,
    AUTH0_CLIENT_ID: config.auth0.clientId,
    DEFAULT_DOMAIN: 'primary',
  });
  useEffect(() => {
    const initAuth0 = async () => {
      if (
        window.location.search.includes('code=') ||
        window.location.hash.includes('code=')
      ) {
        const { state } = await auth0Client.handleLoginResult();
        onRedirectCallback(state);
      }

      try {
        const isAuthenticated = await auth0Client.isAuthenticated();
        setIsAuthenticated(isAuthenticated);

        if (isAuthenticated) {
          const user = await auth0Client.getActiveUser();
          setUser(user);
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    initAuth0();
  }, []);

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleLoginResult();
    const user = await auth0Client!.getActiveUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <Auth0Context.Provider
      value={makeAuth0(
        isAuthenticated,
        user,
        loading,
        handleRedirectCallback,
        auth0Client
      )}
    >
      {children}
    </Auth0Context.Provider>
  );
};

type Auth0ContextClient = ReturnType<typeof makeAuth0>;

const makeAuth0 = (
  isAuthenticated: boolean,
  user: GetActiveUser | null,
  loading: boolean,
  handleRedirectCallback: () => Promise<void>,
  auth0Client: AuthService
) => {
  return {
    isAuthenticated,
    user,
    loading,
    handleRedirectCallback,
    logout: auth0Client.logout,
    login: auth0Client.login,
    authorise: auth0Client.authorise,
  };
};
