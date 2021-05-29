 // Expens Component 
 let storeexpense = require('../components/expense/create.vue').default;
 let expense = require('../components/expense/expense.vue').default;
 let editexpense = require('../components/expense/edit.vue').default;

export default [
  // Expense Routes
  { path: '/store-expense', component: storeexpense, name:'store-expense'},
  { path: '/expense', component: expense, name:'expense'},
  { path: '/edit-expense/:id', component: editexpense, name:'edit-expense'},
]