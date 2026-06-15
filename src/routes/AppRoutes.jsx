import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default AppRoutes;