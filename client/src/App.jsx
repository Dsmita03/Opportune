import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes/Routes.jsx";
import { Toaster } from "react-hot-toast";

const App = () => (
  <Fragment>
    <RouterProvider router={router} />
    <Toaster />
  </Fragment>
);

export default App;
