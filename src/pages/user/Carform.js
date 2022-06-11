import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import DatePicker from "react-date-picker";
import CarResults from "./CarResults";
import { useNavigate } from "react-router-dom";

const Carform = () => {
  let navigate = useNavigate();
  const [distance, setDistance] = React.useState();
  const [seatCount, setSeatCount] = React.useState(4);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [infoAcquired, setInfoAcqiured] = React.useState(false);

  const updateDistance = (event) => {
    if (event.target.value >= 1 || event.target.value === "")
      setDistance(event.target.value);
    else {
      setDistance(1);
      alert("Kilometers should be a positive number greater than 0  ");
    }
    //setDistance(event.target.value);
  };

  const updateSeats = (event) => {
    setSeatCount(event.target.value);
  };

  const onSubmit = () => {
    setInfoAcqiured(true);
  };

  return (
    <Paper
      style={{
        boxShadow: "none",
      }}
    >
      {infoAcquired ? (
        <CarResults
          seats={seatCount}
          travelDistance={distance}
          startDate={startDate}
          endDate={endDate}
        />
      ) : (
        <Box px={3} py={2}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h5">Car Rental Calculator</Typography>
            </Grid>
          </Grid>
          <p></p>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="seat-select">Enter Seat Count</InputLabel>
                <Select
                  labelId="seat-select"
                  id="seat-select"
                  value={seatCount}
                  label="Age"
                  onChange={(event) => updateSeats(event)}
                >
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={6}>Six</MenuItem>
                  <MenuItem value={7}>Seven</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                id="distance"
                name="distance"
                label="Enter Distance in kilometers"
                fullWidth
                margin="dense"
                value={distance}
                onChange={(event) => updateDistance(event)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3} sm={3}>
              <Typography variant="h6">Start Date</Typography>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                minDate={new Date()}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3}>
              <Typography variant="h6">End Date</Typography>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                minDate={startDate}
                required
              />
            </Grid>
          </Grid>
          <p></p>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  onSubmit();
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default Carform;
