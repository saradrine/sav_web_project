import {Grid} from "@mui/material";
import Card from './card';
import group from '../../../assets/icons/customers.png';
import newClients from '../../../assets/icons/new-account.png';
import calendarNavOulined from '../../../assets/icons/calendarNavOulined.png';
import carOutlined from '../../../assets/icons/carM.png';
import {useQuery} from "@apollo/client";
import {GET_STATISTICS} from "../../../queries/users-queries.js";

const Header = () => {
    const { loading, error, data } = useQuery(GET_STATISTICS,{
        pollInterval: 500,
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Grid mb={4} container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={group} title={'Total Clients'} statistic={data?.numberOfClients} color={'bg-custom-green'}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={newClients} title={'Nouveaux Clients'} statistic={data?.numberOfNewClients} color={'bg-custom-yellow'}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={calendarNavOulined} title={'Total Rendez-vous'} statistic={data?.numberOfAppointments} padding={true} color={'bg-custom-red'}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card icon={carOutlined} title={'Total Véhicules'} statistic={data?.numberOfVehicules} color={'bg-custom-blue'}/>
            </Grid>
        </Grid>
    );
};
export default Header;
