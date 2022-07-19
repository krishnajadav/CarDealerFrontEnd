// Author: Tuan Hamid
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./AccessoryHomeEmployee.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Url } from './../../constants/global'

// Code for components adopted from https://mui.com/material-ui/react-card/
// Code for components adopted from https://mui.com/material-ui/react-tabs/
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

function AccessoryHomeEmployee() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [oils, setOils] = React.useState([]);
    const [care, setCare] = React.useState([]);
    const [tools, setTools] = React.useState([]);
    const [tires, setTires] = React.useState([]);
    const [selectedItem, setSelectedItem] = React.useState('');
    const [tempDataHolder1, setTempDataHolder1] = React.useState([]);
    const [tempDataHolder2, setTempDataHolder2] = React.useState([]);
    const [tempDataHolder3, setTempDataHolder3] = React.useState([]);
    const [tempDataHolder4, setTempDataHolder4] = React.useState([]);

    const populateData = () => {
        axios
            .get(Url + "/api/accessory/category/Oil", )
            .then((response) => {
                setOils(response.data);
                setTempDataHolder1(response.data);
            });
        axios
            .get(Url + "/api/accessory/category/Tools", )
            .then((response) => {
                setTools(response.data);
                setTempDataHolder3(response.data);
            });
        axios
            .get(Url + "/api/accessory/category/Tires", )
            .then((response) => {
                setTires(response.data);
                setTempDataHolder4(response.data);
            });
        axios
            .get(Url + "/api/accessory/category/Car%20Care", )
            .then((response) => {
                setCare(response.data);
                setTempDataHolder2(response.data);
            });
    }

    useEffect(() => {
        populateData();
    }, []);

    const handleClickOpen = (params) => {
        setSelectedItem(params);
        setOpen(true);
    };

    const handleDelete = () => {
        axios
            .delete(Url + "/api/accessory/"+selectedItem)
            .then((response) => {
                if(response.status === 200) {
                    toast.success('Accessory removed', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    populateData();
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
        setSelectedItem('')
        setOpen(false);
    };

    const handleClose = () => {
        setSelectedItem('')
        setOpen(false);
    };

    const [textTab1, setTextTab1] = React.useState("");

    const [textTab2, setTextTab2] = React.useState("");

    const [textTab3, setTextTab3] = React.useState("");

    const [textTab4, setTextTab4] = React.useState("");

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const checkTab1 = () => {
        if (textTab1 === '') {
            setOils(tempDataHolder1);
        } else {
            const results = oils.filter(data => {
                return data.name.toLowerCase().includes(textTab1.toLowerCase());
            })
            setOils(results);
        }
    }

    const checkTab2 = () => {
        if (textTab2 === '') {
            setCare(tempDataHolder2);
        } else {
            const results = care.filter(data => {
                return data.name.toLowerCase().includes(textTab2.toLowerCase());
            })
            setCare(results);
        }
    }

    const checkTab3 = () => {
        if (textTab3 === '') {
            setTools(tempDataHolder3);
        } else {
            const results = tools.filter(data => {
                return data.name.toLowerCase().includes(textTab3.toLowerCase());
            })
            setTools(results);
        }
    }

    const checkTab4 = () => {
        if (textTab4 === '') {
            setTires(tempDataHolder4);
        } else {
            const results = tires.filter(data => {
                return data.name.toLowerCase().includes(textTab4.toLowerCase());
            })
            setTires(results);
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
                        <Button onClick={handleDelete}>Remove</Button>
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
                        aria-label="category tabs"
                    >
                        <Tab label="Oil" />
                        <Tab label="Car Care" />
                        <Tab label="Tools" />
                        <Tab label="Tires" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Button variant="contained" color="primary" component={Link} to="/manage/accessories/add">
                            Add
                        </Button>

                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab1}
                                onChange={(event) => setTextTab1(event.target.value)}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab1}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {oils.map((elem) => (
                            <Grid card xs={4} sm={4} md={4} key={elem._id}>
                                <Card sx={{ m: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="140"
                                        image={elem.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={()=>{
                                            navigate("/manage/accessories/edit/" + elem._id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={()=>{
                                            handleClickOpen(elem._id);
                                        }}>
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Button variant="contained" color="primary" component={Link} to="/manage/accessories/add">
                            Add
                        </Button>
                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab2}
                                onChange={(event) => setTextTab2(event.target.value)}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab2}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {care.map((elem) => (
                            <Grid card xs={4} sm={4} md={4} key={elem._id}>
                                <Card sx={{ m: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="140"
                                        image={elem.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={()=>{
                                            navigate("/manage/accessories/edit/" + elem._id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={()=>{
                                            handleClickOpen(elem._id);
                                        }}>
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Button variant="contained" color="primary" component={Link} to="/manage/accessories/add">
                            Add
                        </Button>

                        <Stack direction="row">
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab3}
                                onChange={(event) => setTextTab3(event.target.value)}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab3}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {tools.map((elem) => (
                            <Grid card xs={4} sm={4} md={4} key={elem._id}>
                                <Card sx={{ m: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="140"
                                        image={elem.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={()=>{
                                            navigate("/manage/accessories/edit/" + elem._id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={()=>{
                                            handleClickOpen(elem._id);
                                        }}>
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Stack direction="row" m={1} justifyContent="space-between">
                        <Button variant="contained" color="primary" component={Link} to="/manage/accessories/add">
                            Add
                        </Button>

                        <Stack direction="row" >
                            <TextField
                                color="secondary"
                                label="Search field"
                                type="search"
                                variant="filled"
                                value={textTab4}
                                onChange={(event) => setTextTab4(event.target.value)}
                            />
                            <Button variant="contained" color="secondary" onClick={checkTab4}>
                                <SearchIcon></SearchIcon>
                            </Button>
                        </Stack>
                    </Stack>
                    <Grid container columns={{ xs: 4, sm: 8, md: 16 }}>
                        {tires.map((elem) => (
                            <Grid card xs={4} sm={4} md={4} key={elem._id}>
                                <Card sx={{ m: 1 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="140"
                                        image={elem.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.description}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="secondary" onClick={()=>{
                                            navigate("/manage/accessories/edit/" + elem._id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="error" onClick={()=>{
                                            handleClickOpen(elem._id);
                                        }}>
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </TabPanel>
            </Box>
        </div>
    );
}

export default AccessoryHomeEmployee;
