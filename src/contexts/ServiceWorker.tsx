import React, { useContext, useState, useEffect } from 'react';
import {
  RegisteredServiceWorker,
  registerServiceWorker,
} from '../registerServiceWorker';
import { useLocation } from 'react-router';

const ServiceWorkerContext = React.createContext<RegisteredServiceWorker | null>(
  null
);

export const useServiceWorker = () => useContext(ServiceWorkerContext);

export const useServiceWorkerHasUpdate = () => {
  const worker = useServiceWorker();
  const [hasUpdate, setHasUpdate] = useState(false);

  worker?.workbox.addEventListener('installed', event => {
    if (event.isUpdate) {
      setHasUpdate(true);
    }
  });

  return hasUpdate;
};

export const ServiceWorkerProvider: React.FC = ({ children }) => {
  const [sw, setServiceWorker] = useState<RegisteredServiceWorker>(null);
  const location = useLocation();

  useEffect(() => {
    registerServiceWorker().then(worker => {
      setServiceWorker(worker);
    });
  }, []);

  useEffect(() => {
    sw?.registration.update();
  }, [location, sw]);

  return (
    <ServiceWorkerContext.Provider value={sw}>
      {children}
    </ServiceWorkerContext.Provider>
  );
};
