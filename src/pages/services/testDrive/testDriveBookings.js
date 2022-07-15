import React, { useEffect, useState } from "react";
import { getTestDrives, cancelTestDrive, bookTestDrive } from "./testDriveHelper"
import { Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TestDriveServiceFormDialog from "../testDrive/TestDriveServiceForm";
import "./../bookings/bookings.css";

/*
Authors: 
Leah Isenor
Adarsh Kannan Iyengar

This file is a modified version of customerBookings.js, specialized for displaying
test drive bookings.

References:
This card component from Material UI was used to display the booking details. 
https://mui.com/material-ui/react-card/
*/
const BookingCard = ({
  model,
  date,
  time,
  onUpdate,
  onDelete,
}) => {
  return (
    <Card className="booking-card">
      <div className="car-model">{model}</div>
      <div className="type">{"Test Drive"}</div>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="location">{"Halifax"}</div>
      <div className="actions">
        <EditIcon style={{ cursor: "pointer" }} onClick={onUpdate} />
        <DeleteIcon style={{ cursor: "pointer" }} onClick={onDelete} />
      </div>
    </Card>
  );
};

const TestDriveBookings = () => {
    const [bookings, setBookings] = useState();
    const [updated, setUpdated] = useState();
    const [open, setOpen] = React.useState(false);
    const [activeService, setActiveService] = React.useState(null);
    const [activeID, setActiveID] = React.useState(null);

    async function getBookings(){ 
        let result = await getTestDrives();
        setBookings(result);
    } 

    useEffect(() => {
        getBookings(); 
    }, [updated]);

    const openModal = (service) => {
        setActiveService(service.type);
        setActiveID(service._id);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setActiveService(null);
    };

    const updateHandler = async (updatedBooking) => {
        let canceled = await cancelTestDrive(activeID);
        let booked = await bookTestDrive(updatedBooking);
        setUpdated(!updated)
        closeModal();
    };

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure to Delete?")) {
            let canceled = await cancelTestDrive(id);
            setUpdated(!updated);
        }
    }
    
    return (
    <div className="bookings-wrapper">
        <h2 style={{ color: "black" }}>Test drives:</h2>
        {bookings &&
        bookings.map((booking) => (
            <BookingCard
            onDelete={() => deleteHandler(booking._id)}
            onUpdate={() => openModal(booking)}
            model={booking.car}
            time={booking.time}
            date={booking.date}
            />
        ))}
        {(bookings?.length === 0 || !bookings) && (
        <h3 className="header-booking">No Bookings available</h3>
        )}
        <TestDriveServiceFormDialog
        key={updated}
        isUpdate
        onUpdate={updateHandler}
        id={activeID}
        service={activeService}
        open={open}
        handleClose={() => setOpen(false)}
        />
    </div>
    );
};

export default TestDriveBookings;
