// Feature : Car Loan
// Author: Elizabeth James
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MaterialTable from "material-table";
import Paper from "@mui/material/Paper";
import tableIcons from "./TableIcons";
import axios from 'axios';
import { Url } from './../../constants/global'

const CarLoan = () => {
  const [infoAcquired, setInfoAcquired] = React.useState(false);
  const [insuranceAvailable, setInsuranceAvailable] = React.useState(true);
  const [carLoans, setCarLoans] = React.useState([]);



  const columns = [
    { title: "", field: "Image" },
    { title: "Car", field: "vehicleName" },
    { title: "Seats", field: "vehicleSeatCount" },
    { title: "Cost(CAD)", field: "vehiclePrice" },
    { title: "Rating", field: "vehicleRating" },
  ];

  const handleInsuranceAvailable = () => {
    setInsuranceAvailable(true);
    setInfoAcquired(true);
  };

  const handleInsuranceNotAvailable = () => {
    setInsuranceAvailable(false);
    setInfoAcquired(true);
  };

  React.useEffect(() => {
    axios.get(Url + "/api/inventory/get/loan")
    .then((res)=>{
      let temp = res.data;
      res.data.map((car, i) => {
        temp[i].Image = <img src={car.vehicleImageURL} height="200" width="200"></img>;
        setCarLoans(temp);
      });
    }).catch((err)=>{
     
    })
  }, []);

  return (
    <Paper
      style={{
        boxShadow: "none",
      }}
    >
      {infoAcquired ? (
        <Box px={3} py={2}>
          {insuranceAvailable ? (
            <MaterialTable
              icons={tableIcons}
              title="Available vehicles for loan"
              columns={columns}
              data={carLoans}
            />
          ) : (
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant="h5">
                    Unforunately, you cannot loan a car as your warranty period has expired.
                  </Typography>
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
                  <Typography variant="h5">
                    You can check our car rental service instead
                  </Typography>
                </Grid>
              </Grid>
            </div>
          )}
        </Box>
      ) : (
        <Box px={50} py={20}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h5">Is your car under warranty?</Typography>
            </Grid>
          </Grid>
          <p></p>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3} sm={3}>
              <Button
                variant="contained"
                onClick={() => handleInsuranceAvailable()}
              >
                Yes
              </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
              <Button
                variant="contained"
                onClick={() => handleInsuranceNotAvailable()}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default CarLoan;
