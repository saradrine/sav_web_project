import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import {Typography, MenuItem, Select, FormControl, InputLabel, Grid, useTheme} from '@mui/material';
import AppointmentStatus from "../../../utils/enum/appointmentStatus.enum.js";
import { CustomButton } from "../../common/CustomButton.jsx";
import calendar from "../../../assets/icons/calendarGray.png"
import car from "../../../assets/icons/carGray.png"
import customerSupport from "../../../assets/icons/customer-supportGray.png"
import user from "../../../assets/icons/user.png"
import clock from "../../../assets/icons/clockGray.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import {CustomGrid} from "../../common/someCustomMaterialComponents.jsx";
import CloseButton from "../../common/closeButton.jsx";
import * as React from "react";


const AppointmentDetails = ({ open, setOpen, appointment }) => {
    const [status, setStatus] = useState(appointment.etat || '');
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        if (appointment.etat) {
            setStatus(appointment.etat);
        }
    }, [appointment]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { borderRadius: '15px', padding: '16px', width: '100%', maxWidth: '30rem' } }}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            maxWidth="xs"
            fullWidth
            // fullScreen={fullScreen}
        >
            <DialogTitle fontWeight={"bold"} id="responsive-dialog-title">
                Détails du rendez-vous
                <CloseButton onClose={handleClose}/>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <CustomGrid>
                        <Typography fontSize={19} gutterBottom sx={{ display: 'flex', alignItems: 'start' }}>
                            <img src={user} alt={'user'} width={22}  className="me-3 mt-0.5" />
                            <strong>Client :</strong>&nbsp;
                        </Typography>
                        <Typography  gutterBottom sx={{marginLeft: {xs: 4, sm: 0}}}>
                            <Typography fontSize={19} gutterBottom sx={{padding:0, margin:0}}>
                                {appointment?.client?.nom}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {appointment?.client?.email}
                            </Typography>
                        </Typography>
                    </CustomGrid>
                    <CustomGrid>
                        <Typography variant="body1" color="textSecondary" gutterBottom sx={{ display: 'flex', alignItems: 'start' }}>
                            <img src={car} alt={'car'} width={22}  className="me-2 mt-0.5" />
                            <strong>Véhicule :</strong>&nbsp;
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom sx={{marginLeft: {xs: 4, sm: 0}}}>
                            <Typography variant="body1" color="textSecondary" gutterBottom sx={{padding:0, margin:0}}>
                                {appointment?.vehicule?.marque} {appointment?.vehicule?.modele}
                            </Typography>
                            <Typography fontSize={13} color="textSecondary">
                                {appointment?.vehicule?.numChassis}
                            </Typography>
                        </Typography>
                    </CustomGrid>
                    <CustomGrid>
                        <Typography variant="body1" color="textSecondary" gutterBottom sx={{ display: 'flex', alignItems: 'start' }}>
                            <img src={customerSupport} alt={'customerSupport'} width={18} className="me-3 mt-0.5"/>
                            <strong>Service :</strong>&nbsp;
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom sx={{marginLeft: {xs: 4, sm: 0}}} >
                            {appointment.service}
                        </Typography>
                    </CustomGrid>
                    <CustomGrid>
                        <Grid item  xs={12} sm={6} >
                            <Typography variant="body1" color="textSecondary" gutterBottom sx={{ display: 'flex', alignItems: 'start' }}>
                                <img src={calendar} alt={'calendar'} width={17} className="me-3 mt-0.5"/>
                                <strong>Date :</strong> {appointment.date}
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <Typography variant="body1" color="textSecondary" gutterBottom sx={{ display: 'flex', alignItems: 'start' }}>
                                <img src={clock} alt={'clock'} width={17} className="me-3 mt-0.5"/>
                                <strong>Heure :</strong> {appointment.heure}
                            </Typography>
                        </Grid>
                    </CustomGrid>
                    <Grid mt={2} pl={2} spacing={2} container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm={8} >
                            <FormControl fullWidth margin={"dense"} variant="outlined" sx={{
                                '& .MuiInputLabel-root': {
                                    color: '#333',
                                    fontSize: '1.1rem',
                                    '&.Mui-focused': {
                                        color: '#333',
                                    },
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderRadius: '15px',
                                        borderColor: '#dedede',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#ECECEC',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#333',
                                    },
                                },
                            }}>
                                <InputLabel id="status-label">Etat</InputLabel>
                                <Select
                                    labelId="status-label"
                                    value={status}
                                    onChange={handleStatusChange}
                                    label="Etat"
                                    sx={{
                                        height: 45,
                                        borderRadius: '10px',
                                    }}
                                >
                                    {Object.keys(AppointmentStatus).map((key) => (
                                        <MenuItem key={key} value={AppointmentStatus[key]} sx={{ fontSize: '0.9rem' }}>
                                            {AppointmentStatus[key]}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid className="flex justify-end" item xs={12} sm={4}>
                            <CustomButton  backgroundcolor="#039388" borderradius="15px" onClick={handleClose} variant="contained" disableRipple>
                                Sauvegarder
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

AppointmentDetails.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    appointment: PropTypes.object.isRequired
};

export default AppointmentDetails;
