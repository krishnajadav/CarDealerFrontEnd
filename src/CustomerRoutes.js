import CustomerHome from "./pages/landing/CustomerHome";
import ChangePassword from "./pages/user/ChangePassword";
import AccessoryHomeCustomer from "./pages/accessory/AccessoryHomeCustomer";

export const customerRoutes = [
    {
        title: 'Home',
        path: '/home',
        key: 'customer-home',
        component: CustomerHome
    },
    {
        title: 'Change Password',
        path: '/user/change-password',
        key: 'user-change-password',
        component: ChangePassword
    },
    {
        title: 'Accessory List',
        path: '/accessories',
        key: 'user-accessory-list',
        component: AccessoryHomeCustomer
    }
]