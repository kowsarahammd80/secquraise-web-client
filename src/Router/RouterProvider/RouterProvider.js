import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Main from "../../layout/Main/Main";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
]);

export default routers;