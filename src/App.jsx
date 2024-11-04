import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./app.scss";
import Profile from "./pages/profile/Profile";
import Seller from "./pages/seller/Seller";
import Setting from "./pages/setting/Setting";
import Billing from "./pages/billing/Billing";
import Help from "./pages/help/Help";
import Referral from "./pages/referral/Referral";
import Briefs from "./pages/briefs/Briefs";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/briefs",
          element: <Briefs />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/start_selling",
          element: <Seller/>,
        },
        {
          path: "/edit/account",
          element: <Setting />,
        },
        {
          path: "/billing",
          element: <Billing />,
        },
        {
          path: "/hc/en-us",
          element: <Help />,
        },
        {
          path: "/referral_program",
          element: <Referral />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
