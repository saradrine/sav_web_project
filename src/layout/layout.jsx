import Sidebar from "../components/sidebar/sidebar.jsx";
import ComplexNavbar from "../components/navbar/navbar.jsx";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

const Layout = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <section className="flex">
      <Sidebar role={currentUser?.role} />
      <ComplexNavbar />
      <div className="w-full p-8" style={{ marginTop: "5.5rem" }}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
