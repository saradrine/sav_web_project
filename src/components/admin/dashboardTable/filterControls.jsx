import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import undo from "../../../assets/icons/undo.png";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';
import AddEmployee from "../employees/addEmployee.jsx";
import TableType from "../../../utils/enum/tableType.enum.js";

export default function FilterControls({ filterCriteria, setFilterCriteria, selectedColumn, setSelectedColumn, resetFilters, columns, tableType }) {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria((prevCriteria) => ({
            ...prevCriteria,
            [name]: value,
        }));
    };

    const handleColumnSelectChange = (e) => {
        setSelectedColumn(e.target.value);
        console.log(e.target.value);
    };

    return (
        <Box className={`flex flex-wrap items-center gap-4 ${tableType === TableType.ADMINS ? 'mt-3':'my-3'}`}>
            <FormControl
                variant="outlined"
                className="w-full sm:w-auto"
                sx={{
                    '& .MuiInputLabel-root': {
                        fontSize: '0.8rem',
                        color: '#333',
                        transform: 'translate(14px, 13px) scale(1)',
                        '&.MuiFormLabel-filled, &.Mui-focused': {
                            transform: 'translate(14px, -8px) scale(0.85)',
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
                }}
            >
                <InputLabel >Sélectionner une colonne</InputLabel>
                <Select
                    value={selectedColumn}
                    onChange={handleColumnSelectChange}
                    label="Sélectionner une colonne"
                    className="sm:min-w-[200px] w-full sm:w-auto"
                    sx={{
                        height: 43,
                        '& .MuiSelect-select': {
                            fontSize: '0.9rem',
                            transform: 'translate(0, 3px)',
                        },
                    }}
                >
                    {columns.map((col) => (
                        <MenuItem key={col.id} value={col.id} className="text-xs" sx={{
                            fontSize: '0.85rem',
                        }}>
                            {col.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {selectedColumn && (
                <TextField
                    label={`Filtrer par ${columns.find((col) => col.id === selectedColumn)?.label}`}
                    variant="outlined"
                    name={selectedColumn}
                    value={filterCriteria[selectedColumn] || ''}
                    onChange={handleFilterChange}
                    className="min-w-[200px] w-full sm:w-auto"
                    sx={{
                        '& .MuiInputBase-input': {
                            padding: '8px 10px',
                            height: '27px',
                            fontSize: '0.9rem',
                            borderRadius: '15px',
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: '0.8rem',
                            color: '#333',
                            transform: 'translate(14px, 13px)',
                            '&.Mui-focused': {
                                color: '#333',
                            },
                            '&.MuiFormLabel-filled, &.Mui-focused': {
                                transform: 'translate(14px, -8px) scale(0.85)',
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
                    }}
                />
            )}
            <div className="flex items-center cursor-pointer" onClick={resetFilters}>
                <img src={undo} alt="reset" width={16} height={16} className="mr-2"/>
                <Typography
                    fontSize={15}
                    fontWeight={600}
                    variant="h6"
                    className="text-red-700"
                >
                    Reset Filters
                </Typography>
            </div>
        </Box>
    );
}

FilterControls.propTypes = {
    filterCriteria: PropTypes.object.isRequired,
    setFilterCriteria: PropTypes.func.isRequired,
    selectedColumn: PropTypes.string.isRequired,
    setSelectedColumn: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired,
    tableType: PropTypes.string,
};
