// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// COMPONENTS
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import OurMission from "./ui/OurMission";
import Auth from "./features/authentication/Auth";
import UserAccount from "./features/user/UserAccount";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mission", element: <OurMission /> },
      {
        path: "/account/:username",
        element: <UserAccount />,
        errorElement: <Error />,
      },
      { path: "/login", element: <Auth /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
