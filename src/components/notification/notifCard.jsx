import { useState, useEffect, useRef } from "react";
import { format, differenceInMinutes, differenceInHours } from "date-fns";
import option from "../../assets/icons/option.png";
import Options from "./options";
import {useMutation} from "@apollo/client";
import {DELETE_NOTIFICATION, MARK_AS_SEEN} from "../../queries/notifications-queries.js";
import {useNotification} from "../../context/notificationContext.jsx";

const NotificationCard = ({ notif }) => {
  const optionRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showOptions, setShowOptions] = useState(false);
  useOutsideClick(optionRef, () => setShowOptions(false));
  const { setNotifications } = useNotification();
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const now = new Date();
  // const differenceInMinutes = (now, date) => {
  //   return Math.abs(Math.floor((now - date) / 60000));
  // };
  // const differenceInHours = (now, date) => {
  //   return Math.abs(Math.floor((now - date) / 60000) / 60);
  // };

  const formatNotificationDate = (date) => {
    const diffMinutes = differenceInMinutes(now, date);
    const diffHours = differenceInHours(now, date);

    if (diffMinutes < 60) {
      return `il y a ${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `il y a ${Math.floor(diffHours)}h`;
    } else if (diffHours > 24 && diffHours < 168) {
      return `il y a ${Math.floor(diffHours / 24)} jour`;
    } else {
      date = format(date, "dd/MM/yyyy à hh:mm a");
      return `Le ${date}`;
    }
  };
  const [toggleSeen, { data: markAsSeenData, loading: markAsSeenLoading, error: markAsSeenError }] = useMutation(MARK_AS_SEEN);
  const toggleRead = () => {
    toggleSeen({ variables: { id: notif.id } })
        .then((res) => {
            console.log(res);
            setNotifications((prev) => prev.map((notification) => {
                if (notification.id === notif.id) {
                    return {...notification, isSeen: true};
                }
                return notification;
            }));
        })
        .catch((err) => {
            console.log(err);
        });
    setShowOptions(false);
  }
  const [deleteNotif, { data: deleteNotifData, loading: deleteNotifLoading, error: deleteNotifError }] = useMutation(DELETE_NOTIFICATION);
  const deleteNotification = () => {
    deleteNotif({ variables: { id: notif.id } })
        .then((res) => {
            console.log(res);
            setNotifications((prev) => prev.filter((notification) => notification.id !== notif.id));
        })
        .catch((err) => {
            console.log(err);
        });
    setShowOptions(false);
  }
  return (
    <div className="py-1">
      <div className="flex relative justify-between" ref={optionRef}>
        <div className="relative flex-grow text-wrap line-clamp-2 text-sm pr-5">
          {notif.content}
        </div>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex-shrink-0 absolute right-0 top-0.5 pt-1"
          // className=" pt-1"
        >
          <img src={option} alt="option" className="h-4 w-4" />
        </button>
        {showOptions && (
          <Options
            isSeen={notif.isSeen}
            toggleRead={toggleRead}
            deleteNotif={deleteNotification}
          />
        )}
      </div>
      <div className="flex justify-between items-center py-1">
        <div className="text-gray-500 text-xs">
          {formatNotificationDate(notif.createdAt)}
        </div>
        {!notif.isSeen  && (
          <span className="h-2 w-2 bg-custom-green rounded-full"></span>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
