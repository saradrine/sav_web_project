import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {vehiclesHeadCells, headersCSV} from "../../components/admin/dashboardTable/headCells/vehiclesHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
const vehiclesData = [
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
    },
    {
        id: 3,
        type: 'Car',
        marque: 'Honda',
        modele: 'Civic',
        annee: 2019,
        numChassis: '2HGFC2F59KH556456',
        couleur: 'Black',
        immatriculation: 'IJ-789-KL',
    },
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
    },
    {
        id: 7,
        type: 'Car',
        marque: 'Nissan',
        modele: 'Altima',
        annee: 2013,
        numChassis: '1N4AL3AP9DC123456',
        couleur: 'Blue',
        immatriculation: 'YZ-901-AB',
    },
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
    },
    {
        id: 10,
        type: 'Car',
        marque: 'Mazda',
        modele: 'CX-5',
        annee: 2022,
        numChassis: 'JM3KFBDM4N0234567',
        couleur: 'Red',
        immatriculation: 'KL-890-MN',
    },
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
];



const Vehicles = () => {
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} headCells={vehiclesHeadCells} tableType={TableType.VEHICLES} rows={vehiclesData}/>
        </div>
    );
};

export default Vehicles;