// Order Component
let order = require('../components/order/order.vue').default;
let vieworder = require('../components/order/vieworder.vue').default;
let searchorder = require('../components/order/search.vue').default;

export default [
     // Order Routes
 { path: '/order', component: order, name:'order'},
 { path: '/view-order/:id', component: vieworder, name:'view-order'},
 { path: '/searchorder', component: searchorder, name:'searchorder'},
]