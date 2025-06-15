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
import DashboardMitra from "../pages/mitra/Dashboard";
import KelolaKosan from "../pages/mitra/KelolaKosan";
import CalonPenghuni from "../pages/mitra/CalonPenghuni";
import PenarikanSaldo from "../pages/mitra/PenarikanSaldo";
import Pengaturan from "../pages/mitra/Pengaturan";
import DashboardAdmin from "../pages/admin/Dashboard";
import KelolaMitra from "../pages/admin/KelolaMitra";
import UserProfile from "../pages/users/Profile";
import SettingProfile from "../pages/users/Setting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "mitra", element: <MitraLogin /> },
      { path: "admin", element: <AdminLogin /> },
      { path: "user", element: <UserLogin />},
      { path: "profile", element: <UserProfile /> },
      { path: "setting", element: <SettingProfile /> },
      { path: "register", element: <UserSignUp /> },
      { path: "listkost", element: <FullListKost />,},
      { path: "detailkost/:id", element: <DetailKost /> },
      { path: "sewa", element: <PengajuanSewa /> },
      { path: "dashboardmitra", element: <DashboardMitra /> },
      { path: "kelolakosan", element: <KelolaKosan /> },
      { path: "calonpenghuni", element: <CalonPenghuni /> },
      { path: "penarikansaldo", element: <PenarikanSaldo /> },
      { path: "pengaturan", element: <Pengaturan /> },
      { path: "dashboardadmin", element: <DashboardAdmin /> },
      { path: "kelolamitra", element: <KelolaMitra /> },
      { path: "*", element: <div>404 - Halaman Tidak Ditemukan</div> },
    ],
  },
]);
