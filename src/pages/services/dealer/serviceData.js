import oilChange from "./assets/oilchange.jpg";
import tyreService from "./assets/tyreservice.png";
import airFilter from "./assets/airfilter.png";
import brake from "./assets/brake.jpg";
import light from "./assets/light.jpg";
import battery from "./assets/battery.jpg";
import testDriveCar from "./assets/testdrivecar.png";
import repairsCar from "./assets/repairscar.png";

export const services = [
  {
    service: "Tyre Service",
    image: tyreService,
    content:
      "Select the time slot availability servicing the tyres in the car.",
  },
  {
    service: "Oil Change",
    image: oilChange,
    content:
      "Select the time slot availability for changing the oil in the vehicles.",
  },
  {
    service: "Air Filter Change",
    image: airFilter,
    content:
      "Select the time slot availability for changing the air filter in the vehicles.",
  },
  {
    service: "Battery Check",
    image: battery,
    content:
      "Select the time slot availability for checking the battery in the vehicles.",
  },
  {
    service: "Brake Inspection",
    image: brake,
    content:
      "Select the time slot availability for inspecting the brakes in the vehicles.",
  },
  {
    service: "Lights Check",
    image: light,
    content:
      "Select the time slot availability for checking the battery in the vehicles.",
  },
  {
    service: "Test Drive",
    image: testDriveCar,
    content:
      "Select the time slot availability for checking the battery in the vehicles.",  },
  {
    service: "Repair Estimate",
    image: repairsCar,
    content:
      "Select the time slot availability for repair estimate.",
   },
];

export const timeSlotFrom = [
  "Select",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
];
export const timeSlotTill = [
  "Select",

  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];
export const location = ["Select", "Halifax", "Dartmouth", "Bedford"];

export const setBookingData = (values) =>
  localStorage.setItem("bookings", JSON.stringify(values));

export const getBookingData = () => {
  const data = localStorage.getItem("bookings");
  if (data) {
    return JSON.parse(data);
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
