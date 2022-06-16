import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { MenuItem } from "@mui/material";
import TradeInResult from "./TradeInResult"

const TradeIn = () => {

  const [make, updateMake] = useState();
  const [model, updateModel] = useState();
  const [year, updateYear] = useState();
  const [kilometers, updateKilometers] = useState();
  const [validated, updateValidated] = useState(false);

  const submit = () => {
    if (make && model && year && kilometers) {
      let match = kilometers.match(/[0-9]+/);
      if (match && match[0] === kilometers)  {
        if (year>=dummyYearRange.min && year<=dummyYearRange.max) {
          updateValidated(true);
        } else {
          alert("Only years between "+dummyYearRange.min+" and "+dummyYearRange.max+" are accepted");
        }
      } else {
        alert("Enter a valid number for kilometers");
      }
    } else {
      alert("Please fill in all fields");
    }
  }

  const reset = () => {
    updateKilometers(null);
    updateMake(null);
    updateModel(null);
    updateYear(null);
    updateValidated(false);
  }

  const dummyMakes = ["Honda"];
  const dummyModels = ["Civic","Accord"];
  const dummyYearRange = {min:2010, max:2022};

  if (validated) {
    return (
      <>
        <TradeInResult
          make={make}
          model={model}
          year={year}
          kilometers={kilometers} />
        <Box px={3}>
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
                onClick={reset}
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  } else {
    return (
      <Paper
        style={{
          boxShadow: "none",
        }}
      >
          <Box px={3} py={10}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <Typography variant="h5">Trade-in Estimate</Typography><p></p>
                <Typography>Enter Vehicle Details</Typography>
              </Grid>
            </Grid>
            <p></p>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={6} sm={6} md={3}>
                <FormControl 
                  fullWidth
                  margin="dense"
                >
                  <InputLabel>Select Make</InputLabel>
                  <Select label="Make" onChange={e => updateMake(e.target.value)}>
                    {dummyMakes.map((year)=>{
                      return <MenuItem value={year}>{year}</MenuItem>
                    })} 
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Select Model</InputLabel>
                  <Select label="Model" onChange={e => updateModel(e.target.value)}>
                    {dummyModels.map((year)=>{
                      return <MenuItem value={year}>{year}</MenuItem>
                    })} 
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
              <Grid item xs={6} sm={6} md={3}>
                <FormControl fullWidth>
                  <TextField type="number" label="Year" inputProps = {dummyYearRange} onChange={e => updateYear(e.target.value)}/>
                </FormControl> 
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <TextField
                  fullWidth
                  label="Kilometers"
                  onChange={e => updateKilometers(e.target.value)}
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
                  onClick={submit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
      </Paper>
    );
  }
}

export default TradeIn;