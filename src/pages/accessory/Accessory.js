// Author: Tuan Hamid
import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import {Avatar} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import {useParams} from "react-router-dom";
import { Url } from './../../constants/global'

function Accessory() {
    const params = useParams();
    const [accessory, setAccessory] = useState("");
    useEffect(() => {
        axios
            .get(Url + "/api/accessory/" + params.id, )
            .then((response) => {
                setAccessory(response.data)
            });
    }, [params.id]);
    return (
        <Box p={3}>
            <Paper>
                <Avatar
                    src={accessory.image}
                    sx={{ width: 200, height: 200 }}
                />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            value={accessory.name}
                            defaultValue="Name"
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            defaultValue="Category"
                            value={accessory.category}
                            id="category"
                            name="category"
                            label="Category"
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            defaultValue="0"
                            value={accessory.price}
                            id="price"
                            name="price"
                            label="Price"
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            defaultValue="0"
                            value={accessory.quantity}
                            id="quantity"
                            name="quantity"
                            label="Quantity available"
                            fullWidth
                            margin="dense"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="description"
                            label="Description"
                            multiline
                            fullWidth
                            variant="standard"
                            rows={4}
                            value={accessory.description}
                            defaultValue="Description"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Accessory;