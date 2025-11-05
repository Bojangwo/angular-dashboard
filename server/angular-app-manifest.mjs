
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-dashboard/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-dashboard/home",
    "route": "/angular-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/angular-dashboard/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-dashboard/profile"
  },
  {
    "renderMode": 2,
    "route": "/angular-dashboard/inbox"
  },
  {
    "renderMode": 2,
    "route": "/angular-dashboard/to-do-list"
  },
  {
    "renderMode": 2,
    "route": "/angular-dashboard/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 651, hash: '81d085e14d61c269ca79041c21e830b3523588c13b832e994d8f194e90145bea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '1556287eac03055ffc5bf792202610675a354d31cb5c38777ef7c440c0a1f918', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inbox/index.html': {size: 8902, hash: 'bb54d56c6f10d37073af2f4cb6c52ba1ba7e85cdd62619f79ec366617a83fc10', text: () => import('./assets-chunks/inbox_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 75817, hash: 'fefcb53e8cfdbf4ee753bb1d592cd61cca5c9c41a9a950e71df6fbda081c816a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6382, hash: 'eac548324a928850bb94c36ffa2fea83af82f7bf4eaff4385a777e2c790d0bb0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'to-do-list/index.html': {size: 7808, hash: '58f08273d619870d70fb84916a64dfe4b778d8fc1d7af6e6adff34cfcfe7347a', text: () => import('./assets-chunks/to-do-list_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 7725, hash: '8e64056ccf805292b9ffc16d65893f09ce00428b1bd6ab731d5b25d0570b6567', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
