import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../../../assets/css/materialUiCustomized.css';
import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp.js";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown.js";
import TableType from "../../../utils/enum/tableType.enum.js";
import {vehiclesHeadCells} from "./headCells/vehiclesHeadCells.js";
import FilterControls from "./filterControls.jsx";
import { getComparator, stableSort } from './utils.jsx';
import EnhancedTableHead from './enhancedTableHead.jsx';
import EnhancedTableToolbar from './enhancedTableToolbar.jsx';
import TableCells from './tableCells.jsx';
import {useLocation, useNavigate} from "react-router-dom";
import AppointmentDetails from "../appointments/appointmentDetails.jsx";
import AddEmployee from "../employees/addEmployee.jsx";


export default function DashboardTable({ headCells, tableType, rows, headers }) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const [openRowId, setOpenRowId] = useState(null);
    const [filteredRows, setFilteredRows] = useState(rows);
    const [filterCriteria, setFilterCriteria] = useState({});
    const [selectedColumn, setSelectedColumn] = useState('');

    const navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        let filteredData = rows;
        Object.keys(filterCriteria).forEach((column) => {
            filteredData = filteredData.filter((row) => {
                return row[column]?.toString().toLowerCase().includes(filterCriteria[column].toLowerCase());
            });
        });

        setFilteredRows(filteredData);
    }, [filterCriteria, rows]);

    useEffect(() => {
        let filteredData = rows;
        let numChassis = location.state?.numChassis;
        if(numChassis){
            filteredData = filteredData.filter((row) => {
                return row["numChassis"] === numChassis;
            });
            setSelectedColumn('numChassis')
            setFilterCriteria({numChassis});
        }

        setFilteredRows(filteredData);
    }, [location.state?.numChassis]);

    const resetFilters = () => {
        setFilterCriteria({});
        setSelectedColumn('');
        setFilteredRows(rows);
    };

    const visibleRows = useMemo(() => {
        return stableSort(filteredRows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
    }, [filteredRows, order, orderBy, page, rowsPerPage]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selected, id];
        } else if (selectedIndex === 0) {
            newSelected = selected.slice(1);
        } else if (selectedIndex === selected.length - 1) {
            newSelected = selected.slice(0, -1);
        } else if (selectedIndex > 0) {
            newSelected = [
                ...selected.slice(0, selectedIndex),
                ...selected.slice(selectedIndex + 1),
            ];
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const toggleRowDetails = (rowId) => {
        setOpenRowId(openRowId === rowId ? null : rowId);
    };


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const navigateToVehicle = (numChassis) => {
        navigate(`/vehicles`, { state: { numChassis } });
    }

    const [open, setOpen] = useState(false);
    const [appointment, setAppointment] = useState({});

    const appointmentDetails = (appointment) => {
        setOpen(true);
        setAppointment(appointment)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper  sx={{ width: '100%', mb: 2, borderRadius: '15px', padding: "15px", boxShadow:'1px 2px 5px rgba(0, 0, 0, 0.15)' }}>
                <EnhancedTableToolbar numSelected={selected.length} tableType={tableType} data={rows} headers={headers} />
                {tableType === TableType.ADMINS ?(<Box gap={1} sx={{
                    display: 'flex',
                    alignItems: {xs: 'start', sm: 'end'},
                    justifyContent: 'space-between',
                    flexDirection: {xs: 'column', sm: 'row'},
                }}>
                    <FilterControls
                        filterCriteria={filterCriteria}
                        setFilterCriteria={setFilterCriteria}
                        selectedColumn={selectedColumn}
                        setSelectedColumn={setSelectedColumn}
                        resetFilters={resetFilters}
                        columns={headCells}
                        tableType={tableType}
                    />
                    <AddEmployee/>
                </Box>):(
                    <FilterControls
                        filterCriteria={filterCriteria}
                        setFilterCriteria={setFilterCriteria}
                        selectedColumn={selectedColumn}
                        setSelectedColumn={setSelectedColumn}
                        resetFilters={resetFilters}
                        columns={headCells}
                    />
                )}
                <TableContainer style={{ marginTop: "15px" }} >
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            first={true}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                const isOpen = openRowId === row.id;

                                return (
                                    <React.Fragment key={row.id}>
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                if (tableType === TableType.APPOINTMENTS) {
                                                    appointmentDetails(row);
                                                }
                                            }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        handleClick(event, row.id)
                                                    }}
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCells row={row} headCells={headCells} type={tableType}/>

                                            {tableType === TableType.CLIENTS && (
                                                <TableCell style={{ paddingLeft: '32px' }} >
                                                    <IconButton
                                                        aria-label="expand row"
                                                        size="small"
                                                        onClick={() => toggleRowDetails(row.id)}
                                                    >
                                                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </IconButton>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                        {tableType === TableType.CLIENTS && isOpen && (
                                            <TableRow>
                                                <TableCell style={{ paddingBottom: 30, paddingTop: 15 }} colSpan={8}>
                                                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                                        <Box sx={{ margin: 1 }}>
                                                            <Typography variant="h6" gutterBottom component="div">
                                                                {TableType.VEHICLES}
                                                            </Typography>
                                                            {(<Table size="small" aria-label="purchases">
                                                                <EnhancedTableHead
                                                                    rowCount={row.vehicles?.length}
                                                                    headCells={vehiclesHeadCells}
                                                                />
                                                                <TableBody>
                                                                    {row.vehicles?.map((vehicleRow, i) => (
                                                                        <TableRow key={i} sx={{cursor: 'pointer'}} onClick={()=>{navigateToVehicle(vehicleRow.numChassis)}}>
                                                                            <TableCells row={vehicleRow}
                                                                                        headCells={vehiclesHeadCells}
                                                                                        type={TableType.VEHICLES}/>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>)}
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={8} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    labelRowsPerPage={'Lignes par page'}
                    labelDisplayedRows={({ from, to, count }) =>
                        `${from}-${to} sur ${count !== -1 ? count : `plus de ${to}`}`
                    }
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <AppointmentDetails open={open} setOpen={setOpen} appointment={appointment} />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Rembourrage dense"
            />
        </Box>
    );
}

DashboardTable.propTypes = {
    headCells: PropTypes.array.isRequired,
    tableType: PropTypes.string.isRequired,
    rows: PropTypes.array.isRequired,
    headers: PropTypes.array,
};
