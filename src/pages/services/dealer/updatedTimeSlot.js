import React from "react";
import { Card } from "@mui/material";
import { useBookings } from "../store";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ServiceFormDialog from "../ServiceForm";
import TestDriveBookings from "../testDrive/testDriveBookings";
import "../bookings/bookings.css";
import TimeSlotDialog from "./Timeslotform";
/*
Author: Adarsh Kannan Iyengar(ad398244@dal.ca)

References:
This card component from Material UI was used to display the booking details. 
https://mui.com/material-ui/react-card/
*/
const BookingCard = ({
  model,
  date,
  time,
  upgradeTime,
  type,
  location,
  onUpdate,
  onDelete,
}) => {
  return (
    <Card className="booking-card">
      <div className="type">{type}</div>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="location">{location}</div>
      <div className="actions"></div>
    </Card>
  );
};

const CustomerBookings = () => {
  const { bookings, updateBooking, deleteBooking } = useBookings();
  const [open, setOpen] = React.useState(false);
  const [activeService, setActiveService] = React.useState(null);
  const [activeID, setActiveID] = React.useState(null);

  const openModal = (service) => {
    setActiveService(service.type);
    setActiveID(service._id);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveService(null);
  };

  const updateHandler = (updatedBooking) => {
    updateBooking(updatedBooking);
    closeModal();
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to Delete?")) {
      deleteBooking(id);
    }
  };

  return (
    <>
      <div className="bookings-wrapper">
        <h1 className="header-booking">Updated Timeslots:</h1>
        <br></br>
        {bookings &&
          bookings.map((booking) => (
            <BookingCard
              onDelete={() => deleteHandler(booking._id)}
              onUpdate={() => openModal(booking)}
              type={booking.type}
              model={booking.carModel}
              time={booking.time}
              date={booking.date}
              location={booking.location}
            />
          ))}
        {(bookings?.length === 0 || !bookings) && (
          <h3 className="header-booking">No Updated TimeSlots available</h3>
        )}
        <TimeSlotDialog
          isUpdate
          onUpdate={updateHandler}
          id={activeID}
          handleSubmit={""}
          service={activeService}
          open={open}
          handleClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default CustomerBookings;
