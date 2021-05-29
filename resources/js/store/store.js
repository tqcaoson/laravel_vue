import EmployeeStore from "./employeeStore";
import CategoryStore from "./categoryStore";
import CustomerStore from "./customerStore";
import ExpenseStore from "./expenseStore";
import ProductStore from "./productStore";
import SupplierStore from "./supplierStore";
import UserStore from "./userStore";
import RoleStore from "./roleStore";
import PermissionStore from "./permissionStore";
import Vuex from 'vuex';

const stores = new Vuex.Store({
    modules: {
        employee: EmployeeStore,
        category: CategoryStore,
        customer: CustomerStore,
        expense: ExpenseStore,
        product: ProductStore,
        supplier: SupplierStore,
        user: UserStore,
        role: RoleStore,
        permission: PermissionStore,
    }
});

export default stores;
