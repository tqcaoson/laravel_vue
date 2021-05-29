// Category Component 
let storecategory = require('../components/category/create.vue').default;
let category = require('../components/category/index.vue').default;
let editcategory = require('../components/category/edit.vue').default;

export default [
     // Category Routes
  { path: '/store-category', component: storecategory, name:'store-category'},
  { path: '/category', component: category, name:'category'},
  { path: '/edit-category/:id', component: editcategory, name:'edit-category'},
]