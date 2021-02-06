/** @type {import("snowpack").SnowpackUserConfig } */
const rollupPnPResolve = require('rollup-plugin-pnp-resolve')

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  packageOptions: {
    rollup: {
      plugins: [
        rollupPnPResolve()
      ]
    }
  }
}
