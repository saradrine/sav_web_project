import {Grid} from "@mui/material";

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