import React from "react";
import MaterialTable from "material-table";
import Typography from "@mui/material/Typography";
import cars from "../../mocks/carStub";
import tableIcons from "./TableIcons";
import axios from 'axios';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarMoreDeals = (props) => {
  
  let navigate = useNavigate();
  const [seatCount, setSeatCount] = React.useState(props.seats);
  const [distance, setDistance] = React.useState(props.travelDistance);
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);
  const [dataUnavailable, setDataUnavailable] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [moreDeals, setMoreDeals] = React.useState(false);

  const columns = [
    { title: "Date", field: "date" },
    { title: "", field: "Image" },
    { title: "Car", field: "name" },
    { title: "Seats", field: "seatCount" }
    // { title: "Rating", field: "vehicleRating" },
  ];

  React.useEffect(() => {

    console.log(startDate);
    axios.get(`http://localhost:4200/api/rental/get/${seatCount}/${distance}/${startDate.toISOString().split('T')[0]}/${endDate.toISOString().split('T')[0]}`)
    .then((res) =>{
    let temp = res.data;
      res.data.map((car, i) => {
        temp[i].Image = <img src={car.imageurl} height="200" width="200"></img>;
        setData(temp);
      });
    //   setData(response.data);
    //   console.log(data.length);
      setDataUnavailable(false);
    }).catch((err)=>{
        console.error(err);
        setDataUnavailable(true);
      })

     

  }, []);

  

  return (
    <div>
    <MaterialTable
      icons={tableIcons}
      title={"Available vehicles for rent between " + startDate.toISOString().split("T")[0] + " and "+ endDate.toISOString().split("T")[0] }
      columns={columns}
      data={data}
    />
    
    </div>
  
    
  );
};

export default CarMoreDeals;

// reference - https://material-table.com/#/
