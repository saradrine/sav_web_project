import {gql} from "@apollo/client";

export const GET_APPOINTMENTS = gql`
    query appointments{
        appointments{
            id
            heure
            date
            kilometrage
            service {id name}
            vehicule{id marque modele numChassis}
            client{id nom prenom email}
            etat
        }
    }
`;

export const REMOVE_APPOINTMENT = gql`
    mutation RemoveAppointment($id: ID!) {
        removeAppointment(id: $id) {
            id
        }
    }
`;

export const UPDATE_APPOINTMENT = gql`
    mutation UpdateAppointment($id: ID!, $input: UpdateAppointmentInput!) {
        updateAppointment(id: $id, updateAppointmentInput: $input) {
            id
        }
    }
`;

