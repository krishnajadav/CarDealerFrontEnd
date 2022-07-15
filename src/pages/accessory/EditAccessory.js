// Author: Tuan Hamid
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import {useNavigate, useParams} from "react-router-dom";
import Stack from "@mui/material/Stack";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import {toast} from "react-toastify";
import { Url } from './../../constants/global'

function EditAccessory() {
    const params = useParams();
    const [category, setCategory] = useState("Oil");
    const [convertedImage, setConvertedImage] = useState('');

    useEffect(() => {
        axios
            .get(Url + "/api/accessory/" + params.id, )
            .then((response) => {
                setValue('productName',response.data.name);
                setValue('description',response.data.description);
                setValue('price',response.data.price);
                setValue('quantity',response.data.quantity);
                setCategory(response.data.category);
                setConvertedImage(response.data.image)
                console.log(convertedImage)
            });
    }, []);

    const navigate = useNavigate();

    const handleSelectClick = (event) => {
        console.log(event.target.value)
        setCategory(event.target.value);
    };


    const validationSchema = Yup.object().shape({
        productName: Yup.string().required('Product name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.string().required('Price is required'),
        quantity: Yup.string().required('Quantity is required'),
    });

    const {
        register,
        setValue,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(convertedImage);
        axios
            .put(Url + "/api/accessory/" + params.id, {
                image: convertedImage,
                name: data.productName,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                category: category
            })
            .then((response) => {
                if(response.status === 200) {
                    toast.success('Accessory updated', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    navigate("/manage/accessories");
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

    const handleFileUpload = async (event) => {
        const img = await convertToBase64(event.target.files[0]);
        setConvertedImage(img);
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    return (

        <Paper>
            <Box px={3} py={2}>
                <Typography variant="h4" align="center">
                    Edit Accessory
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3} sm={3}>
                        <Stack direction="row">
                            <label>
                                <input
                                    onChange={handleFileUpload}
                                    id="upload"
                                    name="upload"
                                    style={{display: 'none'}}
                                    type="file"
                                    accept="image/*"
                                />
                                <Button
                                    variant="outlined"
                                    component="span">
                                    Choose Image (Optional)
                                </Button>
                            </label>
                            <div className="file-name">
                                <img height="150px" width="150px" alt="product" src={convertedImage}/>
                            </div>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            defaultValue="Castrol 20W"
                            required
                            id="productName"
                            name="productName"
                            label="Product Name"
                            fullWidth
                            margin="dense"
                            {...register('productName')}
                            error={errors.productName ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.productName?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            defaultValue="This a generic description"
                            required
                            id="description"
                            name="description"
                            label="Description"
                            multiline
                            fullWidth
                            rows={4}
                            margin="dense"
                            {...register('description')}
                            error={errors.description ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.description?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            id="category"
                            select
                            label="Category"
                            value={category}
                            onChange={handleSelectClick}
                        >
                            <MenuItem value={"Oil"} key={"Oil"}>Oil</MenuItem>
                            <MenuItem value={"Tools"} key={"Tools"}>Tools</MenuItem>
                            <MenuItem value={"Tires"} key={"Tires"}>Tires</MenuItem>
                            <MenuItem value={"Car Care"} key={"Car Care"}>Car Care</MenuItem>
                        </TextField>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            defaultValue="19"
                            required
                            id="price"
                            name="price"
                            label="Price"
                            type="number"
                            fullWidth
                            margin="dense"
                            {...register('price')}
                            error={errors.price ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.price?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            defaultValue="10"
                            required
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            type="number"
                            fullWidth
                            margin="dense"
                            {...register('quantity')}
                            error={errors.quantity ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.quantity?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default EditAccessory;