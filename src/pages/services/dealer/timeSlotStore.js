import { createContext, useState, useContext, useEffect } from "react";
import { getBookingData, setBookingData } from "./serviceData";
import { Url } from "../../../constants/global";
/*
Author: Adarsh Kannan Iyengar(ad398244@dal.ca)
*/
const BookingContext = createContext({});
export const baseURL = Url + "/api";

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
    fetch(`${baseURL}/manage/updateTimeSlots`, {
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
