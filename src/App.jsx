import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Layout from "./layout/layout.jsx";
import NewVehicule from "./pages/newVehicule.jsx";
import Appointment from "./pages/appointment.jsx";


function App() {

  return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/vehicles"} element={<Profile />} />
                <Route path={"/new"} element={<NewVehicule />} />
                <Route path={"/appointment"} element={<Appointment />} />
                <Route path={"/profile"} element={<Profile />} />
            </Route>
        </Routes>

  )
}

export default App
