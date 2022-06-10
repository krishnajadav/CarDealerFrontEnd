import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";



function EmployeeList() {
    const renderAction = () => {
        return (
            <strong>
                <Button
                    onClick={handleClickOpen}
                    color="error"
                >
                    Deactivate
                </Button>
            </strong>
        )
    }


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
            field: 'id',
            headerName: 'Username',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
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



    const rows = [
        {firstName: 'David', lastName: 'Peterson', id: 'dpeterson@react.com', status: 'Enabled' },
        {firstName: 'Jim', lastName: 'Wallace', id: 'jwallace@react.com', status: 'Enabled' },
        {firstName: 'Dwight', lastName: 'Jamieson', id: 'djamieson@react.com', status: 'Enabled' },
        {firstName: 'Pam', lastName: 'Grace', id: 'pgrace@react.com', status: 'Enabled' },

    ];
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Button onClick={handleClose}>Deactivate</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <DataGrid
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