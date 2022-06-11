import {useState} from 'react'
import ListVehicle from './ListVehicle';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';

import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const AddVehicle = (props) => {

    const {vehicles,onAddVehicle,onEditVehicle,onDeleteVehicle} = props;

   // const [, updateState]=useState();

    const [id,setid]=useState(0)
    const [Status,setstatus]=useState('Add')
    const [vehicleName,setvehicleName]=useState('')
    const [vehicleModelNumber,setvehicleModelNumber]=useState('')
    const [companyName,setcompanyName]=useState('')
    const [vehiclePrice,setvehiclePrice]=useState('')

    const onClick = () =>{
        if(vehicleName!==""&&vehicleModelNumber!==""&&companyName!==""&&vehiclePrice!=="")
        {
            if(id===0)
            {
                onAddVehicle({id:vehicles.length+1,vehicleName:vehicleName,vehicleModelNumber:vehicleModelNumber,companyName:companyName,vehiclePrice:vehiclePrice});    
            }
            else
            {
                onEditVehicle({id:id,vehicleName:vehicleName,vehicleModelNumber:vehicleModelNumber,companyName:companyName,vehiclePrice:vehiclePrice})
            }
            //updateState({});
            ClearVehicle(); 
        }      
    }

    const EditVehicleCallback = (vehicleEdit) =>{
        setvehicleName(vehicleEdit.vehicleName);
        setvehicleModelNumber(vehicleEdit.vehicleModelNumber);
        setcompanyName(vehicleEdit.companyName);
        setid(vehicleEdit.id);
        setvehiclePrice(vehicleEdit.vehiclePrice);
        setstatus('Edit');
    }

    const DeleteVehicleCallback = (ID) =>{
        onDeleteVehicle(ID)
       // updateState({});
        ClearVehicle();
    }

    const ClearVehicle = () =>{
        setvehicleName('');
        setvehicleModelNumber('');
        setcompanyName('');
        setid(0);
        setvehiclePrice('');
        setstatus('Add');
    }

    const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Company name is required'),
        vehicleName: Yup.string().required('Vehicle name is required'),
        vehicleModelNumber: Yup.string().required('vehicle ModelNumber is required'),
        vehiclePrice: Yup.string().required('vehicle Price is required'),
    });
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
return (
      <div>

<Paper>
            <Box px={3} py={2}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="companyName"
                            name="companyName"
                            label="company Name"
                            fullWidth
                            margin="dense"
                            value={companyName}
                            {...register('companyName')}
                            error={errors.companyName ? true : false}
                            onChange={(e)=>setcompanyName(e.target.value)}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.companyName?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="vehicleName"
                            name="vehicleName"
                            label="vehicle Name"
                            fullWidth
                            margin="dense"
                            value={vehicleName}
                            {...register('vehicleName')}
                            error={errors.vehicleName ? true : false}
                            onChange={(e)=>setvehicleName(e.target.value)}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.vehicleName?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="vehicleModelNumber"
                            name="vehicleModelNumber"
                            label="vehicle Model Number"
                            fullWidth
                            margin="dense"
                            value={vehicleModelNumber}
                            {...register('vehicleModelNumber')}
                            error={errors.vehicleModelNumber ? true : false}
                            onChange={(e)=>setvehicleModelNumber(e.target.value)}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.vehicleModelNumber?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="vehiclePrice"
                            name="vehiclePrice"
                            label="vehicle Price"
                            type="number"
                            fullWidth
                            margin="dense"
                            value={vehiclePrice}
                            {...register('vehiclePrice')}
                            error={errors.vehiclePrice ? true : false}
                            onChange={(e)=>setvehiclePrice(e.target.value)}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.vehiclePrice?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onClick)}
                    >
                        {Status}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ClearVehicle}
                    >
                        Clear
                    </Button>
                </Box>
            </Box>
            <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Vehicle Name</TableCell>
            <TableCell>Vehicle Model Number</TableCell>
            <TableCell>Vehicle Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { vehicles.length > 0 ? vehicles.map((vehicle)=>(
            <ListVehicle key={vehicle.id} vehicle={vehicle} onEditVehicle={EditVehicleCallback} onDeleteVehicle={DeleteVehicleCallback}/>
            )): <TableRow><TableCell colSpan="4">No Vehicles</TableCell></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
    <br/>
 </div>
  )
}

export default AddVehicle