 // Product Component 
 let storeproduct = require('../components/product/create.vue').default;
 let product = require('../components/product/index.vue').default;
 let editproduct = require('../components/product/edit.vue').default;

 export default [
    // Product Routes
    { path: '/store-product', component: storeproduct, name:'store-product'},
    { path: '/product', component: product, name:'product'},
    { path: '/edit-product/:id', component: editproduct, name:'edit-product'},
]