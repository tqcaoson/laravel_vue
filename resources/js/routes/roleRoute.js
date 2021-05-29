// Role Component 
let storerole = require('../components/role/create.vue').default;
let role = require('../components/role/index.vue').default;
let editrole = require('../components/role/edit.vue').default;

export default [
      // Role Routes
  { path: '/store-role', component: storerole, name:'store-role'},
  { path: '/role', component: role, name:'role'},
  { path: '/edit-role/:id', component: editrole, name:'edit-role'},
]