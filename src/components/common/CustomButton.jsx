import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {darken} from "polished";

export const CustomButton = styled(Button)(({ borderradius, backgroundcolor, height, width, textcolor }) => ({
    textTransform: 'none',
    fontSize: 15,
    padding: '6px 12px',
    height: height || '43px',
    width: width || '100%',
    backgroundColor: backgroundcolor || '#039388',
    color: textcolor || 'white',
    borderRadius: borderradius || '15px',
    borderColor: backgroundcolor || '#039388',
    boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease',
    '&:hover': {
        backgroundColor: backgroundcolor ? darken(0.05, backgroundcolor) : '#038a80',
        boxShadow: 'none',
    },
    '&:active': {
        transform: 'scale(0.96)',
    },
}));