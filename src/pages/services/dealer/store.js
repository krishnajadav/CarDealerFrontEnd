import { createContext, useState, useContext, useEffect } from "react";
import { getBookingData, setBookingData } from "./serviceData";
/*
Author: Adarsh Kannan Iyengar(ad398244@dal.ca)
*/
const BookingContext = createContext({});

export const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState(getBookingData() ?? []);

  useEffect(() => {
    setBookingData(bookings);
  }, [bookings]);

  const addBooking = (booking) => {
    setBookings((existingBookings) => [booking, ...existingBookings]);
  };
  const deleteBooking = (id) => {
    setBookings((existingBookings) =>
      existingBookings.filter((e) => e.id !== id)
    );
  };
  const updateBooking = (updatedBooking) => {
    const updatedData = bookings.map((b) =>
      updatedBooking.id === b.id ? updatedBooking : b
    );
    setBookings(updatedData);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        deleteBooking,
        updateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);
