import React, { useEffect, useRef } from "react";
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
import { getCars, getEstimate } from "./TradeInHelper";

/*
Author: Leah Isenor
Form for the trade-in estimate feature
*/
const TradeIn = () => {

  const [make, updateMake] = useState();
  const [model, updateModel] = useState();
  const [year, updateYear] = useState();
  const [kilometers, updateKilometers] = useState();
  const [estimate, setEstimate] = useState();
  const [makes, updateMakes] = useState([]);
  const [models, updateModels] = useState([]);
  const yearRange = {min:2000, max:2022};
  const options = useRef({});

  const reset = () => {
    updateKilometers(null);
    updateMake(null);
    updateModel(null);
    updateYear(null);
    setEstimate(null);
  }
  
  const submit = async() => {
    if (make && model && year && kilometers) {
      let match = kilometers.match(/[0-9]+/);
      if (match && match[0] === kilometers)  {
        if (year>=yearRange.min && year<=yearRange.max) {
          console.log(options.current.value)
          var response = await getEstimate(options.current.value[make][model]["id"],year,kilometers);
          setEstimate(response);
        } else {
          alert("Only years between "+yearRange.min+" and "+yearRange.max+" are accepted");
        }
      } else {
        alert("Enter a valid number for kilometers");
      }
    } else {
      alert("Please fill in all fields");
    }
  }

  const getOptions = async() => {
    var response = await getCars();
      options.current.value = response;
      updateMakes(Object.keys(options.current.value));
  }

  useEffect(() => {
    getOptions();
  },[]);

  useEffect(() => {
    if(make){
      updateModels(Object.keys(options.current.value[make]));
    }
  },[make]);

  if (estimate) {
    return (
      <>
        <TradeInResult
          make={make}
          model={model}
          year={year}
          kilometers={kilometers}
          estimate={estimate} />
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
                  <Select label="Make" onChange={e => updateMake(e.target.value)} defaultValue="">
                    {makes.map((make)=>{
                      return <MenuItem key={make} value={make}>{make}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Select Model</InputLabel>
                  <Select label="Model" onChange={e => updateModel(e.target.value)} defaultValue="">
                    {models.map((model)=>{
                      return <MenuItem key={model} value={model}>{model}</MenuItem>
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
                  <TextField type="number" label="Year" inputProps = {yearRange} onChange={e => updateYear(e.target.value)}/>
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