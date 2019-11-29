import React, { useContext } from 'react';
import { makeConfig, Config } from '../util/config';

const ConfigContext = React.createContext<Config>({} as any);

export const ConfigProvider: React.FC = props => {
  const config = makeConfig();

  return (
    <ConfigContext.Provider value={config}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
