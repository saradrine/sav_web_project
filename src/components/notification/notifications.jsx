import { differenceInHours } from "date-fns";
import NotificationCard from "./notifCard";
import "./notifications.css";
import Scrollbar from "../scrollbar/scrollbar";
import {useNotification} from "../../context/notificationContext.jsx";

function Notifications() {
  const { notifications, loading, error } = useNotification();

  //   const differenceInHours = (now, date) => {
  //     return Math.abs(Math.floor((now - date) / 60000) / 60);
  //   };

  const now = new Date();

  const getNouveauNotifications = () => {
    return notifications
      .filter((notif) => {
        const diffHours = differenceInHours(now, notif.createdAt);
        return diffHours < 24;
      }).sort((a, b) =>  new Date(b.createdAt) - new Date(a.createdAt));
  };

  const nouveauNotifications = getNouveauNotifications();

  const getDerniers7JoursNotifications = () => {
    return notifications
      .filter((notif) => {
        const diffHours = differenceInHours(now, notif.createdAt);
        return diffHours < 24 * 7 && diffHours > 24;
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const getAnciensNotifications = () => {
    return notifications
      .filter((notif) => {
        const diffHours = differenceInHours(now, notif.createdAt);
        return diffHours > 24 * 7;
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  return (
    <div
      className="notifications absolute top-full mt-7 right-0 bg-white px-3 pb-2 pt-3"
      style={{ width: "330px", height: "485px", zIndex: 2 }}
    >
      <h1 className="text-lg ml-2 font-bold">Notifications</h1>

      <Scrollbar
        thumbColor={"#DBDFE6"}
        trackColor={"#F0F2F5"}
        maxHeight={"410px"}
      >
        <div>
          {nouveauNotifications.length > 0 && (
            <div className="card mb-5 mt-1 mr-4 ml-2 py-3 px-3">
              <div className="text-custom-lg font-bold px-1.5">Nouveau</div>
              {nouveauNotifications.map((notification, index) => (
                <div key={index}>
                  {index !== 0 && <hr className="mt-1 mb-1" />}
                  <NotificationCard notif={notification} />
                </div>
              ))}
            </div>
          )}
          {getDerniers7JoursNotifications().length > 0 && (
            <div className="card my-4 mr-4 ml-2 py-3 px-3">
              <div className="text-lg font-bold px-1.5">Derniers 7 jours</div>
              {getDerniers7JoursNotifications().map((notification, index) => (
                <div key={index}>
                  {index !== 0 && <hr className="mt-1 mb-1" />}
                  <NotificationCard notif={notification} />
                </div>
              ))}
            </div>
          )}
          {getAnciensNotifications().length > 0 && (
            <div className="card shadow-custom-sm mt-5 mb-1 mr-4 ml-2 py-3 px-3">
              <div className="text-lg font-bold px-1.5">Anciens</div>
              {getAnciensNotifications().map((notification, index) => (
                <div key={index}>
                  {index !== 0 && <hr className="mt-1 mb-1" />}
                  <NotificationCard notif={notification} />
                </div>
              ))}
            </div>
          )}
          {notifications.length === 0 && (
            <div className="text-lg font-bold">Aucune notification</div>
          )}
        </div>
        {/* <div>
          {notifications?.map((notification, index) => (
            <div className="py-5" key={index}>
              <NotificationCard notif={notification} />
              {index !== 0 && <hr className="mt-1 mb-1" />}
            </div>
          ))}
        </div> */}
      </Scrollbar>
    </div>
  );
}

export default Notifications;
