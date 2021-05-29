// User Component 
let storeuser = require('../components/user/create.vue').default;
let user = require('../components/user/index.vue').default;
let edituser = require('../components/user/edit.vue').default;

export default [
      // User Routes
  { path: '/store-user', component: storeuser, name:'store-user'},
  { path: '/user', component: user, name:'user'},
  { path: '/edit-user/:id', component: edituser, name:'edit-user'},
]