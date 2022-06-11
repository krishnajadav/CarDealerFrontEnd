import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Quotes.css";
import Tabs from "@mui/material/Tabs";
import Carform from "./Carform";
import CarLoan from "./CarLoan";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Services() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={value}
            color="secondary"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Car Rental" />
            <Tab label="Car Loan" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Carform />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CarLoan />
        </TabPanel>
      </Box>
    </div>
  );
}

export default Services;

// return (
//   <Paper
//     style={{
//       boxShadow: "none",
//     }}
//   >
//     <Box px={3} py={30}>
//       <Grid container spacing={1} alignItems="center" justifyContent="center">
//         <Grid item xs={12} sm={12} md={6}>
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() => {
//               window.location.replace(
//                 window.location.origin + "/car-rentals"
//               );
//             }}
//           >
//             Car Rental Services
//           </Button>
//         </Grid>
//       </Grid>
//       <p></p>
//       <p></p>
//       <p></p>
//       <Grid container spacing={1} alignItems="center" justifyContent="center">
//         <Grid item xs={12} sm={12} md={6}>
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() => {
//               window.location.replace(window.location.origin + "/car-loan");
//             }}
//           >
//             Car Loan Services
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   </Paper>
// );
