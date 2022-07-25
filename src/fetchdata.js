import React, {
    Component
} from 'react';
import axios from 'axios';
axios.defaults.baseURL = "http://xxx.xxx.xxx.xxx:xxx/";
const getData = (url, param, onReady, onError) => {
    let onReadyDefault = function (response) {
        console.log("success");
    };
    let onErrorDefault = function (response) {
        console.log("error");
    };
    onReady = onReady || onReadyDefault;
    onError = onError || onErrorDefault;
 
}
const postData = (url, param, onReady, onError) => {

    let onReadyDefault = function (response) {
        console.log("success");
    };
    let onErrorDefault = function (response) {
        console.log("error");
    };
    onReady = onReady || onReadyDefault;
    onError = onError || onErrorDefault;
  

}

class FetchData {
    static GetCitys(param, onReady, onError) {
        getData("/GetCitys", param, onReady, onError);
    }
    static GetCityWeather(param, onReady, onError) {
        getData("/GetCityWeather", param, onReady, onError);
    }
    static GetTide(param, onReady, onError) {
        getData("/GetTide", param, onReady, onError);
    }

}
export default FetchData;