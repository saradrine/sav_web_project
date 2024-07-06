import PropTypes from 'prop-types';
import {alpha} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../assets/css/materialUiCustomized.css';
import { CSVLink } from "react-csv";
import {Box} from "@mui/material";
import downloads from "../../../assets/icons/downloads.png";
import Button from "@mui/material/Button";
export default function EnhancedTableToolbar(props) {
    const { numSelected, tableType, data, headers } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    className="overflow-hidden overflow-ellipsis"
                >
                    {numSelected} {numSelected > 1 ? 'selectionnés' : 'selectionné'}
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%', paddingTop: '10px' }}
                    fontSize={30}
                    fontWeight={600}
                    id="tableTitle"
                    component="div"
                    className="overflow-hidden"
                >
                    {tableType}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Supprimer">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) :  (
                <Tooltip px={1} title="Exporter">
                    <Box component="span">
                        <CSVLink data={data} headers={headers} filename={tableType}>
                            <Box component="span" className="cursor-pointer" >
                                <img src={downloads} alt={'downloads'} width={22}/>
                            </Box>
                        </CSVLink>
                    </Box>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    tableType: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    headers: PropTypes.array,
};