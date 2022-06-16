import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

function Serviceapprove() {
  const Approval = () => {
    return (
      <strong>
        <Button style={{ color: "green" }} onClick={handleClickOpen}>
          Approve
        </Button>
      </strong>
    );
  };

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
      field: "id",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: Approval,
      disableClickEventBubbling: true,
    },
  ];

  const rows = [
    {
      customerName: "David Wallace",
      service: "Oil Change",
      id: "13-05-2022",
      status: "Pending",
      carModel: "Porche Tycan",
    },
    {
      customerName: "Jim Halpert",
      service: "Brake Service",
      id: "11-06-2022",
      status: "Completed",
      carModel: "Toyota Camry",
    },
    {
      customerName: "Dwight Schrute",
      service: "Light Service",
      id: "15-05-2022",
      status: "Completed",
      carModel: "Honda Civic",
    },
    {
      customerName: "Pam Beasley",
      service: "Air Filter Change",
      id: "09-06-2022",
      status: "Pending",
      carModel: "Toyota Camry",
    },
    {
      customerName: "Andrew Bernard",
      service: "Tyre Service",
      id: "10-05-2022",
      status: "Pending",
      carModel: "Honda Civic",
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    window.alert("Service Approved!");
    setOpen(false);
  };
  return (
    <div style={{ height: 450, width: "70%", padding: "10px", margin: "auto" }}>
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
        //pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}

export default Serviceapprove;
