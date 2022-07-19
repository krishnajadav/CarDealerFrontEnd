/*
Author: Harsh Hariramani (B00899363)

Code References:
Used material UI icon to display the car icon
https://mui.com/material-ui/material-icons/

Used the Material UI library to implement a responsive customer form with Material UI components.
https://mui.com/material-ui/getting-started/templates/sign-in/

Used the Yup validator for validating the Form components
https://formik.org/docs/guides/validation 
*/

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, Avatar } from '@mui/material';
import ElectricCarSharpIcon from '@mui/icons-material/ElectricCarSharp';
//import Grid from "@mui/material/Grid";

import { Url } from './../../constants/global';


function RequirementsForm() {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        brand: Yup.string().required('Vehicle brand is required'),
        model: Yup.string().required('Preferred car model is required'),
        dealer: Yup.string().required('Dealer name is required'),
        customer: Yup.string().required('Customer name is required'),
        email: Yup.string()
            .required('Email address is required')
            .email('Please enter a valid email address'),

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
            .post(Url + "/api/vehicle", {
                brand: data.brand,
                model: data.model,
                dealer: data.dealer,
                customer: data.customer,
                email: data.email
            })
            .then((response) => {
                if (response.status === 201) {
                    toast.success('Your requirements have been submitted successfully. A dealer will get in touch with you soon.', {
                        position: "top-right",
                        autoClose: 9000,
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

                    <Typography component="h1" variant="h4">
                       <b> Pre-Order a Vehicle </b>
                    </Typography>

                    <Avatar sx={{ m: 2, bgcolor: 'secondary.main', width: 65, height: 65 }}>
                        <ElectricCarSharpIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Vehicle Requirements Form
                    </Typography>

                    <Box component="form" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '50%'
                    }}>

                        <br></br>

                        <TextField
                            placeholder="Enter the vehicle brand "
                            id="brand"
                            name="brand"
                            label="Vehicle Brand *"
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
                            placeholder="Enter your preferred car model"
                            id="model"
                            name="model"
                            label="Car model *"
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
                            label="Preferred Dealer name *"
                            fullWidth
                            margin="dense"
                            {...register('dealer')}
                            error={errors.dealer ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.dealer?.message}
                        </Typography>

                        <br></br>

                        <TextField
                            placeholder="Enter your full name"
                            id="customer"
                            name="customer"
                            label="Customer name *"
                            fullWidth
                            margin="dense"
                            {...register('customer')}
                            error={errors.customer ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.customer?.message}
                        </Typography>

                        <br></br>

                        <TextField 
                            placeholder="Enter your email address"
                            id="email"
                            name="email"
                            label="Email address *"
                            fullWidth
                            margin="dense"
                            {...register('email')}
                            error={errors.email ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.email?.message}
                        </Typography>

                        <br></br>
                        
                        <Typography variant="inherit" color="green"> (*) = required fields </Typography>
                        
                        <br></br>

                        <Typography variant="inherit" color="orange"> (Please enter 'none' if there is no dealer preference) </Typography>

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

                        <Box display={"flex"} mt="10px" justifyContent={"space-between"} width={"100%"}>
                            <Link href="/quotes" variant="body2">
                                <h5> <b> Request a quote </b> </h5>
                            </Link>
                            <Link href="/services" variant="body2">
                                <h5> <b> View offered services </b> </h5>
                            </Link>

                        </Box>

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