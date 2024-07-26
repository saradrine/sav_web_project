import {gql} from "@apollo/client";

export const GET_VEHICLES = gql`
    query GetVehicule {
        vehicules {
            id
            marque
            modele
            type
            numChassis
            immatriculation
            annee
            couleur
            kilometrage
            client {
                email
                nom
                prenom
            }
        }
    }
`;

export const REMOVE_VEHICULE = gql`
    mutation RemoveVehicule($id: ID!) {
        removeVehicule(id: $id) {
            id
        }
    }
`;
