import CustomerHome from "./pages/landing/CustomerHome";
import ChangePassword from "./pages/user/ChangePassword";
import Carform from "./pages/user/Carform";
import CarResults from "./pages/user/CarResults";
import CarLoan from "./pages/user/CarLoan";
import Services from "./pages/user/Services";
import AccessoryHomeCustomer from "./pages/accessory/AccessoryHomeCustomer"

export const customerRoutes = [
  {
    title: "Home",
    path: "/home",
    key: "customer-home",
    component: CustomerHome,
  },
  {
    title: "Change Password",
    path: "/user/change-password",
    key: "user-change-password",
    component: ChangePassword,
  },
  {
    title: 'Accessory List',
    path: '/accessories',
    key: 'user-accessory-list',
    component: AccessoryHomeCustomer
  },
  {
    title: "Services",
    path: "services",
    key: "services",
    component: Services,
  },
];
