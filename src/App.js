import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { dealerRoutes } from "./DealerRoutes";
import { customerRoutes } from "./CustomerRoutes";
import LayoutDealer from "./components/LayoutDealer";
import Login from "./pages/user/Login";
import LayoutCustomer from "./components/LayoutCustomer";
import CustomerRegistration from "./pages/user/CustomerRegistration";
import ForgotPassword from "./pages/user/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/services" />} >
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<CustomerRegistration />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/manage" element={<LayoutDealer />}>
          {dealerRoutes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Route>
        <Route path="/" element={<LayoutCustomer />}>
          {customerRoutes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
