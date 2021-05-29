// Empoyee Component 
let storeemployee = require('../components/employee/create.vue').default;
let employee = require('../components/employee/index.vue').default;
let editemployee = require('../components/employee/edit.vue').default;

export default [
      // Employee Routes
  { path: '/store-employee', component: storeemployee, name:'store-employee'},
  { path: '/employee', component: employee, name:'employee'},
  { path: '/edit-employee/:id', component: editemployee, name:'edit-employee'},
]