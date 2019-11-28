import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

const DEFAULT_REDIRECT_CALLBACK = (appState: any) =>
  window.history.replaceState({}, document.title, window.location.pathname);

const Auth0Context = React.createContext<Auth0ContextClient>(
  (undefined as any) as Auth0ContextClient
);

export const useAuth0 = () => useContext(Auth0Context);

type Auth0ProviderProps = {
  onRedirectCallback: (stateToPPreserve: any) => void;
} & Auth0ClientOptions;

export const Auth0Provider: React.FC<Auth0ProviderProps> = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const loginWithPopup = async (params: PopupLoginOptions = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client!.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }

    const user = await auth0Client!.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client!.handleRedirectCallback();
    const user = await auth0Client!.getUser();
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
        popupOpen,
        loginWithPopup,
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
  user: any,
  loading: boolean,
  popupOpen: boolean,
  loginWithPopup: (params?: PopupLoginOptions) => Promise<void>,
  handleRedirectCallback: () => Promise<void>,
  auth0Client: Auth0Client | undefined
) => {
  return {
    isAuthenticated,
    user,
    loading,
    popupOpen,
    loginWithPopup,
    handleRedirectCallback,
    getIdTokenClaims: (p?: getIdTokenClaimsOptions) =>
      auth0Client!.getIdTokenClaims(p),
    loginWithRedirect: (p?: RedirectLoginOptions) =>
      auth0Client!.loginWithRedirect(p),
    getTokenSilently: (p?: GetTokenSilentlyOptions) =>
      auth0Client!.getTokenSilently(p),
    getTokenWithPopup: (p?: GetTokenWithPopupOptions) =>
      auth0Client!.getTokenWithPopup(p),
    logout: (p?: LogoutOptions) => auth0Client!.logout(p),
  };
};
