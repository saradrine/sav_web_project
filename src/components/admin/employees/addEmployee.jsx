import addWhite from "../../../assets/icons/addWhite.png";
import {CustomButton} from "../../common/CustomButton.jsx";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Box, DialogActions} from "@mui/material";
import * as PropTypes from "prop-types";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from "react";
import {CustomDatePicker, CustomTextField} from "../../common/customTextAndDateFields.jsx";
import profession from "../../../assets/icons/profession.png";
import CloseButton from "../../common/closeButton.jsx";

const AddEmployee = () => {
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState({
        email: '',
        nom: '',
        prenom: '',
        telephone: '',
        adresse: '',
        dateDeNaissance: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };
    const handleDateChange = (date) => {
        setEmployee({ ...employee, ['dateDeNaissance']: date });
    };
    const onClose = () => {
        setOpen(false);
    }
    const cancel = () => {
        onClose();
        setEmployee(
            {
                email: '',
                nom: '',
                prenom: '',
                telephone: '',
                adresse: '',
                dateDeNaissance: null,
            }
        )
    }
    const handleAddAdmin = () => {
        console.log(employee)
    };

    const onOpen = () => {
        setOpen(true);
    }
    return (
        <div>
            <CustomButton width={'none'} height="40px" borderradius="30px" variant="contained" disableRipple onClick={onOpen}>
                <img src={addWhite} alt={'addWhite'} width={15} className="me-2"/>
                <span className="overflow-hidden overflow-ellipsis whitespace-nowrap">Ajouter un employé</span>
            </CustomButton>

            <Dialog sx={{ '& .MuiDialog-paper': { borderRadius: '15px', padding: '16px', maxWidth: '30rem' } }}
                    aria-labelledby="responsive-dialog-title"
                    maxWidth="xs"
                    fullWidth open={open} onClose={onClose}>
                <DialogTitle >
                    <Box className='flex items-center' gap={1}>
                        <img src={profession} alt={'profession'} width={30} />
                        Ajouter un nouvel employé
                    </Box>
                    <CloseButton onClose={onClose}/>
                </DialogTitle>
                <DialogContent>
                    <CustomTextField
                        autoFocus
                        margin="normal"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <CustomTextField
                        margin="dense"
                        name="nom"
                        label="Nom"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <CustomTextField
                        margin="dense"
                        name="prenom"
                        label="Prénom"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <CustomTextField
                        margin="dense"
                        name="telephone"
                        label="Téléphone"
                        type="tel"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <CustomTextField
                        margin="dense"
                        name="adresse"
                        label="Adresse"
                        type="text"
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CustomDatePicker
                            className="w-full"
                            label="Date de naissance"
                            onChange={handleDateChange}
                            name="dateDeNaissance"
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions sx={{paddingRight:3}}>
                    <CustomButton width={'none'} height="40px" borderradius="30px" variant="contained" disableRipple onClick={handleAddAdmin}>
                        Sauvegarder
                    </CustomButton>
                    <CustomButton backgroundcolor={"#F7F7F7"} textcolor={"#039388"} width={'none'} height="40px" borderradius="30px" variant="contained" disableRipple onClick={cancel}>
                        Annuler
                    </CustomButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddEmployee;