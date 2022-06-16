import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

function Servicerecord() {
  const columns = [
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 150,
    },
    {
      field: "carModel",
      headerName: "Car Model",
      width: 150,
    },
    {
      field: "service",
      headerName: "Services",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      editable: true,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
      editable: true,
    },

    {
      field: "id",
      headerName: "Approved On",
      width: 150,
      editable: true,
    },
    {
      field: "approvedBy",
      headerName: "Approved By",
      width: 150,
      editable: true,
    },
  ];

  const rows = [
    {
      customerName: "David Wallace",
      carModel: "Porche Tycan",
      service: "Oil Change",
      id: "23-05-2022",
      status: "Pending",
      approvedBy: "Robert",
      date: "13-05-2022",
      time: "8.00 AM",
      location: "Halifax",
    },
    {
      customerName: "Jim Halpert",
      carModel: "Toyota Camry",
      service: "Brake Service",
      id: "21-06-2022",
      status: "Completed",
      date: "23-05-2022",
      time: "9.00 AM",
      location: "Bedford",
      approvedBy: "Robert",
    },
    {
      customerName: "Dwight Schrute",
      service: "Light Service",
      id: "10-05-2022",
      status: "Completed",
      carModel: "Honda Civic",
      date: "13-06-2022",
      time: "10.00 AM",
      location: "Halifax",
      approvedBy: "Robert",
    },
    {
      customerName: "Pam Beasley",
      service: "Air Filter Change",
      id: "13-06-2022",
      status: "Pending",
      carModel: "Toyota Camry",
      date: "14-06-2022",
      time: "2.00 PM",
      location: "Dartmouth",
      approvedBy: "Max",
    },
    {
      customerName: "Andrew Bernard",
      service: "Tyre Service",
      id: "12-05-2022",
      status: "Pending",
      carModel: "Honda Civic",
      date: "25-05-2022",
      time: "5.00 PM",
      location: "Halifax",
      approvedBy: "Max",
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        height: 450,
        width: "90%",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Service Approval?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Approve</Button>
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
        disableSelectionOnClick
      />
    </div>
  );
}

export default Servicerecord;
