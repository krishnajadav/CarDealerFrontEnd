import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, Avatar } from '@mui/material';
import ElectricCarSharpIcon from '@mui/icons-material/ElectricCarSharp';


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
        formState: { errors }
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
                if (response.status === 201) {
                    toast.success('Your requirements have been submitted successfully', {
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
            }).catch((error) => {
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

        <div className='parent'>

            <form name="carform">
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >

                    <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 65, height: 65 }}>
                        <ElectricCarSharpIcon />
                    </Avatar>

                    <Typography component="h1" variant="h4">
                        Vehicle Requirements Form
                    </Typography>

                    <Box component="form" sx={{
                        mt: 1, display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%'
                    }}>

                        <br></br>

                        <TextField
                            placeholder="Enter the vehicle brand"
                            id="brand"
                            name="brand"
                            label="Vehicle Brand"
                            type="string"
                            fullWidth
                            margin="dense"
                            {...register('brand')}
                            error={errors.brand ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.brand?.message}
                        </Typography>


                        <br></br>

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

                        <br></br>

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

                        <br></br>
                        <br></br>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmit(onSubmit)}
                        >
                            Submit
                        </Button>

                        <br></br>

                        <Grid container>
                            <Grid item xs>
                                <Link href="/quotes" variant="body2">
                                    <h3> Request a quote </h3>
                                </Link>
                            </Grid>
                            <Grid item >
                                <Link href="/services" variant="body2">
                                    <h3> View offered services</h3>
                                </Link>
                            </Grid>
                        </Grid>

                        <br></br>
                        <br></br>
                        <br></br>
                    </Box>

                </Box>

            </form>

        </div>
    );

}

export default RequirementsForm;


/*
 Code references: 
 https://github.com/mui/material-ui/tree/v5.8.4/docs/data/material/getting-started/templates/sign-in
 */