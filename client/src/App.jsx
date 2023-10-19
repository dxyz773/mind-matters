// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// COMPONENTS
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import OurMission from "./ui/OurMission";
import UserAccount from "./features/user/UserAccount";
import Signup from "./ui/Signup";
import Login from "./ui/Login";
import AfterAuth from "./features/user/AfterAuth";
import WellnessResourcePage from "./features/wellness-resources/WellnessResourcePage";
import WellnesssTopic from "./features/wellness-resources/WellnesssTopic";
import { loader as topicLoader } from "./features/wellness-resources/WellnesssTopic";
// import WellnesssTopic from "./features/wellness-resources/WellnesssTopic";

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
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/afterauth", element: <AfterAuth /> },
      {
        path: "/wellness-resources",
        element: <WellnessResourcePage />,
        errorElement: <Error />,
        children: [
          {
            path: "/wellness-resources/:topic",
            element: <WellnesssTopic />,
            loader: topicLoader,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
