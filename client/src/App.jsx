import { createBrowserRouter, RouterProvider } from "react-router-dom";
// COMPONENTS
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

import UserAccount from "./features/user/UserAccount";
import Signup from "./ui/Signup";
import Login from "./ui/Login";
import AfterAuth from "./features/user/AfterAuth";
import WellnessResourcePage from "./features/wellness-resources/WellnessResourcePage";
import WellnesssTopic from "./features/wellness-resources/WellnesssTopic";
import { loader as topicLoader } from "./features/wellness-resources/WellnesssTopic";
import { loader as mainLoader } from "./features/user/UserAccount";
import WaitingRoom from "./features/user/WaitingRoom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/pending",
        element: <WaitingRoom />,
        errorElement: <Error />,
      },
      {
        path: "/account/:userId",
        element: <UserAccount />,
        loader: mainLoader,
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
