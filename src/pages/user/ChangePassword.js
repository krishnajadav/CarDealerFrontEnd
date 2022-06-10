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

function ChangePassword() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
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
                <Typography variant="h6" >
                    Change Password
                </Typography>
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
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default ChangePassword;