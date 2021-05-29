 // Supplier Component 
 let storesupplier = require('../components/supplier/create.vue').default;
 let supplier = require('../components/supplier/index.vue').default;
 let editsupplier = require('../components/supplier/edit.vue').default;

export default [
      // Supplier Routes
  { path: '/store-supplier', component: storesupplier, name:'store-supplier'},
  { path: '/supplier', component: supplier, name:'supplier'},
  { path: '/edit-supplier/:id', component: editsupplier, name:'edit-supplier'},
]