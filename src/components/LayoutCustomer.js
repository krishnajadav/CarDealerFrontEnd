import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import CustomerNavBar from "./CustomerNavBar";

function LayoutCustomer() {
    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                minHeight: "100vh",
                maxWidth: "100vw",
                flexGrow: 1,
            }}
        >
            <CustomerNavBar />
            <Outlet/>
        </Box>
    );
}

export default LayoutCustomer;