import AccessoryHomeEmployee from "./pages/accessory/AccessoryHomeEmployee";
import DealerHome from "./pages/landing/DealerHome";
import AddAccessory from "./pages/accessory/AddAccessory";
import EditAccessory from "./pages/accessory/EditAccessory";
import EmployeeRegistration from "./pages/user/EmployeeRegistration";

export const dealerRoutes = [
    {
        title: 'Home',
        path: '/manage/home',
        key: 'dealer-home',
        component: DealerHome
    },
    {
        title: 'Accessories Management',
        path: '/manage/accessories',
        key: 'accessories-management',
        component: AccessoryHomeEmployee
    },
    {
        title: 'Accessory Creation',
        path: '/manage/accessories/add',
        key: 'accessories-add',
        component: AddAccessory
    },
    {
        title: 'Edit Accessory',
        path: '/manage/accessories/edit',
        key: 'accessories-edit',
        component: EditAccessory
    },
    {
        title: 'Signup Employee',
        path: '/manage/employee/add',
        key: 'employee-add',
        component: EmployeeRegistration
    }
]