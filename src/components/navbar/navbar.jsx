import { useState, useEffect, useRef } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import logout from "../../assets/icons/logout.png";
import bell from "../../assets/icons/bell.png";
import Notifications from "../notification/notifications";
import "./navbar.css";

function ComplexNavbar() {
  const navbarRef = useRef(null);
  const notifRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState("auto");
  const [isNarrow, setIsNarrow] = useState(false);
  const [showTypography, setShowTypography] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  useOutsideClick(notifRef, () => setShowNotifications(false));

  useEffect(() => {
    const adjustNavbar = () => {
      if (navbarRef.current) {
        const navbarWidth = navbarRef.current.offsetWidth;
        setIsNarrow(navbarWidth <= 140);
        setShowTypography(navbarWidth > 140);
        setNavbarHeight(navbarWidth <= 140 ? "60px" : "auto");
      }
    };

    adjustNavbar();
    window.addEventListener("resize", adjustNavbar);
    return () => window.removeEventListener("resize", adjustNavbar);
  }, []);

  function useOutsideClick(ref, callback) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  }

  const navbarClassName = `fixed bg-white h-auto p-1.5 duration-500 rounded-tl-lg rounded-bl-lg top-8 right-0 ${
    isNarrow ? "navbar-vertical-center" : ""
  }`;

  const navbarStyle = {
    boxShadow:
      "0 -7px 15px -7px rgba(0, 0, 0, 0.2), 0 7px 15px -7px rgba(0, 0, 0, 0.2), -7px 0 15px -7px rgba(0, 0, 0, 0.1)",
    minWidth: "140px",
    width: "27%",
    height: navbarHeight,
  };

  return (
    <>
      <Navbar ref={navbarRef} className={navbarClassName} style={navbarStyle}>
        <div className="flex mx-auto pr-2 py-1 items-center justify-between text-blue-gray-900">
          {showTypography && (
            <div className="flex-1 min-w-0 ml-8">
              <Typography as="a" href="#" className="cursor-pointer">
                <div className="scrollText">
                  <span className="font-bold text-xl">Rym Drine</span>
                </div>
                <div className="scrollText">
                  <span className="font-light text-sm">
                    foulenbenfoulen@foulen.com
                  </span>
                </div>
              </Typography>
            </div>
          )}
          <div className="flex ml-3">
            <div className="relative flex items-center" ref={notifRef}>
              <div className="iconn flex-shrink-0 justify-center items-center mr-2">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="iconn"
                >
                  <img src={bell} alt="Notifications" className="h-8 w-8" />
                </button>
              </div>
              {showNotifications && <Notifications />}
            </div>
            <div className="iconn flex-shrink-0 justify-center items-center ml-2">
              <button onClick={() => {}}>
                <img
                  src={logout}
                  alt="Déconnexion"
                  className="h-9 w-10"
                  style={{ transform: "scaleX(-1)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default ComplexNavbar;
