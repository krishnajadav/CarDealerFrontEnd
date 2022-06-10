import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

function CustomerRegistration() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        username: Yup.string()
            .required('Username is required')
            .email('Username should be a valid email'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    });

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        navigate("/login");
    }

    return (
        <Paper>
            <Box px={3} py={2}>
                <Typography variant="h2" >
                    User Registration
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            margin="dense"
                            {...register('firstName')}
                            error={errors.firstName ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.firstName?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            margin="dense"
                            {...register('lastName')}
                            error={errors.lastName ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.lastName?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            placeholder="Enter a valid email"
                            id="username"
                            name="username"
                            label="Username"
                            fullWidth
                            margin="dense"
                            {...register('username')}
                            error={errors.username ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.username?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            margin="dense"
                            {...register('password')}
                            error={errors.password ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.password?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            margin="dense"
                            {...register('confirmPassword')}
                            error={errors.confirmPassword ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.confirmPassword?.message}
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
                            Register
                        </Button>
                    </Grid>
                </Grid>
                <Grid container mt={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Button variant="text" component={Link} to="/login">Already have an account? Click here</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );

}

export default CustomerRegistration;