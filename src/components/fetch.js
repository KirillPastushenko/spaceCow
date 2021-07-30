import { getUnixTime, startOfToday, subMonths, subWeeks, fromUnixTime, format } from 'date-fns';
import  ruLocale from 'date-fns/locale/ru';

export const googleAPIKey = 'AIzaSyC3c3CMpjbS_c43jYeSSm3Fu2CQnoNu6PY'

const autofonAPIURL = 'https://gprs.autofon.ru:9443/jsonapi/';
const params = {
    key:'26ae6b396d8a402a84be28a32951dd57', 
    pwd: 'Wer461548'
};

const getURL = (APImethod) => {
    const url = new URL(`${autofonAPIURL}${APImethod}${APImethod ? '/' : ''}`);
    url.search = new URLSearchParams(params).toString();
    return url
}

const START_DATE = 1619901343;
const NOW = getUnixTime(new Date())
const INITIAL_DEVICE_ID = "166563";

const getDataFromServer = async (APImethod, reqest) => {
    try {
        const response = await fetch(getURL(APImethod), {
            method: 'POST',
            body: JSON.stringify(reqest),
        });
        return await response.json();
    } catch (error) {
        alert(error);
    }
}

const getTrack = async (startDate=START_DATE, endDate=NOW) => {
    const initialReqestToAutofon = [
        {
            "mid": INITIAL_DEVICE_ID,
            "start": startDate,
            "end": endDate
        }
    ];
    const data = await getDataFromServer('', initialReqestToAutofon);
    const points = data[0].points;
    const markers = points.map(function(point){
        return {
            position: {
              lat: point.lat,
              lng: point.lng
            },
            infoText: point.ts
        }
    });
    const tracks = points.map(function(point){
        return {
            lat: point.lat,
            lng: point.lng
        }
    });
    return {markers, tracks, startDate};
};

export const formatUnixtime = (unixtime) => {
    const date = fromUnixTime(unixtime);
    return format(date, 'd MMMM yyyy HH:mm', {
      locale: ruLocale
    });
}

export const getLastStates = async () => {
    const data = await getDataFromServer('laststates');
    const lastState = data[0];
    const markers = [{
        position: {
            lat: lastState.lat,
            lng: lastState.lng
        },
            infoText: lastState.ts
    }];
    const tracks = [];
    return {markers, tracks, lastState};
}

export const getFullTrack = async () => {
    return await getTrack();
}
export const getToday = async () => {
    const startDate = getUnixTime(startOfToday());
    return await getTrack(startDate);
}
export const getMonth = async () => {
    const startDate = getUnixTime(subMonths(new Date(), 1));
    return await getTrack(startDate);
}
export const getWeek = async () => {
    const startDate = getUnixTime(subWeeks(new Date(), 1));
    return await getTrack(startDate);
}