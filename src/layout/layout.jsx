import Sidebar from "../components/sidebar/sidebar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <section className="flex">
            <Sidebar role={'admin'} />
            <div className="w-full p-8 ">
                <Outlet />
            </div>
        </section>
    );
};

export default Layout;