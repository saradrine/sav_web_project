import './App.css'
import {Route, Routes} from "react-router-dom";
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
import ProfilAdmin from './pages/admin/profile.jsx';


function App() {

  return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/my-vehicles"} element={<Profile />} />
                <Route path={"/new"} element={<NewVehicule />} />
                <Route path={"/appointment"} element={<Appointment />} />
                <Route path={"/profile"} element={<Profile />} />

                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/clients"} element={<Users />} />
                <Route path={"/vehicles"} element={<Vehicles />} />
                <Route path={"/appointments"} element={<Appointments />} />
                <Route path={"/employees"} element={<Employees />} />
                <Route path={"/profil"} element={<ProfilAdmin />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>

  )
}

export default App
