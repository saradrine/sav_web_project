import {Grid, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export const CustomGrid = ({ children, ...props }) => (
    <Grid
        className="overflow-hidden whitespace-nowrap"
        item
        xs={12}
        sx={{
            display: 'flex',
            alignItems: 'start',
            flexDirection: { xs: 'column', sm: 'row' },
            ...props.sx
        }}
        {...props}
    >
        {children}
    </Grid>
);
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
export const StyledStaticDatePicker = styled(DatePicker)(({ theme }) => ({...style, marginTop:'9px'}));