import {gql} from "@apollo/client";

export const APPOINTMENT_CREATED = gql`
    subscription AppointmentCreated($role: String!) {
        appointmentCreated(role: $role) {
            id
            createdAt
            type
            content
            isRead
            receiver {
                id
            }
        }
    }
`;
export const APPOINTMENT_UPDATED = gql`
    subscription AppointmentUpdated($role: String!, $id: ID) {
        appointmentUpdated(role: $role, id: $id) {
            id
            type
            createdAt
            content
            isRead
            receiver {
                id
            }
        }
    }
`;

export const GET_NOTIFICATIONS = gql`
    query GetNotifications {
        notifications {
            id
            createdAt
            type
            content
            isRead
            isSeen
            receiver {
                id
            }
        }
    }
`;
export const MARK_AS_READ = gql`
    mutation MarkAsRead($id: ID!) {
        markAsRead(id: $id) {
            id
        }
    }
`;

export const MARK_AS_SEEN = gql`
    mutation MarkAsSeen($id: ID!) {
        markAsSeen(id: $id) {
            id
        }
    }
`;
export const DELETE_NOTIFICATION = gql`
    mutation DeleteNotification($id: ID!) {
        removeNotification(id: $id) {
            id
        }
    }
`;
