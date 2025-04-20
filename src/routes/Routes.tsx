import Home from "../pages/Home";
import AdminLogin from "../pages/admin/Login";
import MitraLogin from "../pages/mitra/Login";
// import UserLogin from "../pages/users/Login";
// import DetailKost from "../pages/DetailKost";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/mitra", element: <MitraLogin /> },
            { path: "/admin", element: <AdminLogin /> },
            // { path: "/user", element: <UserLogin /> },
            // { path: "/details", element: <DetailKost /> },
        ],
    },
]);