import { createTheme } from "@mui/material/styles";

const Standard = createTheme({
    palette: {
        primary: {
            main: '#7338b6',
            light: '#b676d9',
            dark: '#6133ad'
        },
        secondary: {
            main: '#7338b6',
            light: '#b676d9',
            dark: '#6133ad'
        },
        success: {
            main: '#a65ad0'
        }
    },
    typography: {
        fontSize: 16,
        h3: {
            fontWeight: 500
        }
    }
})

export default Standard;
