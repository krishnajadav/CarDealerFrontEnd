import React from "react";
import MaterialTable from "material-table";
import Typography from "@mui/material/Typography";
import cars from "../../mocks/carStub";
import tableIcons from "./TableIcons";

const CarResults = (props) => {
  const [seatCount, setSeatCount] = React.useState(props.seats);
  const [distance, setDistance] = React.useState(props.travelDistance);
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);
  const [dataUnavailable, setDataUnavailable] = React.useState(false);
  const [data, setData] = React.useState([]);

  const columns = [
    { title: "", field: "Image" },
    { title: "Car", field: "Name" },
    { title: "Seats", field: "Seats" },
    { title: "Cost(CAD)", field: "cost" },
    { title: "Rating", field: "Rating" },
  ];

  React.useEffect(() => {
    console.log(props.seats);
    let temp = cars[seatCount];
    if (seatCount in cars)
      cars[seatCount].map((car, i) => {
        temp[i].cost =
          car.cost *
          distance *
          Math.ceil(Math.abs(endDate - startDate + 1) / (1000 * 60 * 60 * 24));
        temp[i].Image = <img src={car.url} height="200" width="200"></img>;
        setData(temp);
      });
    else {
      setDataUnavailable(true);
    }
  }, []);

  return dataUnavailable ? (
    <Typography variant="h2">No data available for given seat count</Typography>
  ) : (
    <MaterialTable
      icons={tableIcons}
      title={"Available vehicles for rent between " + startDate.toISOString().split("T")[0] + " and "+ endDate.toISOString().split("T")[0] }
      columns={columns}
      data={data}
    />
  );
};

export default CarResults;

// reference - https://material-table.com/#/
