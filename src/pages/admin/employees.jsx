import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {employeesHeadCells} from "../../components/admin/dashboardTable/headCells/employeesHeadCells.js";
import {CustomButton} from "../../components/common/CustomButton.jsx";
import addWhite from "../../assets/icons/addWhite.png";
import Header from "../../components/admin/header/header.jsx";
import AddEmployee from "../../components/admin/employees/addEmployee.jsx";
export const adminsData = [
    {
        id: 1,
        email: 'user1@example.com',
        nom: 'John Doe',
        telephone: '123-456-7890',
        adresse: '123 Main St, City, Country',
        dateDeNaissance: '1990-01-01',
    },
    {
        id: 2,
        email: 'user2@example.com',
        nom: 'Jane Smith',
        telephone: '098-765-4321',
        adresse: '456 Oak St, City, Country',
        dateDeNaissance: '1985-05-15',
    },
    {
        id: 3,
        email: 'user3@example.com',
        nom: 'Alice Johnson',
        telephone: '555-123-4567',
        adresse: '789 Pine St, City, Country',
        dateDeNaissance: '1992-07-30',
    },
    {
        id: 4,
        email: 'user4@example.com',
        nom: 'Bob Brown',
        telephone: '333-444-5555',
        adresse: '321 Elm St, City, Country',
        dateDeNaissance: '1988-12-22',
    },
    {
        id: 5,
        email: 'user5@example.com',
        nom: 'Charlie Green',
        telephone: '777-888-9999',
        adresse: '654 Willow St, City, Country',
        dateDeNaissance: '1995-03-10',
    },
    {
        id: 6,
        email: 'user6@example.com',
        nom: 'David White',
        telephone: '222-333-4444',
        adresse: '987 Birch St, City, Country',
        dateDeNaissance: '1982-08-25',
    },
    {
        id: 7,
        email: 'user7@example.com',
        nom: 'Eve Black',
        telephone: '111-222-3333',
        adresse: '321 Cedar St, City, Country',
        dateDeNaissance: '1991-11-05',
    },
    {
        id: 8,
        email: 'user8@example.com',
        nom: 'Frank Wilson',
        telephone: '444-555-6666',
        adresse: '789 Maple St, City, Country',
        dateDeNaissance: '1986-04-18',
    },
    {
        id: 9,
        email: 'user9@example.com',
        nom: 'Grace Adams',
        telephone: '666-777-8888',
        adresse: '654 Spruce St, City, Country',
        dateDeNaissance: '1993-09-12',
    },
    {
        id: 10,
        email: 'user10@example.com',
        nom: 'Hank Miller',
        telephone: '888-999-0000',
        adresse: '123 Willow St, City, Country',
        dateDeNaissance: '1980-06-30',
    },
    {
        id: 11,
        email: 'user3@example.com',
        nom: 'Alice Johnson',
        telephone: '555-123-4567',
        adresse: '789 Pine St, City, Country',
        dateDeNaissance: '1992-07-30',
    }
];
const Employees = () => {
    return (
        <div>
            <Header />
            <div className="mb-3"/>
            <DashboardTable headCells={employeesHeadCells} tableType={TableType.ADMINS} rows={adminsData}/>
        </div>
    );
};

export default Employees;