// Permission Component 
let storepermission = require('../components/permission/create.vue').default;
let permission = require('../components/permission/index.vue').default;
let editpermission = require('../components/permission/edit.vue').default;

export default [
      // Permission Routes
  { path: '/store-permission', component: storepermission, name:'store-permission'},
  { path: '/permission', component: permission, name:'permission'},
  { path: '/edit-permission/:id', component: editpermission, name:'edit-permission'},
]