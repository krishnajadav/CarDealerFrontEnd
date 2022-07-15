// Author: Tuan Hamid
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
import axios from "axios";
import {toast} from "react-toastify";
import { Url } from './../../constants/global'

function ForgotPassword() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .email('Username should be a valid email')
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
            .post(Url + "/api/user/resetpassword", {
                username: data.username,
            })
            .then((response) => {
                if(response.status === 200) {
                    toast.success('Password reset mail sent', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    navigate("/login");
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

        <Paper>
            <Box px={3} py={2}>
                <Typography variant="h6" >
                    Enter email to recover your password
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            placeholder="Enter your username/email"
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
                <Grid container mt={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Request new password
                        </Button>
                    </Grid>
                </Grid>
                <Grid container mt={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Button variant="text" component={Link} to="/register">Don't have an account? Click here</Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );

}

export default ForgotPassword;