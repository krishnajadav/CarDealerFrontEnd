import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { KingBedOutlined } from "@material-ui/icons";

const TradeInResult = (props) => {
    
  const dummyValue = "$12,000";

  return (
    <Paper
    style={{
      boxShadow: "none",
    }}
    >
      <Box px={3} pt={10} pb={3}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h5">Trade-in Estimate</Typography><p></p>
            <Typography variant="h6"><b>Estimated value:</b> {dummyValue}</Typography>       
            <b>Make:</b> {props.make}<br></br>
            <b>Model:</b> {props.model}<br></br>
            <b>Year:</b> {props.year}<br></br>
            <b>Kilometers:</b> {props.kilometers}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default TradeInResult;