/*
Author: Leah Isenor
This file contains functions for making requests to the trade in estimate API
*/
const {Url} = require("../../constants/global");
const axios = require("axios");

export const getCars = async () => {
    try {
        const cars = await axios.get(Url+"/api/tradein/options");
        return cars.data;
    } catch (err) {
        console.log(err.message);
    }
}

export const getEstimate = async (vehicleId, year, km) => {
    try {
        const params = {
            "year": parseInt(year),
            "km" : parseInt(km)
        }
        const response = await axios.get(Url+"/api/tradein/"+vehicleId, {params : params});
        return response.data.estimate;
    } catch (err) {
        console.log(err.message);
    }
}