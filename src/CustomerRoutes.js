import CustomerHome from "./pages/landing/CustomerHome";
import ChangePassword from "./pages/user/ChangePassword";

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
    }
]