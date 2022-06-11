import React from "react";
import { Card } from "@mui/material";
import { useBookings } from "../store";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ServiceFormDialog from "../ServiceForm";
import "./bookings.css";

const BookingCard = ({
  model,
  date,
  time,
  type,
  location,
  onUpdate,
  onDelete,
}) => {
  return (
    <Card className="booking-card">
      <div className="car-model">{model}</div>
      <div className="type">{type}</div>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="location">{location}</div>
      <div className="actions">
        <EditIcon style={{ cursor: "pointer" }} onClick={onUpdate} />
        <DeleteIcon style={{ cursor: "pointer" }} onClick={onDelete} />
      </div>
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
    setActiveID(service.id);
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
    <div className="bookings-wrapper">
      <h1 className="header-booking">Hello Customer!</h1>
      <br></br>
      <h1 style={{ color: "white" }}>Booking Details:</h1>
      {bookings &&
        bookings.map((booking) => (
          <BookingCard
            onDelete={() => deleteHandler(booking.id)}
            onUpdate={() => openModal(booking)}
            type={booking.type}
            model={booking.carModel}
            time={booking.timeSlot}
            date={booking.date}
            location={booking.location}
          />
        ))}
      {(bookings?.length === 0 || !bookings) && (
        <h3 className="header-booking">No Bookings available</h3>
      )}
      <ServiceFormDialog
        isUpdate
        onUpdate={updateHandler}
        id={activeID}
        handleSubmit={""}
        service={activeService}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
};

export default CustomerBookings;
