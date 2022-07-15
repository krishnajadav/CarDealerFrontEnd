import oilChange from "./assets/oilchange.png";
import tyreService from "./assets/tyreservice.png";
import airFilter from "./assets/airfilter.png";
import testDriveCar from "./assets/testdrivecar.png";
import {Url} from "../../constants/global"
/*
Author: Adarsh Kannan Iyengar(ad398244@dal.ca)
*/
export const services = [
  {
    service: "Tyre Service",
    image: tyreService,
    content:
      "Deflated or Punctured Tyres? Book an appointment for servicing the tyres of your car.",
  },
  {
    service: "Oil Change",
    image: oilChange,
    content:
      "Car not running smoothly? Book an appointment for servicing and changing the oil in your car.",
  },
  {
    service: "Air Filter Change",
    image: airFilter,
    content:
      "Problems with the air filter of the car? Book an appointment for changing the air filter in your car.",
  },
  {
    service: "Test Drive",
    image: testDriveCar,
    content: "Select from available vehicles to book a guaranteed time for a test drive"
  },
];

export const carModels = [
  "Select",
  "Toyota Camry",
  "Honda Civic",
  "Porche Tycan",
  "Hyundai CRV",
  "Dodge Challenger",
  "Subaru Outback",
  "Toyota Corolla",
  "Hyundai Elantra",
];
export const timeSlot = [
  "Select",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];
export const location = ["Select", "Halifax", "Dartmouth", "Bedford"];
export const baseURL = Url+"/api";

export const setBookingData = (values) =>
  localStorage.setItem("bookings", JSON.stringify(values));

export const getBookingData = async () => {
  // const data = localStorage.getItem("bookings");

  try {
    const res = await fetch(`${baseURL}/customerService/viewBooking`);
    const data = await res.json();
    return data;
  } catch (e) {
    return { err: e.message };
  }
};

export const formatDate = (date, pattern, seperator = "-") => {
  date = new Date(date);
  const [dd, mm, yy] = [
    date.getDate(),
    "0" + (date.getMonth() + 1).toString(),
    date.getFullYear(),
  ];

  return [yy, mm, dd].join(seperator);
};
