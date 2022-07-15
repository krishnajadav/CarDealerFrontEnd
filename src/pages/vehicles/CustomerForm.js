/*
Author: Harsh Hariramani (B00899363)

Code References:
Used the App bar of MUI library for easy navigation between pages
https://mui.com/material-ui/react-app-bar/
*/


import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, TextField, Typography, Grid, Button, Link, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Tabs from "@mui/material/Tabs";
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


function CustomerForm() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {

    var x = document.forms["carform"]["brand"].value;
    if (x === "") {
      alert("Brand must be filled out");
      return false;
    }

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      brand: data.get('brand'),
      model: data.get('model'),
    });

  };

  return (
    <div className='parent'>

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
              <Tab label="Requirements form" />
              <Tab label="Edit vehicle requirements" />
            </Tabs>
          </Box>

        </Box>

      </div>

      <form name="carform">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Vehicle Requirements Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{
            mt: 1, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%'
          }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="brand"
              label="Vehicle Brand"
              name="brand"
              autoComplete="brand"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="model"
              label="Preferred model"
              type="model"
              id="model"
              autoComplete="car-model"
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Select the fuel variant</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="petrol"
              >
                <FormControlLabel value="petrol" control={<Radio />} label="Petrol" />
                <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />

              </RadioGroup>
            </FormControl>

            <TextField
              margin="normal"
              required="true"
              fullWidth
              name="date"

              type="date"
              id="date"
              autoComplete="expected-date"
            />
            <FormLabel
              id="Expected delivery date"
            > Enter the Expected delivery date </FormLabel>

            <TextField
              margin="normal"
              fullWidth
              name="dealer"
              label="Enter the preferred dealer name (if any)"
              type="dealer"
              id="dealer"
              autoComplete="dealer-name"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Submit
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="/home" variant="body2">
                  <h3> Return to homepage </h3>
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="/services" variant="body2">
                  <h3> View offered services</h3>
                </Link>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br></br>

          </Box>
        </Box>

      </form>

    </div>
  )
}


export default CustomerForm;


/*
 Code references: 
 https://github.com/mui/material-ui/tree/v5.8.4/docs/data/material/getting-started/templates/sign-in
 https://mui.com/material-ui/react-radio-button/ 
 */