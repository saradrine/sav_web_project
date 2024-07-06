import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {
    AppointmentHeadCells,
    headersCSV
} from "../../components/admin/dashboardTable/headCells/appointmentHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
const appointmentsData = [
    {
        id: 1,
        client: {
            id: 1,
            email: 'user1@example.com',
            nom: 'Jean Dupont',
            telephone: '123-456-7890',
            emploi: 'Software Engineer',
            adresse: '123 Main St, City, Country',
            dateDeNaissance: '1990-01-01'
        },
        date: '2024-07-04',
        heure: '10:00',
        vehicule: {
            id: 1,
            type: 'Car',
            marque: 'Toyota',
            modele: 'Corolla',
            annee: 2018,
            numChassis: 'JTDKBRFU1J3076816',
            couleur: 'Red',
            immatriculation: 'AB-123-CD'
        },
        service: 'Entretien général',
        etat: 'Accepté'
    },
    {
        id: 2,
        client: {
            id: 2,
            email: 'user2@example.com',
            nom: 'Marie Curie',
            telephone: '098-765-4321',
            emploi: 'Product Manager',
            adresse: '456 Oak St, City, Country',
            dateDeNaissance: '1985-05-15'
        },
        date: '2024-07-05',
        heure: '14:30',
        vehicule: {
            id: 3,
            type: 'Car',
            marque: 'Honda',
            modele: 'Civic',
            annee: 2019,
            numChassis: '2HGFC2F59KH556456',
            couleur: 'Black',
            immatriculation: 'IJ-789-KL'
        },
        service: 'Changement de pneus',
        etat: 'En attente'
    },
    {
        id: 3,
        client: {
            id: 2,
            email: 'user2@example.com',
            nom: 'Marie Curie',
            telephone: '098-765-4321',
            emploi: 'Product Manager',
            adresse: '456 Oak St, City, Country',
            dateDeNaissance: '1985-05-15'
        },
        date: '2024-07-06',
        heure: '09:00',
        vehicule: {
            id: 3,
            type: 'Car',
            marque: 'Honda',
            modele: 'Civic',
            annee: 2019,
            numChassis: '2HGFC2F59KH556456',
            couleur: 'Black',
            immatriculation: 'IJ-789-KL'
        },
        service: 'Révision annuelle',
        etat: 'Annulé'
    },
    {
        id: 4,
        client: {
            id: 4,
            email: 'user4@example.com',
            nom: 'Sophie Leroy',
            telephone: '333-444-5555',
            emploi: 'Data Scientist',
            adresse: '321 Elm St, City, Country',
            dateDeNaissance: '1988-12-22'
        },
        date: '2024-07-07',
        heure: '11:00',
        vehicule: {
            id: 4,
            type: 'Car',
            marque: 'Ford',
            modele: 'Fusion',
            annee: 2016,
            numChassis: '3FA6P0H72GR123456',
            couleur: 'White',
            immatriculation: 'MN-012-OP'
        },
        service: 'Changement d’huile',
        etat: 'Refusé'
    },
    {
        id: 5,
        client: {
            id: 5,
            email: 'user5@example.com',
            nom: 'Lucie Bernard',
            telephone: '777-888-9999',
            emploi: 'DevOps Engineer',
            adresse: '654 Willow St, City, Country',
            dateDeNaissance: '1995-03-10'
        },
        date: '2024-07-08',
        heure: '13:00',
        vehicule: {
            id: 12,
            type: 'Car',
            marque: 'Volkswagen',
            modele: 'Passat',
            annee: 2016,
            numChassis: '1VWAT7A32GC123456',
            couleur: 'White',
            immatriculation: 'ST-456-UV'
        },
        service: 'Réparation de freins',
        etat: 'Terminé'
    }
];

const Appointments = () => {
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} tableType={TableType.APPOINTMENTS} headCells={AppointmentHeadCells} rows={appointmentsData} />
        </div>
    );
};

export default Appointments;