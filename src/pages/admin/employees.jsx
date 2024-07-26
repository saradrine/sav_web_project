import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {employeesHeadCells} from "../../components/admin/dashboardTable/headCells/employeesHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
import {useQuery} from "@apollo/client";
import {format} from "date-fns";
import {GET_ADMINS} from "../../queries/users-queries.js";
const Employees = () => {
    const { loading, error, data } = useQuery(GET_ADMINS,{
        pollInterval: 500,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const processAdmins = data.admins?.map(admin => ({
        ...admin,
        nomPrenom: `${admin.nom} ${admin.prenom}`,
        dateDeNaissance: format(new Date(admin.dateNaissance), 'dd-MM-yyyy'),
    }));
    return (
        <div>
            <Header />
            <div className="mb-3"/>
            <DashboardTable headCells={employeesHeadCells} tableType={TableType.ADMINS} rows={processAdmins}/>
        </div>
    );
};

export default Employees;
