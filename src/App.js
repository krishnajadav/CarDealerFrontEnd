import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from "./routes";
import LayoutDealer from "./components/LayoutDealer";

function App() {
  return(
      <Router>
        <LayoutDealer>
          <Routes>
            {routes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.component />}
                />
            ))}
          </Routes>
        </LayoutDealer>
      </Router>
  );
}

export default App;