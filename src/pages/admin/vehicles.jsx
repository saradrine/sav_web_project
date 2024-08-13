import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {vehiclesHeadCells, headersCSV} from "../../components/admin/dashboardTable/headCells/vehiclesHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
import {useQuery} from "@apollo/client";
import {GET_VEHICLES} from "../../queries/vehicles-queries.js";

const Vehicles = () => {
    const { loading, error, data } = useQuery(GET_VEHICLES,{
        pollInterval: 500,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const processedVehicules = data?.vehicules.map(vehicule => ({
        ...vehicule,
        proprietaire: `${vehicule.client.nom} ${vehicule.client.prenom}`,
    }));
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} headCells={vehiclesHeadCells} tableType={TableType.VEHICLES} rows={processedVehicules}/>
        </div>
    );
};

export default Vehicles;
