
import axios from 'axios'


function getWeather(lat, long) {
    return axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
        params: {
            q: `${lat},${long}`
        },
        headers: {
            'X-RapidAPI-Key': 'daf6dbeaedmsh26a0f4ee4d599a6p15635ejsnab3bd23a5ff9',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
}

function joinArrayWithComma(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += ", ";
        } else {
            result += ".";
        }
    }
    return result;
}

export { getWeather, joinArrayWithComma }