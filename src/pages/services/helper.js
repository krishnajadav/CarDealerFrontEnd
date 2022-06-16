import oilChange from "./assets/oilchange.jpg";
import tyreService from "./assets/tyreservice.png";
import airFilter from "./assets/airfilter.png";
import testDriveCar from "./assets/testdrivecar.png";
import repairsCar from "./assets/repairscar.png";

export const services = [
  {
    service: "Tyre Service",
    image: tyreService,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    service: "Oil Change",
    image: oilChange,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    service: "Air Filter Change",
    image: airFilter,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    service: "Test Drive",
    image: testDriveCar,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    service: "Repair Estimate",
    image: repairsCar,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const carModels = [
  "Select",
  "Toyota Camry",
  "Honda Civic",
  "Porche Tycan",
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
