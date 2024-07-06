import {Grid} from "@mui/material";
import Card from './card';
import group from '../../../assets/icons/customers.png';
import newClients from '../../../assets/icons/new-account.png';
import calendarNavOulined from '../../../assets/icons/calendarNavOulined.png';
import carOutlined from '../../../assets/icons/carM.png';

const stats = {
    totalAppointments: 120,
    confirmedAppointments: 80,
    pendingAppointments: 20,
    cancelledAppointments: 10,
    refusedAppointments: 5,
    doneAppointments: 5,
    totalClients: 200,
    newClients: 50,
    totalVehicles: 150,
    newVehicles: 30,
};
const Header = () => {
    return (
        <Grid mb={4} container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={group} title={'Total Clients'} statistic={stats.totalClients}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={newClients} title={'Nouveaux Clients'} statistic={stats.newClients}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={calendarNavOulined} title={'Total Rendez-vous'} statistic={stats.totalAppointments} padding={true}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={carOutlined} title={'Total Véhicules'} statistic={stats.totalVehicles}/>
            </Grid>
        </Grid>
    );
};
export default Header;