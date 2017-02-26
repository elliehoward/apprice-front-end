import axios from 'axios';

const ROOT_URL = `https://appriceapi.herokuapp.com/api/products/popular`;
const SPECIFIC_URL = `https://appriceapi.herokuapp.com/api/products/search?name=`;
const GOOGLE_MAPS_GEOCODE_API = `AIzaSyDQV4GvK7esSdX_ExL9vj0lP84-22hnFAc`;
const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`;
const ADDRESS_TO_LAT_LONG = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

export const STORE_DATA = 'STORE_DATA';
export const SEND_DATA = 'SEND_DATA';
export const STORE_LOCATION = 'STORE_LOCATION';
export const STORE_USER = 'STORE_USER';
export const NUMBER_STORES = 'NUMBER_STORES';
export const SAVE_LIST = 'SAVE_LIST';
export const ONE_STORE = 'ONE_STORE';
export const TWO_STORE = 'TWO_STORE';
export const THREE_STORE = 'THREE_STORE';

export async function fetchGenericFood() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchSpecificFood(food) {
    let nameUrl = `${SPECIFIC_URL}${food}`
    try {
        let fetched = await fetch(nameUrl);
        let data = await fetched.json();

        return data;
    } catch (error) {
        console.log(error);

    }
}
export async function sendData(props) {

    const request = await axios.post(`https://appriceapi.herokuapp.com/api/appriceme`, props)

    const convertedRequest = await axios.post('https://appriceapi.herokuapp.com/api/appriceme/convert', request.data)

    return convertedRequest;
}
// Store actions 🏪
export function numOfStores(stores) {

    return {type: NUMBER_STORES, payload: stores}
}
export function oneStore(oneStore) {

    return {type: ONE_STORE, payload: oneStore}
}
export function twoStore(TwoStore) {

    return {type: TWO_STORE, payload: TwoStore}
}
export function threeStore(ThreeStore) {

    return {type: THREE_STORE, payload: ThreeStore}
}

export async function getData() {
    let url = `${ROOT_URL}`
    try {
        let fetched = await fetch(url);
        let data = await fetched.json();

        return data;
    } catch (error) {
        console.log(`I'm the GETDATA error`, error);
    }
}

export async function getMapData(selectCity) {
    let encodedLocation = encodeURIComponent(selectCity)
    let mapData = await fetch(`${ADDRESS_TO_LAT_LONG}${encodedLocation}`)
    mapData = await mapData.json();

    return mapData
}
export async function storeLocation(location) {
    let lat;
    let lng;
    if (location.coords) {
        lat = location.coords.latitude;
        lng = location.coords.longitude;
    }
    if (location.location) {
        lat = location.location.lat;
        lng = location.location.lng;
    }
    let data = {
        coords: {
            lat: lat,
            lng: lng
        }
    }
    return {type: STORE_LOCATION, payload: data}
}
export function storeData(data) {
    let resultData = data.data;
    return {type: STORE_DATA, payload: resultData}
}

export function signUp(props) {
    const request = axios.post(`https://appriceapi.herokuapp.com/api/users/register`, props)

    return request;
}
export function login(props) {
    const request = axios.post('https://appriceapi.herokuapp.com/api/users/login', props)
    return {type: STORE_USER, payload: request}
}


export function saveList(props) {
    return {type: SAVE_LIST, payload: props}
}
