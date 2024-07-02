import home from "../../assets/icons/home.png"
import car from "../../assets/icons/car.png"
import add from "../../assets/icons/addFull.png"
import calendar from "../../assets/icons/calendar.png"
import user from "../../assets/icons/user.png"

export const menus = [
    { name: "Acceuil", link: "/",width:27 , height:27, icon: home, role: 'user' },
    { name: "Mes véhicules", link: "/vehicles",width:27 , height:27, icon: car, role: 'user' },
    { name: "Nouveau véhicule", link: "/new",width:27 , height:27, icon: add, role: 'user' },
    { name: "Rendez-vous", link: "/appointment",width:27 , height:27, icon: calendar, role: 'user' },
    { name: "Mon profil", link: "/profile",width:27 , height:27, icon: user, role: 'user' },

    { name: "Clients", link: "/profile",width:27 , height:27, icon: user, role: 'user' },
];