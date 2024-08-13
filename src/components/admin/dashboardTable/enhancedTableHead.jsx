import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import '../../../assets/css/materialUiCustomized.css';
import { StyledTableCell } from './styledTableCell.jsx';



export default function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
        headCells,
        first,
        inClientTable
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                { first && <StyledTableCell index={0} padding="checkbox">
                    <Checkbox
                        color="default"
                        className={` text-custom-green ${numSelected === rowCount && rowCount !== 0 ? 'text-custom-green' : ''}`}
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </StyledTableCell>}
                {headCells.map((headCell, i) => (
                    inClientTable && i === headCells.length - 1 ? null : (
                        <StyledTableCell
                            index={first && i === headCells.length - 1 ? -1 : -2}
                            key={headCell.id}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                        >
                            {first ? (
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            ) : (
                                <div style={{cursor: 'pointer'}}>{headCell.label}</div>
                            )}
                        </StyledTableCell>
                    )

                    ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number,
    onRequestSort: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string,
    rowCount: PropTypes.number.isRequired,
    headCells: PropTypes.array.isRequired,
    first: PropTypes.bool,
    inClientTable: PropTypes.bool
    
};
