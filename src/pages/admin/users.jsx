import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {clientsHeadCells, headersCSV} from "../../components/admin/dashboardTable/headCells/clientsHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
import {useQuery} from "@apollo/client";
import {GET_CLIENTS} from "../../queries/users-queries.js";
import {format} from "date-fns";

const Users = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS,{
        pollInterval: 500,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const processedClients = data.clients.map(client => ({
        ...client,
        nomPrenom: `${client.nom} ${client.prenom}`,
        dateNaissance: format(new Date(client.dateNaissance), 'dd-MM-yyyy'),
    }));
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} headCells={clientsHeadCells} tableType={TableType.CLIENTS} rows={processedClients}/>
        </div>
    );
};

export default Users;
