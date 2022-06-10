import AccessoryHomeEmployee from "./pages/accessory/AccessoryHomeEmployee";
import DealerHome from "./pages/landing/DealerHome";

export const routes = [
    {
        title: 'Home',
        path: '/',
        key: 'dealer-home',
        component: DealerHome
    },
    {
        title: 'Accessories Management',
        path: '/manage/accessories',
        key: 'accessories-management',
        component: AccessoryHomeEmployee
    }
]