import axios from "axios";

/*
const getStopCount = (locality) => {
    axios.get("http://localhost:8088/stopcount?locality=" + locality)
    .then(function(response) {
        console.log(response.data);
        return response.data;
    }).catch(function(error) {
        return error;
    });
}; */
const getStopCount = (locality) => {
    return fetch("http://localhost:8088/stopcount?locality=" + locality)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}

const getStopsTypeLocality = (locality, types) => {
    return fetch("http://localhost:8088/stops?locality=" + locality + "&type=" + types)
    .then((response) => {
        return response.json();
    })
    .then((resJson) => {
        return resJson;
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}

const getNearestStopsType = (lat, lon, types) => {
    return fetch("http://localhost:8088/nearest?latitude=" + lat + "&longitude=" + lon + "&type=" + types)
    .then((response) => {
        return response.json();
    })
    .then((resJson) => {
        return resJson;
    })
    .catch((error) => {
        console.log("err", error)
        return Promise.reject(error)
    })
}

export default {
    getStopCount: getStopCount,
    getStopsTypeLocality: getStopsTypeLocality,
    getNearestStopsType: getNearestStopsType
};