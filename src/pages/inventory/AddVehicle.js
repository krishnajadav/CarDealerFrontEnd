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
/*
Author: Krishna Sanjaybhai Jadav(krishna.jadav@dal.ca)
*/
const AddVehicle = (props) => {

    const {vehicles,onAddVehicle,onEditVehicle,onDeleteVehicle} = props;

   // const [, updateState]=useState();

    const [_id,setid]=useState(0)
    const [Status,setstatus]=useState('Add')
    const [vehicleName,setvehicleName]=useState('')
    const [vehicleModelNumber,setvehicleModelNumber]=useState('')
    const [companyName,setcompanyName]=useState('')
    const [vehiclePrice,setvehiclePrice]=useState('')
    const [base64URL,setbase64URL]=useState('')
    const [vehicleImageURL,setvehicleImageURL]=useState('')
    const [vehicleSeatCount,setvehicleSeatCount]=useState('')
    
    const onClick = () =>{
        if(vehicleName!==""&&vehicleModelNumber!==""&&companyName!==""&&vehiclePrice!=="")
        {
            if(_id===0)
            {
                onAddVehicle({vehicleName:vehicleName,vehicleModelNumber:vehicleModelNumber,companyName:companyName,vehiclePrice:vehiclePrice,vehicleSeatCount:vehicleSeatCount,carImageFile:base64URL});    
            }
            else
            {
                onEditVehicle({_id:_id,vehicleName:vehicleName,vehicleModelNumber:vehicleModelNumber,companyName:companyName,vehiclePrice:vehiclePrice,vehicleSeatCount:vehicleSeatCount,carImageFile:base64URL,vehicleImageURL:vehicleImageURL})
            }
            //updateState({});
            ClearVehicle(); 
        }      
    }

    const EditVehicleCallback = (vehicleEdit) =>{
        setvehicleName(vehicleEdit.vehicleName);
        setvehicleModelNumber(vehicleEdit.vehicleModelNumber);
        setcompanyName(vehicleEdit.companyName);
        setid(vehicleEdit._id);
        setvehiclePrice(vehicleEdit.vehiclePrice);
        setvehicleImageURL(vehicleEdit.vehicleImageURL);
        setvehicleSeatCount(vehicleEdit.vehicleSeatCount);
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
        setbase64URL('');
        setvehicleSeatCount('');
        setstatus('Add');
    }

    const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Company name is required'),
        vehicleName: Yup.string().required('Vehicle name is required'),
        vehicleModelNumber: Yup.string().required('vehicle ModelNumber is required'),
        vehiclePrice: Yup.string().required('vehicle Price is required'),
        vehicleSeatCount: Yup.string().required('Seat Count is required')
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
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="vehicleSeatCount"
                            name="vehicleSeatCount"
                            label="Seat Count"
                            type="number"
                            fullWidth
                            margin="dense"
                            value={vehicleSeatCount}
                            {...register('vehicleSeatCount')}
                            error={errors.vehicleSeatCount ? true : false}
                            onChange={(e)=>setvehicleSeatCount(e.target.value)}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.vehiclePrice?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <input type="file" class="form-control-file" id="roomImage" accept="image/*" onChange={(e)=>{         
                        let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload =  function () {
                            setbase64URL(reader.result)
                        };   
                        }}/>
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
            <TableCell>Seat</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { vehicles.length > 0 ? vehicles.map((vehicle)=>(
            <ListVehicle key={vehicle._id} vehicle={vehicle} onEditVehicle={EditVehicleCallback} onDeleteVehicle={DeleteVehicleCallback}/>
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