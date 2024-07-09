import home from "../../assets/icons/home.png"
import car from "../../assets/icons/car.png"
import add from "../../assets/icons/addFull.png"
import calendar from "../../assets/icons/calendar.png"
import user from "../../assets/icons/user.png"
import group from "../../assets/icons/group.png"
import dashboard from "../../assets/icons/dashboard.png"
import teamwork from "../../assets/icons/teamwork.png"
export const menus = [
    { name: "Acceuil", link: "/",width:27 , height:27, icon: home, role: 'user' },
    { name: "Mes véhicules", link: "/my-vehicles",width:27 , height:27, icon: car, role: 'user' },
    { name: "Nouveau véhicule", link: "/new",width:27 , height:27, icon: add, role: 'user' },
    { name: "Rendez-vous", link: "/appointment",width:26 , height:26, icon: calendar, role: 'user' },
    { name: "Mon profil", link: "/profile",width:27 , height:27, icon: user, role: 'user' },

    { name: "Dashboard" ,link: "/dashboard",width:21 , height:21, icon: dashboard, role: 'admin' },
    { name: "Clients", link: "/clients",width:26 , height:26, icon: group, role: 'admin' },
    { name: "Véhicules" ,link: "/vehicles",width:27 , height:27, icon: car, role: 'admin' },
    { name: "Demandes" ,link: "/appointments",width:26 , height:26, icon: calendar, role: 'admin' },
    { name: "Employés", link: "/employees", width: 29, height: 29, icon: teamwork, role: 'admin' },
    { name: "Mon profil", link: "/profil",width:26 , height:26, icon: user, role: 'admin'}
];
