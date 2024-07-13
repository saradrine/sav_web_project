import { FormControl, InputLabel, Select } from "@mui/material";
import PropTypes from "prop-types";

const CustomSelectField = ({label,selectedValue, children, handleValueSelectChange,width}) => {
    return (
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
            <InputLabel>{label}</InputLabel>
            <Select
                value={selectedValue}
                onChange={handleValueSelectChange}
                label={`${label}`}
                className={`${width || 'sm:min-w-[200px]'} w-full sm:w-auto`}
                sx={{
                    height: 43,
                    '& .MuiSelect-select': {
                        fontSize: '0.9rem',
                        transform: 'translate(0, 3px)',
                    },
                }}
            >
                {children}
            </Select>
        </FormControl>
    );
};

CustomSelectField.propTypes = {
    label: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
    handleValueSelectChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
};

export default CustomSelectField;
