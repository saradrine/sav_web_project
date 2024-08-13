import {gql} from "@apollo/client";

export const GET_CLIENTS = gql`
    query GetClients {
        clients {
            id
            nom
            prenom
            email
            cin
            telephone
            adresse
            sexe
            dateNaissance
            emploi
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
            }
        }
    }
`;
export const GET_ADMINS = gql`
    query GetAdmins {
        admins {
            id
            email
            cin
            nom
            prenom
            telephone
            adresse
            dateNaissance
            emploi
        }
    }
`;
export const GET_STATISTICS = gql`
    query statistics {
        numberOfClients
        numberOfNewClients
        numberOfVehicules
        numberOfAppointments
    }
`;

export const ADD_ADMIN = gql`
    mutation RegisterAdmin($input: CreateUserInput!) {
      registerAdmin(userData: $input) {
        prenom
      }
    }
`;

export const REMOVE_USER = gql`
    mutation RemoveUser($id: ID!) {
  removeUser(id: $id) {
    id
  }
}
`;

export const RESTORE_USER = gql`
    mutation RestoreUser($id: ID!) {
  restoreUser(id: $id) {
    id
  }
}
`;
