 // Stock Component 
 let stock = require('../components/product/stock.vue').default;
 let editstock = require('../components/product/edit-stock.vue').default;

export default [
    // Stock Routes
  { path: '/stock', component: stock, name:'stock'},
  { path: '/edit-stock/:id', component: editstock, name:'edit-stock'},
]