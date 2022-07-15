/*
Author: Leah Isenor
This file contains functions for making requests to the test drive booking API
*/
const axios = require("axios");
const { baseURL } = require("./../helper");

export const getTimes = async () => {
    try {
        const times = await axios.get(baseURL+"/testdrives/timeslots");
        times.data.unshift("Select");
        return times.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const getCars = async () => {
    try {
        const cars = await axios.get(baseURL+"/testdrives/cars");
        cars.data.unshift("Select");
        return cars.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const getUnavailableTimes = async () => {
    try {
        const unavailable = await axios.get(baseURL+"/testdrives/appointments/unavailable");
        return unavailable.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const bookTestDrive = async (data) => {
    try {
        const body = {
            car: data.carModel,
            date: data.date,
            time: data.timeSlot
        }
        let id = localStorage.getItem("id");
        await axios.put(baseURL +"/testdrives/appointments/"+id, body);
        return "Successfully booked test drive";
    } catch (err) {
        console.log(err.message);
        return "Error, could not book appointment";
    }
}

export const getTestDrives = async () => {
    try {
        let id = localStorage.getItem("id");
        let appointments = await axios.get(baseURL +"/testdrives/appointments/"+id);
        return appointments.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const cancelTestDrive = async (id) => {
    try {
        await axios.delete(baseURL +"/testdrives/appointments/cancel/"+id);
        return "Successfully canceled test drive";
    } catch (err) {
        console.log(err.message);
        return "Error, could not cancel appointment";
    }
}