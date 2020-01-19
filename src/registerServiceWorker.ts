import { Workbox } from 'workbox-window';
import { Unpacked } from './util/types';

const SERVICE_WORKER = `${process.env.PUBLIC_URL}/service-worker.js`;

export type RegisteredServiceWorker = Unpacked<
  ReturnType<typeof registerServiceWorker>
>;

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    const workbox = new Workbox(SERVICE_WORKER);

    workbox.active.then(() =>
      console.log(
        'This web app is being served cache-first by a service worker.'
      )
    );

    workbox.addEventListener('activated', () => {
      console.log('A new service worker has been activated =)');
    });

    workbox.addEventListener('waiting', () => {
      console.log('Service worker update is stuck waiting');
    });

    workbox.addEventListener('installed', event => {
      if (event.isUpdate) {
        console.log(
          'New content is available and will be used when all tabs for this page are closed.'
        );
      }
    });

    const registration = await workbox.register();

    return { workbox, registration };
  }

  console.log('Could not install service worker.');

  return null;
};

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
