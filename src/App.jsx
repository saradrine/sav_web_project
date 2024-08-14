import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Layout from "./layout/layout.jsx";
import NewVehicule from "./pages/newVehicule.jsx";
import Appointment from "./pages/appointment.jsx";
import Users from "./pages/admin/users.jsx";
import Vehicles from "./pages/admin/vehicles.jsx";
import Dashboard from "./pages/admin/dashboard.jsx";
import Appointments from "./pages/admin/appointments.jsx";
import Employees from "./pages/admin/employees.jsx";
import Page404 from "./pages/page404.jsx";
import ProfilAdmin from "./pages/admin/profile.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import ForgotPassword from "./pages/forgotPassword.jsx";
import PublicRoute from "./context/publicRoute.jsx";
import PrivateRoute from "./context/privateRoutes.jsx";
import ResetPassword from "./pages/resetPassword.jsx";

function App() {
  return (
    <Routes>
      <Route
        path={"/login"}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path={"/signup"}
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path={"/forgot-password"}
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path={"/reset-password"}
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />

      <Route
        element={
          <PrivateRoute roles={["Client", "Admin", "SuperAdmin"]}>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route
          path={"/"}
          element={
            <PrivateRoute roles={["Client"]}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={"/my-vehicles"}
          element={
            <PrivateRoute roles={["Client"]}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={"/new"}
          element={
            <PrivateRoute roles={["Client"]}>
              <NewVehicule />
            </PrivateRoute>
          }
        />
        <Route
          path={"/appointment"}
          element={
            <PrivateRoute roles={["Client"]}>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route
          path={"/profile"}
          element={
            <PrivateRoute roles={["Client"]}>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path={"/dashboard"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path={"/clients"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path={"/vehicles"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <Vehicles />
            </PrivateRoute>
          }
        />
        <Route
          path={"/appointments"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <Appointments />
            </PrivateRoute>
          }
        />
        <Route
          path={"/employees"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <Employees />
            </PrivateRoute>
          }
        />
        <Route
          path={"/profil"}
          element={
            <PrivateRoute roles={["Admin", "SuperAdmin"]}>
              <ProfilAdmin />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <PublicRoute>
            <Page404 />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
