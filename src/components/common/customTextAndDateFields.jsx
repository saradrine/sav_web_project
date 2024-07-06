import {Grid, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

 const style= {
    '& .MuiInputBase-root': {
        borderRadius: '15px',
        height: '50px',
    },
    '& label.Mui-focused': {
        color: '#333',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#dedede',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#333',
        },
    },
}
export const CustomTextField = styled(TextField)(({ theme }) => (style));
export const CustomDatePicker = styled(DatePicker)(({ theme }) => ({...style, marginTop:'9px'}));