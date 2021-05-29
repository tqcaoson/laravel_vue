 // Customer Component  
 let storecustomer = require('../components/customer/create.vue').default;
 let customer = require('../components/customer/index.vue').default;
 let editcustomer = require('../components/customer/edit.vue').default;

export default [
     // Customer Routes
  { path: '/store-customer', component: storecustomer, name:'store-customer'},
  { path: '/customer', component: customer, name:'customer'},
  { path: '/edit-customer/:id', component: editcustomer, name:'edit-customer'},
]