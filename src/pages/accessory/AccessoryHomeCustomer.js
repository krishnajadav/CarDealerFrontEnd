import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {CardActionArea} from "@material-ui/core";
import {Link} from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function AccessoryHomeCustomer() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const [textTab1, setTextTab1] = React.useState("");
    const [helperTextTab1, setHelperTextTab1] = React.useState();
    const [helperTextTab1Error, setHelperTextTab1Error] = React.useState(false);

    const [textTab2, setTextTab2] = React.useState("");
    const [helperTextTab2, setHelperTextTab2] = React.useState();
    const [helperTextTab2Error, setHelperTextTab2Error] = React.useState(false);

    const [textTab3, setTextTab3] = React.useState("");
    const [helperTextTab3, setHelperTextTab3] = React.useState();
    const [helperTextTab3Error, setHelperTextTab3Error] = React.useState(false);

    const [textTab4, setTextTab4] = React.useState("");
    const [helperTextTab4, setHelperTextTab4] = React.useState();
    const [helperTextTab4Error, setHelperTextTab4Error] = React.useState(false);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const checkTab1 = () => {
        if (textTab1 === "") {
            setHelperTextTab1Error(true);
            setHelperTextTab1("Search field must not be empty to search.");
        } else {
            setHelperTextTab1Error(false);
            setHelperTextTab1("");
        }
    }

    const checkTab2 = () => {
        if (textTab2 === "") {
            setHelperTextTab2Error(true);
            setHelperTextTab2("Search field must not be empty to search.");
        } else {
            setHelperTextTab2Error(false);
            setHelperTextTab2("");
        }
    }

    const checkTab3 = () => {
        if (textTab3 === "") {
            setHelperTextTab3Error(true);
            setHelperTextTab3("Search field must not be empty to search.");
        } else {
            setHelperTextTab3Error(false);
            setHelperTextTab3("");
        }
    }

    const checkTab4 = () => {
        if (textTab4 === "") {
            setHelperTextTab4Error(true);
            setHelperTextTab4("Search field must not be empty to search.");
        } else {
            setHelperTextTab4Error(false);
            setHelperTextTab4("");
        }
    }
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirm accessory removal?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Remove</Button>
                        <Button onClick={handleClose} autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        textColor="secondary"
                        indicatorColor="secondary"
                        value={value}
                        color="secondary"
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Oil" />
                        <Tab label="Car Care" />
                        <Tab label="Tools" />
                        <Tab label="Tires" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Stack direction="row" m={1} justifyContent="space-between">

                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab1}
                                onChange={(event) => setTextTab1(event.target.value)}
                                error={helperTextTab1Error}
                                helperText={helperTextTab1}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab1}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid card xs={4} sm={4} md={4} key={index}>
                                <Card sx={{ m: 1 }}>
                                    <CardActionArea component={Link} to={`/accessories/view`}>
                                        <CardMedia
                                            component="img"
                                            alt="oil can"
                                            height="140"
                                            image="/oil.jpg"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Castrol GTX 10W30
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Ut vel quam eget orci laoreet ...
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                $45
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab2}
                                onChange={(event) => setTextTab2(event.target.value)}
                                error={helperTextTab2Error}
                                helperText={helperTextTab2}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab2}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid card xs={4} sm={4} md={4} key={index}>
                                <Card sx={{ m: 1 }}>
                                    <CardActionArea component={Link} to={`/accessories/view`}>
                                        <CardMedia
                                            component="img"
                                            alt="oil can"
                                            height="140"
                                            image="/oil.jpg"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Castrol GTX 10W30
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Ut vel quam eget orci laoreet ...
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                $45
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stack direction="row" m={1} justifyContent="space-between">

                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab3}
                                onChange={(event) => setTextTab3(event.target.value)}
                                error={helperTextTab3Error}
                                helperText={helperTextTab3}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab3}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid card xs={4} sm={4} md={4} key={index}>
                                <Card sx={{ m: 1 }}>
                                    <CardActionArea component={Link} to={`/accessories/view`}>
                                        <CardMedia
                                            component="img"
                                            alt="oil can"
                                            height="140"
                                            image="/oil.jpg"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Castrol GTX 10W30
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Ut vel quam eget orci laoreet ...
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                $45
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Stack direction="row" >
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab4}
                                onChange={(event) => setTextTab4(event.target.value)}
                                error={helperTextTab4Error}
                                helperText={helperTextTab4}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab4}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid card xs={4} sm={4} md={4} key={index}>
                                <Card sx={{ m: 1 }}>
                                    <CardActionArea component={Link} to={`/accessories/view`}>
                                        <CardMedia
                                            component="img"
                                            alt="oil can"
                                            height="140"
                                            image="/oil.jpg"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Castrol GTX 10W30
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Ut vel quam eget orci laoreet ...
                                            </Typography>
                                            <Typography sx={{ fontWeight: 'bold' }} mt={2}>
                                                $45
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </Box>
        </div>
    );
}

export default AccessoryHomeCustomer;