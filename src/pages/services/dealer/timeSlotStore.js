import { createContext, useState, useContext, useEffect } from "react";
import { getBookingData, setBookingData } from "./serviceData";
/*
Author: Adarsh Kannan Iyengar(ad398244@dal.ca)
*/
const BookingContext = createContext({});
const getRequestOptions = (method = "POST") => ({
  method,
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
});

export const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState(getBookingData() ?? []);

  useEffect(() => {
    setBookingData(bookings);
  }, [bookings]);

  const addBooking = (booking) => {
    fetch("http://locahost:3000/manage/updateTimeSlots", {
      ...getRequestOptions(),
      body: JSON.stringify({
        ...booking,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = {
          ...result.data,
          ...booking,
        };
        setBookings((existingBookings) => [newData, ...existingBookings]);
      });
  };
  const deleteBooking = (id) => {
    setBookings((existingBookings) =>
      existingBookings.filter((e) => e.id !== id)
    );
  };
  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        deleteBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => useContext(BookingContext);
