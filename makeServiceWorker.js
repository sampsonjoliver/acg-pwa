const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild
    .injectManifest({
      swSrc: 'src/util/serviceWorker/service-worker.js',
      swDest: 'build/service-worker.js',
      globDirectory: 'build',
      globPatterns: ['**/*.{js,css,html,png,svg,json,ico,woff,woff2}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn);
      console.info(`${count} files will be precached, 
                  totaling ${size / (1024 * 1024)} MBs.`);
    });
};
buildSW();
