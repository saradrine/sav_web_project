import DashboardTable from "../../components/admin/dashboardTable/dashboardTable.jsx";
import TableType from "../../utils/enum/tableType.enum.js";
import {
    AppointmentHeadCells,
    headersCSV
} from "../../components/admin/dashboardTable/headCells/appointmentHeadCells.js";
import Header from "../../components/admin/header/header.jsx";
import {useQuery} from "@apollo/client";
import {GET_APPOINTMENTS} from "../../queries/appointments-queries.js";
import {format} from "date-fns";


const Appointments = () => {
    const { loading, error, data } = useQuery(GET_APPOINTMENTS,{
        pollInterval: 500,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const processeAppointments = data.appointments.map(appointment => ({
        ...appointment,
        service: appointment?.service?.name,
        date: format(new Date(appointment.date), 'dd-MM-yyyy'),
    }));
    return (
        <div>
            <Header />
            <DashboardTable headers={headersCSV} tableType={TableType.APPOINTMENTS} headCells={AppointmentHeadCells} rows={processeAppointments} />
        </div>
    );
};

export default Appointments;
