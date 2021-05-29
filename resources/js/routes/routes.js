import productRoute from './productRoute';
import customerRoute from './customerRoute';
import salaryRoute from './salaryRoute';
import orderRoute from './orderRoute';
import posRoute from './posRoute';
import categoryRoute from './categoryRoute';
import stockRoute from './stockRoute';
import supplierRoute from './supplierRoute';
import expenseRoute from './expenseRoute';
import authRoute from './authRoute';
import employeeRoute from './empoyeeRoute';
import userRoute from './userRoute';
import roleRoute from './roleRoute';
import permissionRoute from './permissionRoute';

export default [
  ...authRoute,
  ...customerRoute,
  ...salaryRoute,
  ...productRoute,
  ...orderRoute,
  ...posRoute,
  ...categoryRoute,
  ...stockRoute,
  ...supplierRoute,
  ...employeeRoute,
  ...expenseRoute,
  ...userRoute,
  ...roleRoute,
  ...permissionRoute,
]