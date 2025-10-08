
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/lab1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lab1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOOWFZ73.js"
    ],
    "route": "/lab1/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24705, hash: '667cfa19c297d6de0b55b032418d8ac154a60a174685ed23193e0f1af3e399ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25230, hash: 'd6ef9cd2b1a5daba9a8860442e9352d4dc3243652a1a31627f2a3280bb55f900', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28238, hash: 'f66ae1dad31e3e3162ed176e28f6e3f820e23858ecac624b1ed02e34d84fa2c0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32523, hash: '0b956707fe061ddf73bb3dca8072a562f7886c04a69e07a3f31de3a4ff078e50', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
