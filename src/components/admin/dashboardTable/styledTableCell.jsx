import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';


export const StyledTableCell = styled(({ ...other }) => <TableCell {...other} />)(({ index }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#F0F2F5",
        borderRadius:  index === 0 ? '15px 0 0' : index === -1 ? '0 15px 0 0' : '',
        fontWeight: 'bold',
    },
}));