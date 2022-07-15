
// Feature : Car rental
// Author: Elizabeth James
import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import { Url } from './../../constants/global';

const CarMoreDeals = (props) => {
  
  let navigate = useNavigate();
  const [seatCount, setSeatCount] = React.useState(props.seats);
  const [distance, setDistance] = React.useState(props.travelDistance);
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const columns = [
    { title: "Date", field: "date" },
    { title: "", field: "Image" },
    { title: "Car", field: "name" },
    { title: "Seats", field: "seatCount" },
    { title: "Cost(CAD)", field: "cost" },
  ];

  React.useEffect(() => {

    axios.get(Url + `/api/rental/get/${seatCount}/${distance}/${startDate.toISOString().split('T')[0]}/${endDate.toISOString().split('T')[0]}`)
    .then((res) =>{
        setLoading(false);
    let temp = res.data;
      res.data.map((car, i) => {
        temp[i].Image = <img src={car.imageurl} height="200" width="200"></img>;
        setData(temp);
      });
    }).catch((err)=>{
        console.error(err);
      })

     

  }, []);

  

  return (
    
    loading ?  <Box textAlign='center'> <CircularProgress  /> </Box>:
    (
    <div>
    <MaterialTable
      icons={tableIcons}
      title={"Available vehicles for rent between " + startDate.toISOString().split("T")[0] + " and "+ endDate.toISOString().split("T")[0] }
      columns={columns}
      data={data}
    />
    
    </div>
    )
  
    
  );
};

export default CarMoreDeals;

// reference - https://material-table.com/#/
