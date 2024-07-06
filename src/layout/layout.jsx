import Sidebar from "../components/sidebar/sidebar.jsx";
import ComplexNavbar from "../components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="flex">
      <Sidebar role={"admin"} />
      <ComplexNavbar />
      <div className="w-full p-8" style={{ marginTop: "5.5rem" }}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
