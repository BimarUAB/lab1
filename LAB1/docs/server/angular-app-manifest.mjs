
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOOWFZ73.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24700, hash: '5b1ddf9fb68a379d8fc2cee68564289c4a25ded61b976c4cf667aab20b5c7cf2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25225, hash: 'f838380cef1e18f1700f8091826238056679ab78a3be3e48dac16a882b00dd98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28233, hash: '10d024302a51b9fe6455622b28e298478ce44f18b8596aa0cc0c49e6b66c50ba', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32518, hash: '211fad010718a53638beaab609a5b9fb611cb92e2a2594ae839f8035619c8a2e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
