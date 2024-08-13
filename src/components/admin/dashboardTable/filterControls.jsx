import { Box, MenuItem, TextField } from "@mui/material";
import undo from "../../../assets/icons/undo.png";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';
import TableType from "../../../utils/enum/tableType.enum.js";
import CustomSelectField from "../../common/customSelectField.jsx";

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
            <CustomSelectField width={'sm:min-w-[200px]'} label={'Sélectionner une colonne'} selectedValue={selectedColumn} handleValueSelectChange={handleColumnSelectChange}>
                {columns.map((col) => (
                    <MenuItem key={col.id} value={col.id} className="text-xs" sx={{
                        fontSize: '0.85rem',
                    }}>
                        {col.label}
                    </MenuItem>
                ))}
            </CustomSelectField>
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
