import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";
import MenuItem from '@mui/material/MenuItem';

function EditAccessory() {
    const [filename, setFilename] = useState("");
    const [category, setCategory] = React.useState("Oil");

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
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        navigate("/manage/accessories");
    }

    const handleFileUpload = (e) => {
        setFilename(e.target.files[0]);
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
                                {filename ? filename.name : null}
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