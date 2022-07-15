// Author: Tuan Hamid
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {useEffect} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import { Url } from './../../constants/global'

function EmployeeList() {
    let [rows, setRows] = React.useState([])
    const [selectedUser, setSelectedUser] = React.useState('');

    useEffect(() => {
        axios
            .get(Url + "/api/user/employees", )
            .then((response) => {
                setRows(response.data);
            });
    }, []);

    const renderAction = (params) => {
        if (params.row.isEnabled) {
            return(
                <strong>
                    <Button
                        onClick={() => {
                            handleClickOpen(params.row.username)
                        }}
                        color="error"
                    >
                        Deactivate
                    </Button>
                </strong>
            )
        }
    }

    // Datagrid adopted from MUI https://mui.com/x/react-data-grid/
    // Datagrid button customization adopted from Zack Amin (StackOverflow) https://stackoverflow.com/a/67380953
    const columns = [
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
            editable: true,
        },
        {
            field: 'isEnabled',
            headerName: 'Is active?',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 150,
            renderCell: renderAction,
            disableClickEventBubbling: true,
        }
    ];



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (data) => {
        setSelectedUser(data);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedUser('');
        setOpen(false);
    };

    const handleDeactivate = () => {
        axios
            .put(Url + "/api/user/updatestatus", {
                username: selectedUser,
                isEnabled: false
            })
            .then((response) => {
                if(response.status === 200) {
                    toast.success('Status updated', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
                    setSelectedUser('');
                    setOpen(false);
                    axios
                        .get(Url + "/api/user/employees", )
                        .then((response) => {
                            setRows(response.data);
                        });
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
    };

    return (

        <div style={{ height: 400, width: '100%', padding: '20px' }}>
            <Stack mb={2} direction="row" spacing={2}>
                <Button variant="contained" color="primary" component={Link} to="/manage/employee/add">
                    Add
                </Button>
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm permanent deactivation?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeactivate}>Deactivate</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <DataGrid
                getRowId={(row) => row._id}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );

}

export default EmployeeList;