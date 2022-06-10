import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from "./routes";
import LayoutDealer from "./components/LayoutDealer";
import Login from "./pages/user/Login";

function App() {
  return(
      <Router>
          <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route path="/" element={<LayoutDealer />} >
                  {routes.map((route) => (
                      <Route
                          path={route.path}
                          element={<route.component />}
                      />
                  ))}
              </Route>
          </Routes>
      </Router>

      // <Router>
      //   <LayoutDealer>
      //     <Routes>
      //       {routes.map((route) => (
      //           <Route
      //               path={route.path}
      //               element={<route.component />}
      //           />
      //       ))}
      //     </Routes>
      //   </LayoutDealer>
      // </Router>
  );
}

export default App;