import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mockAuthProvider = {};
const mockContext = React.createContext(mockAuthProvider);
jest.mock('./contexts/Auth0Provider', () => {
  return {
    Auth0Provider: ({ children }: any) => (
      <mockContext.Provider value={mockAuthProvider}>
        {children}
      </mockContext.Provider>
    ),
    useAuth0: () => mockAuthProvider,
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
