import { HiMenuAlt3 } from "react-icons/hi";
import {NavLink} from "react-router-dom";
import { menus } from "./menus";
import {useEffect, useState} from "react";
import './sidebar.css'
const Sidebar = ({role}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [open, setOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
      <div
        className={`min-h-screen bg-white ${
          open ? "w-72 pe-5" : "w-20 pe-2"
        } duration-500  rounded-tr-lg rounded-br-lg shadow-custom-lg`}
      >
        <div className={`py-3 flex justify-end mt-5 ${open ? "" : "pe-6"}`}>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative sidebar-link">
          {menus
            ?.filter((menu) =>
              Array.isArray(menu.role)
                ? menu.role.includes(role.toLowerCase())
                : menu.role === role.toLowerCase()
            )
            .map((menu, i) => {
              return (
                <NavLink
                  to={menu?.link}
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex items-center text-custom-lg gap-3.5 font-medium p-2 ps-6 hover:bg-custom-green rounded-tr-full rounded-br-full`}
                >
                  <img
                    style={
                      hoveredIndex === i
                        ? { filter: "brightness(0) invert(1)" }
                        : {}
                    }
                    src={menu?.icon}
                    alt={menu?.name}
                    width={menu?.width}
                    height={menu?.height}
                  />
                  <h2
                    style={
                      hoveredIndex === i
                        ? {
                            filter: "brightness(0) invert(1)",
                            fontWeight: "bold",
                          }
                        : {}
                    }
                    className={`menu-name whitespace-pre overflow-hidden ${
                      hoveredIndex === i ? "" : "duration-500"
                    } ${!open && "opacity-0 translate-x-10 overflow-hidden"} `}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } z-50 absolute left-40 text-2xl text-custom-md whitespace-pre rounded-md bg-white drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:left-22 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </NavLink>
              );
            })}
        </div>
      </div>
    );
};

export default Sidebar;