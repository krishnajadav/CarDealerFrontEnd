import CustomerHome from "./pages/landing/CustomerHome";
import ChangePassword from "./pages/user/ChangePassword";
import Quotes from "./pages/quotes/Quotes";
import AccessoryHomeCustomer from "./pages/accessory/AccessoryHomeCustomer";
import ServicesCustomer from "./pages/services/Services";
import CustomerBookings from "./pages/services/bookings/customerBookings";
import TradeIn from "./pages/tradeIn/TradeIn";
import VehicleForm from "./pages/vehicles/Vehicle";
import Accessory from "./pages/accessory/Accessory";


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
    title: "Accessory List",
    path: "/accessories",
    key: "user-accessory-list",
    component: AccessoryHomeCustomer,
  },
  {
    title: "Quotes",
    path: "/quotes",
    key: "quotes",
    component: Quotes,
  },
  {
    title: "Services",
    path: "/services",
    key: "user-services-list",
    component: ServicesCustomer,
  },
  {
    title: "Customer Services",
    path: "/customer-bookings",
    key: "customer-bookings",
    component: CustomerBookings,
  },
  {
    title: "Trade-in",
    path: "/trade-in",
    key: "trade-in",
    component: TradeIn,
  },
  {
    title: "VehicleForm",
    path:"/vehicles",
    key: "vehicle-form",
    component: VehicleForm,
  },
  {
    title: "Accessory",
    path: "/accessories/:id",
    key: "accessory",
    component: Accessory
  }
];
