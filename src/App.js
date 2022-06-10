import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {dealerRoutes} from "./DealerRoutes";
import {customerRoutes} from "./CustomerRoutes";
import LayoutDealer from "./components/LayoutDealer";
import Login from "./pages/user/Login";
import LayoutCustomer from "./components/LayoutCustomer";

function App() {
  return(
      <Router>
          <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route path="/manage" element={<LayoutDealer />} >
                  {dealerRoutes.map((route) => (
                      <Route
                          path={route.path}
                          element={<route.component />}
                      />
                  ))}
              </Route>
              <Route path="/" element={<LayoutCustomer />} >
                  {customerRoutes.map((route) => (
                      <Route
                          path={route.path}
                          element={<route.component />}
                      />
                  ))}
              </Route>
          </Routes>
      </Router>

  );
}

export default App;