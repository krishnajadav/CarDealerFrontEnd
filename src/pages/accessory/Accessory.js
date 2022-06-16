import TextField from "@mui/material/TextField";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import React from "react";
import {Avatar} from "@mui/material";
import Box from "@mui/material/Box";

function Accessory() {
    return (
        <Box p={3}>
            <Paper>
                <Avatar
                    src="/oil.jpg"
                    sx={{ width: 200, height: 200 }}
                />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            value="Castrol 20W"
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
                            value="Oil"
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
                            value="$45"
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
                            value="10"
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
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel quam eget orci laoreet"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Accessory;