import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {APPOINTMENT_CREATED, APPOINTMENT_UPDATED, GET_NOTIFICATIONS, MARK_AS_READ} from "../queries/notifications-queries.js";

const NotificationContext = createContext();
export const useNotification = () => {
    return useContext(NotificationContext);
}
export const NotificationProvider = ({children}) => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [unreadNotifications, setUnreadNotifications] = useState([]);
    const {
        data: createdData,
        loading: createdLoading,
        error: createdError,
    } = useSubscription(APPOINTMENT_CREATED, {
        variables: { role: 'admin' },
    });

    const {
        data: updatedData,
        loading: updatedLoading,
        error: updatedError,
    } = useSubscription(APPOINTMENT_UPDATED, {
        variables: { role: 'admin' },
    });

    const {
        data: allNotificationsData,
        loading: allNotificationsLoading,
        error: allNotificationsError,
    } = useQuery(GET_NOTIFICATIONS);

    useEffect(() => {
        if (allNotificationsData) {
            setNotifications(allNotificationsData.notifications);
            setUnreadNotifications(allNotificationsData.notifications.filter((notif) => !notif.isRead));
        }
    }, [allNotificationsData]);

    useEffect(() => {
        if (unreadNotifications.length > 0) {
            setUnreadCount(unreadNotifications.length);
        } else {
            setUnreadCount(0);
        }
    }, [unreadNotifications]);

    useEffect(() => {
        if (createdData) {
            setNotifications((prev) => [...prev, createdData.appointmentCreated]);
            setUnreadCount(prevCount => prevCount + 1);
            setUnreadNotifications((prev) => [...prev, createdData.appointmentCreated]);
        }
    }, [createdData]);

    useEffect(() => {
        if (updatedData) {
            setNotifications((prev) => [...prev, updatedData.appointmentUpdated]);
            setUnreadCount(prevCount => prevCount + 1);
            setUnreadNotifications((prev) => [...prev, updatedData.appointmentUpdated]);
        }
    }, [updatedData]);

    const loading = createdLoading || updatedLoading || allNotificationsLoading;
    const error = createdError || updatedError || allNotificationsError;

    if(error) console.error(error);

    const [markAsRead, {data: markAsReadData, loading: markAsReadLoading, error: markAsReadError}] = useMutation(MARK_AS_READ);
    const markNotificationsAsRead = () => {
        unreadNotifications.map((notif) => {
            markAsRead({variables: {id: notif.id}})
                .then(r => console.log(r))
                .catch(e => console.log(e))
        })
        setUnreadCount(0);
        setUnreadNotifications([]);
    };


    return (
        <NotificationContext.Provider value={{ notifications, loading, error, unreadCount, markNotificationsAsRead, setNotifications  }}>
            {children}
        </NotificationContext.Provider>
    );
}

NotificationProvider.propTypes = {
    children: PropTypes.node.isRequired
}
