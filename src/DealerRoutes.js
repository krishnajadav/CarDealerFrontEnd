import AccessoryHomeEmployee from "./pages/accessory/AccessoryHomeEmployee";
import DealerHome from "./pages/landing/DealerHome";
import AddAccessory from "./pages/accessory/AddAccessory";
import EditAccessory from "./pages/accessory/EditAccessory";
import EmployeeRegistration from "./pages/user/EmployeeRegistration";
import EmployeeList from "./pages/user/EmployeeList";
import ChangePassword from "./pages/user/ChangePassword";
import VehicleInventory from "./pages/inventory/VehicleInventory";
import ServicesDealer from "./pages/services/dealer/ServicesDealer";

export const dealerRoutes = [
  {
    title: "Home",
    path: "/manage/home",
    key: "dealer-home",
    component: DealerHome,
  },
  {
    title: "Accessories Management",
    path: "/manage/accessories",
    key: "accessories-management",
    component: AccessoryHomeEmployee,
  },
  {
    title: "Accessory Creation",
    path: "/manage/accessories/add",
    key: "accessories-add",
    component: AddAccessory,
  },
  {
    title: "Edit Accessory",
    path: "/manage/accessories/edit",
    key: "accessories-edit",
    component: EditAccessory,
  },
  {
    title: "Manage Employee",
    path: "/manage/employee",
    key: "employee",
    component: EmployeeList,
  },
  {
    title: "Signup Employee",
    path: "/manage/employee/add",
    key: "employee-add",
    component: EmployeeRegistration,
  },
  {
    title: "Change Password",
    path: "/manage/employee/change-password",
    key: "employee-change-password",
    component: ChangePassword,
  },
  {
    title: "Inventory Management",
    path: "/manage/inventory",
    key: "inventory-management",
    component: VehicleInventory,
  },
  {
    title: "Services",
    path: "/manage/services",
    key: "dealer-service",
    component: ServicesDealer,
  },
];
