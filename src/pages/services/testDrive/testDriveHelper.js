const axios = require("axios");
const url = "http://localhost:4200"

export const getTimes = async () => {
    try {
        const times = await axios.get(url+"/api/testdrives/timeslots");
        times.data.unshift("Select");
        return times.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const getCars = async () => {
    try {
        const cars = await axios.get(url+"/api/testdrives/cars");
        cars.data.unshift("Select");
        return cars.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const getUnavailableTimes = async () => {
    try {
        const unavailable = await axios.get(url+"/api/testdrives/appointments/unavailable");
        return unavailable.data;
    } catch (err) {
        console.log(err.message);
    }
}
/*
    app.get("/api/testdrives/appointments/:userid", controller.getAppointmentsForUser);
    app.put("/api/testdrives/appointments/:userid", controller.bookAppointment);
    app.delete("/api/testdrives/appointments/cancel/:appointmentid", controller.cancelAppointment);

*/