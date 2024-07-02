import { HiMenuAlt3 } from "react-icons/hi";
import {NavLink} from "react-router-dom";
import { menus } from "./menus";
import {useState} from "react";
import './sidebar.css'
const Sidebar = ({role}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [open, setOpen] = useState(true);
    return (
            <div
                className={`min-h-screen bg-white ${
                    open ? "w-72 " : "w-20"
                } duration-500 pe-5 rounded-tr-lg rounded-br-lg shadow-custom-lg`}
            >
                <div className={`py-3 flex justify-end mt-5 ${open ? '':'pe-3'}`}>
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative sidebar-link">
                    {menus?.filter(menu => menu.role.includes(role?.toLowerCase())).map((menu, i) => {
                        return (
                            <NavLink
                                to={menu?.link}
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group flex items-center text-custom-lg gap-3.5 font-medium p-2 ps-6 hover:bg-[#039388] rounded-tr-full rounded-br-full`}
                            >
                                {/*<div>{React.createElement(menu?.icon, { size: "20" })}</div>*/}
                                <img style={hoveredIndex === i ? { filter: "brightness(0) invert(1)" }: {}}
                                     src={menu?.icon} alt={menu?.name}  width={menu?.width} height={menu?.height} />
                                <h2 style={
                                    hoveredIndex === i
                                        ? { filter: "brightness(0) invert(1)", fontWeight: "bold"}
                                        : {}
                                }
                                    className={`menu-name whitespace-pre overflow-hidden ${ hoveredIndex === i ? '':'duration-500'} ${
                                        !open && "opacity-0 translate-x-10 overflow-hidden"
                                    } `}
                                >
                                    {menu?.name}
                                </h2>
                                <h2
                                    className={`${
                                        open && "hidden"
                                    } absolute left-48 text-2xl text-custom-md whitespace-pre rounded-md bg-white drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:left-22 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </NavLink>
                        );
                    }
                    )}
                </div>
            </div>
    );
};

export default Sidebar;