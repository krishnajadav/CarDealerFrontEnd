import {CardActionArea,Card,CardMedia,Typography,CardContent,Grid,Box,Button,TextField} from "@mui/material";
import {useState,useEffect} from 'react'
import Slider from '@material-ui/core/Slider';

import { Url } from './../../constants/global';

/*
Author: Krishna Sanjaybhai Jadav(krishna.jadav@dal.ca)
*/

const SearchVehicle = () => {

    const [vehicles,setvehicles]=useState([])
    const [vehiclePrice,setvehiclePrice]=useState([8000,25000])
    const [vehicleSeatCount,setvehicleSeatCount]=useState(0)
    const [availablevehicles,setavailablevehicles]=useState([])
    const [searchvehicles,setsearchvehicles]=useState([])
    const [, updateState]=useState(); 
  
    useEffect(() => {
    ResetSearch()
    }, [])

    const ResetSearch = async () => {
        const InventoryList = await getInventory();
        setvehicles(InventoryList);
        setvehiclePrice([5000,100000]);
        setvehicleSeatCount(0);
      }
  
  const getInventory = async () => {
    const res = await fetch(Url + '/api/inventory/get',{"method": "GET"})
    const data = await res.json()  
    return data
  }  

  const onClick = async () =>{   
    if(vehicleSeatCount>0)
    {
        var i = vehicles.length;
        while ( i --> 0 ) {
            if(vehicles[i].vehicleSeatCount === vehicleSeatCount)
            {
                var valArr=availablevehicles;
                valArr.push(vehicles[i]);
                setavailablevehicles(valArr); 
            }
        }
    }
    else
    {
        var k = vehicles.length;
        while ( k --> 0 ) {
                var valArr=availablevehicles;
                valArr.push(vehicles[k]);
                setavailablevehicles(valArr);         
        }
    }

   
    var j = availablevehicles.length;
    while ( j --> 0 ) {
        const price = Number(availablevehicles[j].vehiclePrice);
        if(price >= vehiclePrice[0] && price <= vehiclePrice[1])
        {
            var searchVal=searchvehicles;
            searchVal.push(availablevehicles[j]);
            setsearchvehicles(searchVal); 
        }
    }
    setvehicles(searchvehicles);
    setavailablevehicles([]);
    setsearchvehicles([]); 
    updateState({});
}

const priceRangeChange = (event, newValue) => {
    setvehiclePrice(newValue);
  };

    return (
        <div>
                       <Box px={3} py={2}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="vehicleSeatCount"
                            name="vehicleSeatCount"
                            label="Seat Count"
                            type="number"
                            value={vehicleSeatCount}
                            fullWidth
                            margin="dense"
                            onChange={(e)=>setvehicleSeatCount(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <Typography id="range-slider" gutterBottom>
                        Price Range:
                     </Typography> 
                        <Slider
                            value={vehiclePrice}
                            min={5000}
                            max={100000}
                            onChange={priceRangeChange}
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onClick}
                    >
                        Search
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={ResetSearch}
                    >
                        Clear
                    </Button>
                </Box>
            </Box>
            {
                vehicles.map((vehicle,index)=>(
                    <Card key={index} sx={{ maxWidth: 345 }} style={{display:"inline-block" ,width: 300 + "px",marginRight: 20 + "px",marginBottom: 20 + "px"}}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={vehicle.vehicleImageURL}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {vehicle.vehicleName + " " + vehicle.vehicleModelNumber}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {vehicle.companyName} <br/>
                        Price: ${vehicle.vehiclePrice}  <br/>
                        No Seat: {vehicle.vehicleSeatCount}
                        
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                    ))
            }
        </div>
    );
}
export default SearchVehicle