import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AdminLogin from "../pages/admin/Login";
import MitraLogin from "../pages/mitra/Login";
import UserLogin from "../pages/users/Login";
import DetailKost from "../pages/DetailKost";
import FullListKost from "../pages/FullListKost";
import UserSignUp from "../pages/users/Signup.";
import PengajuanSewa from "../pages/PengajuanSewa";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "mitra", element: <MitraLogin /> },
      { path: "admin", element: <AdminLogin /> },
      { path: "user", element: <UserLogin />},
      { path: "register", element: <UserSignUp /> },
      { path: "listkost", element: <FullListKost />,},
      { path: "detailkost/:id", element: <DetailKost /> },
      { path: "sewa", element: <PengajuanSewa /> },
      { path: "*", element: <div>404 - Halaman Tidak Ditemukan</div> },
    ],
  },
]);
