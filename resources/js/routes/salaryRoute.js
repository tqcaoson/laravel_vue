  // Salary Component 
  let salary = require('../components/salary/all_employee.vue').default;
  let paysalary = require('../components/salary/create.vue').default;
  let allsalary = require('../components/salary/index.vue').default;
  let viewsalary = require('../components/salary/view.vue').default;
  let editsalary = require('../components/salary/edit.vue').default;

export default [
    // Salary Routes
    { path: '/given-salary', component: salary, name:'given-salary'},
    { path: '/pay-salary/:id', component: paysalary, name:'pay-salary'},

    { path: '/salary', component: allsalary, name:'salary'},
    { path: '/view-salary/:id', component: viewsalary, name:'view-salary'},
    { path: '/edit-salary/:id', component: editsalary, name:'edit-salary'},
]