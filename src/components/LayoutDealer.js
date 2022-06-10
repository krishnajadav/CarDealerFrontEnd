import { Box } from "@mui/material";
import Navbar from "./Navbar";

function LayoutDealer(props) {
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
            {props.children}
        </Box>
    );
}

export default LayoutDealer;