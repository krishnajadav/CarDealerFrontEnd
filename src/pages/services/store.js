import { createContext, useState, useContext, useEffect } from "react";
import { setBookingData, getBookingData, baseURL } from "./helper";
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
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookingData().then((data) => setBookings(data));
  }, []);

  const addBooking = (booking) => {
    fetch(`${baseURL}/customerService/createBooking`, {
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
    fetch(`${baseURL}/customerService/deleteBooking/${id}`, {
      ...getRequestOptions("DELETE"),
    }).then((res) => {
      console.log(res);
      if (res.status === 200)
        setBookings((existingBookings) =>
          existingBookings.filter((e) => e._id !== id)
        );
    });
  };
  const updateBooking = (updatedBooking) => {
    fetch(`${baseURL}/customerService/updateBooking/${updatedBooking._id}`, {
      ...getRequestOptions("PUT"),
      body: JSON.stringify({
        carModel: updatedBooking.carModel,
        date: updatedBooking.date,
        time: updatedBooking.time,
        location: updatedBooking.location,
        type: updatedBooking.type,
      }),
    }).then((data) => {
      const updatedData = bookings.map((b) =>
        updatedBooking._id === b._id ? updatedBooking : b
      );
      setBookings(updatedData);
    });
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
