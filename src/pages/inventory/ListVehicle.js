import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ListVehicle = (props) => {
  const {vehicle,onEditVehicle,onDeleteVehicle} = props;

  const onEditClick = (vehicle) =>{
    return function () {
      onEditVehicle(vehicle);
   }     
}

const onDeleteClick = (ID) =>{
  return function () {
    onDeleteVehicle(ID);
 }     
}

  return (

    <TableRow
    key={vehicle.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell>{vehicle.companyName}</TableCell>
    <TableCell>{vehicle.vehicleName}</TableCell>
    <TableCell>{vehicle.vehicleModelNumber}</TableCell>
    <TableCell>{vehicle.vehiclePrice}</TableCell>
    <TableCell>
    <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onEditClick(vehicle)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onDeleteClick(vehicle.id)}
                    >
                        Delete
                    </Button>
      </Box>
      </TableCell>
  </TableRow>
  )
}

export default ListVehicle