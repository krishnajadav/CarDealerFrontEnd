import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { Tabs } from "@mui/material";
import Timeslot from "./Timeslot";
import Serviceapprove from "./serviceApprove/serviceapprove";
import Servicerecord from "./servicerecord";

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

function ServicesDealer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, val) => {
    setValue(val);
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
            <Tab label="Time Slots" />
            <Tab label="Service Approvals" />
            <Tab label="Service Records" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Timeslot />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {" "}
          <Serviceapprove />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Servicerecord />
        </TabPanel>
      </Box>
    </div>
  );
}

export default ServicesDealer;
