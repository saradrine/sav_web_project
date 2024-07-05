import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {clientsHeadCells, headersCSV} from "../../components/admin/dashboardTable/headCells/clientsHeadCells.js";
import Header from "../../components/admin/header/header.jsx";

export const usersData = [
    {
        id: 1,
        email: 'user1@example.com',
        nom: 'John Doe',
        telephone: '123-456-7890',
        emploi: 'Software Engineer',
        adresse: '123 Main St, City, Country',
        dateDeNaissance: '1990-01-01',
        vehicles: [
            {
                id: 1,
                type: 'Car',
                marque: 'Toyota',
                modele: 'Corolla',
                annee: 2018,
                numChassis: 'JTDKBRFU1J3076816',
                couleur: 'Red',
                immatriculation: 'AB-123-CD',
            },
            {
                id: 2,
                type: 'Motorcycle',
                marque: 'Yamaha',
                modele: 'YZF-R3',
                annee: 2015,
                numChassis: 'JYARJ16E1HA001234',
                couleur: 'Blue',
                immatriculation: 'EF-456-GH',
            }
        ]
    },
    {
        id: 2,
        email: 'user2@example.com',
        nom: 'Jane Smith',
        telephone: '098-765-4321',
        emploi: 'Product Manager',
        adresse: '456 Oak St, City, Country',
        dateDeNaissance: '1985-05-15',
        vehicles: [
            {
                id: 3,
                type: 'Car',
                marque: 'Honda',
                modele: 'Civic',
                annee: 2019,
                numChassis: '2HGFC2F59KH556456',
                couleur: 'Black',
                immatriculation: 'IJ-789-KL',
            }
        ]
    },
    {
        id: 3,
        email: 'user3@example.com',
        nom: 'Alice Johnson',
        telephone: '555-123-4567',
        emploi: 'UX Designer',
        adresse: '789 Pine St, City, Country',
        dateDeNaissance: '1992-07-30',
        vehicles: []
    },
    {
        id: 4,
        email: 'user4@example.com',
        nom: 'Bob Brown',
        telephone: '333-444-5555',
        emploi: 'Data Scientist',
        adresse: '321 Elm St, City, Country',
        dateDeNaissance: '1988-12-22',
        vehicles: [
            {
                id: 4,
                type: 'Car',
                marque: 'Ford',
                modele: 'Fusion',
                annee: 2016,
                numChassis: '3FA6P0H72GR123456',
                couleur: 'White',
                immatriculation: 'MN-012-OP',
            },
            {
                id: 5,
                type: 'Truck',
                marque: 'Chevrolet',
                modele: 'Silverado',
                annee: 2020,
                numChassis: '1GCUYDED7LZ123456',
                couleur: 'Silver',
                immatriculation: 'QR-345-ST',
            },
            {
                id: 6,
                type: 'SUV',
                marque: 'Jeep',
                modele: 'Cherokee',
                annee: 2017,
                numChassis: '1C4PJMCB7HW123456',
                couleur: 'Green',
                immatriculation: 'UV-678-WX',
            }
        ]
    },
    {
        id: 5,
        email: 'user5@example.com',
        nom: 'Charlie Green',
        telephone: '777-888-9999',
        emploi: 'DevOps Engineer',
        adresse: '654 Willow St, City, Country',
        dateDeNaissance: '1995-03-10',
        vehicles: []
    },
    {
        id: 6,
        email: 'user6@example.com',
        nom: 'David White',
        telephone: '222-333-4444',
        emploi: 'Marketing Specialist',
        adresse: '987 Birch St, City, Country',
        dateDeNaissance: '1982-08-25',
        vehicles: [
            {
                id: 7,
                type: 'Car',
                marque: 'Nissan',
                modele: 'Altima',
                annee: 2013,
                numChassis: '1N4AL3AP9DC123456',
                couleur: 'Blue',
                immatriculation: 'YZ-901-AB',
            }
        ]
    },
    {
        id: 7,
        email: 'user7@example.com',
        nom: 'Eve Black',
        telephone: '111-222-3333',
        emploi: 'HR Manager',
        adresse: '321 Cedar St, City, Country',
        dateDeNaissance: '1991-11-05',
        vehicles: [
            {
                id: 8,
                type: 'Motorcycle',
                marque: 'Suzuki',
                modele: 'GSX-R600',
                annee: 2021,
                numChassis: 'JS1GN7EA7M7101234',
                couleur: 'Yellow',
                immatriculation: 'CD-234-EF',
            },
            {
                id: 9,
                type: 'Car',
                marque: 'Kia',
                modele: 'Optima',
                annee: 2018,
                numChassis: '5XXGT4L36JG123456',
                couleur: 'Gray',
                immatriculation: 'GH-567-IJ',
            }
        ]
    },
    {
        id: 8,
        email: 'user8@example.com',
        nom: 'Frank Wilson',
        telephone: '444-555-6666',
        emploi: 'Sales Executive',
        adresse: '789 Maple St, City, Country',
        dateDeNaissance: '1986-04-18',
        vehicles: []
    },
    {
        id: 9,
        email: 'user9@example.com',
        nom: 'Grace Adams',
        telephone: '666-777-8888',
        emploi: 'Customer Support',
        adresse: '654 Spruce St, City, Country',
        dateDeNaissance: '1993-09-12',
        vehicles: [
            {
                id: 10,
                type: 'Car',
                marque: 'Mazda',
                modele: 'CX-5',
                annee: 2022,
                numChassis: 'JM3KFBDM4N0234567',
                couleur: 'Red',
                immatriculation: 'KL-890-MN',
            }
        ]
    },
    {
        id: 10,
        email: 'user10@example.com',
        nom: 'Hank Miller',
        telephone: '888-999-0000',
        emploi: 'Financial Analyst',
        adresse: '123 Willow St, City, Country',
        dateDeNaissance: '1980-06-30',
        vehicles: [
            {
                id: 11,
                type: 'SUV',
                marque: 'Hyundai',
                modele: 'Santa Fe',
                annee: 2019,
                numChassis: '5NMS33AD5KH012345',
                couleur: 'Black',
                immatriculation: 'OP-123-QR',
            },
            {
                id: 12,
                type: 'Car',
                marque: 'Volkswagen',
                modele: 'Passat',
                annee: 2016,
                numChassis: '1VWAT7A32GC123456',
                couleur: 'White',
                immatriculation: 'ST-456-UV',
            }
        ]
    },
    {
        id: 11,
        email: 'user3@example.com',
        nom: 'Alice Johnson',
        telephone: '555-123-4567',
        emploi: 'UX Designer',
        adresse: '789 Pine St, City, Country',
        dateDeNaissance: '1992-07-30',
        vehicles: []
    }
];



const Users = () => {
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} headCells={clientsHeadCells} tableType={TableType.CLIENTS} rows={usersData}/>
        </div>
    );
};

export default Users;