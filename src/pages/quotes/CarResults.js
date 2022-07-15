// Feature : Car rental
// Author: Elizabeth James

import React from "react";
import MaterialTable from "material-table";
import Typography from "@mui/material/Typography";
import tableIcons from "./TableIcons";
import axios from 'axios';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarMoreDeals from "./CarMoreDeals";
import Box from "@mui/material/Box";
import { Url } from './../../constants/global'

const CarResults = (props) => {
  
  let navigate = useNavigate();
  const [seatCount, setSeatCount] = React.useState(props.seats);
  const [distance, setDistance] = React.useState(props.travelDistance);
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);
  const [dataUnavailable, setDataUnavailable] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [moreDeals, setMoreDeals] = React.useState(false);

  const columns = [
    { title: "", field: "Image" },
    { title: "Car", field: "vehicleName" },
    { title: "Seats", field: "vehicleSeatCount" },
    { title: "Cost(CAD)", field: "vehiclePrice" },
    { title: "Rating", field: "vehicleRating" },
  ];

  React.useEffect(() => {

    axios.get(Url + `/api/rental/factor/get/${startDate.toISOString().split('T')[0]}`)
    .then((response) =>{
      axios.get(Url + `/api/inventory/get/${seatCount}/rent`)
    .then((res)=>{
      let temp = res.data;
      res.data.map((car, i) => {
        temp[i].vehiclePrice =
          (car.vehiclePrice * response.data.factor *
          distance *
          Math.ceil(Math.abs(endDate - startDate + 1) / (1000 * 60 * 60 * 24))).toFixed(2);
        temp[i].Image = <img src={car.vehicleImageURL} height="200" width="200"></img>;
        setData(temp);
      });
      if (res.data.length<=0){
        setDataUnavailable(true);
      }
    }).catch((err)=>{
      setDataUnavailable(true);
    })
    }) 

  }, []);

  const showMoreDeals = () =>{
    console.log("Yayy");
    setMoreDeals(true)
  }

  return dataUnavailable ? (
    <Typography variant="h2">No data available for given seat count</Typography>
  ) : (
    moreDeals ?
    (<CarMoreDeals
      seats={seatCount}
      travelDistance={distance}
      startDate={startDate}
      endDate={endDate}
    />)
    :(
    <div>
    <MaterialTable
      icons={tableIcons}
      title={"Available vehicles for rent between " + startDate.toISOString().split("T")[0] + " and "+ endDate.toISOString().split("T")[0] }
      columns={columns}
      data={data}
    />
    <br/>
    <Box textAlign='center'>
      <Button variant="contained" onClick={showMoreDeals}>Show more deals</Button>
    </Box>
    </div>
  
    
  ));
};

export default CarResults;

// reference - https://material-table.com/#/
