/*
Author: Leah Isenor, B00316891
*/
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

export const bookTestDrive = async (data) => {
    try {
        console.log("booking test drive")
        console.log(data)
        const body = {
            car: data.carModel,
            date: data.date,
            time: data.timeSlot
        }
        let id = localStorage.getItem("id");
        await axios.put(url +"/api/testdrives/appointments/"+id, body);
        return "Successfully booked test drive";
    } catch (err) {
        console.log(err.message);
        return "Error, could not book appointment";
    }
}

export const getTestDrives = async () => {
    try {
        let id = localStorage.getItem("id");
        let appointments = await axios.get(url +"/api/testdrives/appointments/"+id);
        return appointments;
    } catch (err) {
        console.log(err.message);
    }
}

export const cancelTestDrive = async (id) => {
    try {
        await axios.delete(url +"/api/testdrives/appointments/cancel/"+id);
        return "Successfully canceled test drive";
    } catch (err) {
        console.log(err.message);
        return "Error, could not cancel appointment";
    }
}