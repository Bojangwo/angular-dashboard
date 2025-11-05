
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/student-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/student-app/home",
    "route": "/student-app"
  },
  {
    "renderMode": 2,
    "route": "/student-app/home"
  },
  {
    "renderMode": 2,
    "route": "/student-app/profile"
  },
  {
    "renderMode": 2,
    "route": "/student-app/inbox"
  },
  {
    "renderMode": 2,
    "route": "/student-app/to-do-list"
  },
  {
    "renderMode": 2,
    "route": "/student-app/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 645, hash: '9a302eeff6d084607b282a147e760f1f8b3c25bd5c21b87d8422561ed0521c8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1158, hash: '38ab105bcf94820afa4dc7bfb7b485d012d448855e8c06b44454a772e25c3033', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inbox/index.html': {size: 8896, hash: '3bd73ccc53dd51574e3c938873c29b211028aa2ddfbf84365b47e26280f2b2a9', text: () => import('./assets-chunks/inbox_index_html.mjs').then(m => m.default)},
    'to-do-list/index.html': {size: 7802, hash: 'f75411a8f13bfd748fa26b7c8ea3d3f22c715fc780192f3ec2b682194d275aa0', text: () => import('./assets-chunks/to-do-list_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6376, hash: 'fbbb7f4c4b0b0c448b72c823d93874b8c47d289ae13ba22a0f637649348d690c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 75811, hash: 'dd8aceb2eb1ebcbd15c886d5794f9422d2c64e34433a1b555bf6d5c70e4ad493', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 7719, hash: 'e5ab625e130d8e484b91b147cbe948f29806a9bc289be22f74402a820ca6773a', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
