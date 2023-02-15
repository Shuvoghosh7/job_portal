import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import ApplyJob from "../Page/ApplyJob/ApplyJob";
import CreateJobs from "../Page/Dashboard/CreateJobs";
import BrowseAllJobs from "../Page/Main/BrowseAllJobs/BrowseAllJobs";
import Home from "../Page/Main/Home/Home";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      }, 
      {
        path: "applyjobs/:jobId",
        element: <ApplyJob/>,
      }, 
      {
        path: "browseAllJobs",
        element: <BrowseAllJobs/>,
      }, 
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <CreateJobs />,
      },
    
    ],
  },
  
]);

export default routes;
