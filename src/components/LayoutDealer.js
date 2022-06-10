import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

function LayoutDealer() {
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
            <Navbar />
            <Outlet/>
        </Box>
    );
}

export default LayoutDealer;