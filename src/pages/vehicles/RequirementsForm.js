import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Link} from '@mui/material';


function RequirementsForm() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        brand: Yup.string().required('Vehicle brand is required'),
        model: Yup.string().required('Preferred model is required'),
        dealer: Yup.string().required('Dealer name is required')
    
    });

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        axios
            .post("http://localhost:4200/api/vehicle", {
                brand: data.brand,
                model: data.model,
                dealer: data.dealer
            })
            .then((response) => {
                if(response.status === 201) {
                    toast.success('Your requirements were submitted', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    navigate("/services");
                }
            }).catch((error)=> {
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        });
    }

    return (
        <Paper align>
            <Box px={3} py={2} >
                <Typography component="h1" variant="h4" >
                    Vehicle Requirements Form
                </Typography>
                <Grid>
                <Grid container spacing={1}  >
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            placeholder="Enter the vehicle brand"
                            id="brand"
                            name="brand"
                            label="Vehicle Brand"
                            fullWidth
                            margin="dense"
                            {...register('brand')}
                            error={errors.brand ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.brand?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            placeholder="Enter your preferred model"
                            id="model"
                            name="model"
                            label="Preferred model"
                            fullWidth
                            margin="dense"
                            {...register('model')}
                            error={errors.model ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.model?.message}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            placeholder="Enter the dealer of your choice"
                            id="dealer"
                            name="dealer"
                            label="Preferred dealer name"
                            fullWidth
                            margin="dense"
                            {...register('dealer')}
                            error={errors.dealer ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.dealer?.message}
                        </Typography>
                    </Grid>
                </Grid>
                
               
                <Grid container mt={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                <Grid container mt={3}>
                        <Grid item xs={3} sm={2} md={2}>
                            <Link href="/home" variant="body2">
                               <h3> Return to homepage </h3>
                            </Link>
                        </Grid>
                        <Grid item xs={3} sm={2} md={2}>
                            <Link href="/services" variant="body2">
                               <h3> View offered services</h3>
                            </Link>
                        </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <br></br>

                
                {/* <Grid container mt={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Button variant="text" component={Link} to="/login">Already have an account? Click here</Button>
                    </Grid>
                </Grid> */}

                </Grid>
            </Box>
        </Paper>
    );

}

export default RequirementsForm;