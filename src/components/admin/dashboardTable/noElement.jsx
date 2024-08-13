import React from 'react';
import {TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {vehiclesHeadCells} from "./headCells/vehiclesHeadCells.js";
import PropTypes from "prop-types";
import DashboardTable from "./dashboardTable.jsx";

const NoElement = ({message}) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell
                    colSpan={vehiclesHeadCells.length}
                    align="center" style={{ border: 'none' }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        component="div"
                        marginTop={2}
                    >
                        {message}
                    </Typography>
                </TableCell>
            </TableRow>
        </TableBody>
    );
};

NoElement.propTypes = {
    message: PropTypes.string.isRequired,
};
export default NoElement;
